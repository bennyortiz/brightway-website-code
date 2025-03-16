'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type LazyImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

/**
 * LazyImage component that only loads images when they enter the viewport
 * This helps reduce initial page load time and save bandwidth
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If priority is true, load the image immediately
    if (priority) {
      setIsInView(true);
      return;
    }
    
    // Skip if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' } // Start loading when image is 200px from viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isInView ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <div 
          className="h-full w-full animate-pulse bg-gray-200" 
          style={{ aspectRatio: `${width}/${height}` }}
        />
      )}
    </div>
  );
} 