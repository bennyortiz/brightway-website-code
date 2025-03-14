'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ImageSkeleton from './image-skeleton';

type ImagePlacement = 'hero' | 'above-fold' | 'mid-page' | 'below-fold' | 'footer';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  onLoadingComplete?: (img: HTMLImageElement) => void;
  placement?: ImagePlacement;
  quality?: number;
  width?: number;
  height?: number;
  sizes?: string;
  containerHeight?: boolean;
}

/**
 * Enhanced safe image component with intelligent loading strategies
 * based on image placement within the page and optimized for LCP performance
 * 
 * Now with container height responsiveness - when containerHeight is true,
 * the image will adjust its height to match its parent container automatically
 */
export default function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackText,
  priority = false,
  loading,
  onLoadingComplete,
  placement,
  quality = 85,
  width,
  height,
  sizes,
  containerHeight = false,
}: SafeImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  // Determine priority based on placement if not explicitly set
  const shouldPrioritize = priority || placement === 'hero';
  
  // Determine loading strategy
  // - hero and above-fold images are loaded eagerly by default
  // - explicitly set loading attribute is respected
  // - placement-based decisions
  // - otherwise, default to lazy loading
  let loadingStrategy = loading;
  
  if (!loadingStrategy) {
    if (shouldPrioritize) {
      loadingStrategy = 'eager';
    } else if (placement === 'below-fold' || placement === 'footer') {
      loadingStrategy = 'lazy';
    } else {
      loadingStrategy = 'lazy'; // Default to lazy loading for mid-page and unspecified placements
    }
  }

  // Determine image quality based on placement and device
  // Hero and above-fold images get higher quality but still optimize for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const imageQuality = shouldPrioritize ? (isMobile ? 85 : 90) : (isMobile ? 75 : quality);
  
  // Determine appropriate sizes based on placement
  // This helps the browser make better decisions about which source to load
  let imageSizes = sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  
  if (placement === 'hero') {
    imageSizes = "(max-width: 768px) 100vw, 50vw";
  } else if (placement === 'above-fold') {
    imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw";
  }

  // Container height responsiveness
  useEffect(() => {
    if (!containerHeight || !containerRef.current) return;

    // Initial measurement
    updateDimensions();

    // Set up resize observer to track parent container changes
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    // Observe container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current.parentElement || containerRef.current);
    }

    // Clean up
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerHeight]);

  // Update container dimensions
  const updateDimensions = () => {
    if (!containerRef.current) return;
    
    const parent = containerRef.current.parentElement;
    if (parent) {
      setContainerDimensions({
        width: parent.clientWidth,
        height: parent.clientHeight
      });
    }
  };

  // Handle image load completion
  const handleLoadingComplete = (img: HTMLImageElement) => {
    setIsLoading(false);
    if (onLoadingComplete) {
      onLoadingComplete(img);
    }
  };

  // Handle image load error
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Aspect ratio for skeleton
  let aspectRatio: 'square' | '16/9' | '4/3' | '2/1' = 'square';
  if (width && height) {
    const ratio = width / height;
    if (ratio > 1.7 && ratio < 1.9) {
      aspectRatio = '16/9';
    } else if (ratio > 1.25 && ratio < 1.35) {
      aspectRatio = '4/3';
    } else if (ratio > 1.9) {
      aspectRatio = '2/1';
    }
  }

  return (
    <div 
      ref={containerRef} 
      className={`${containerHeight ? 'h-full' : ''} relative`}
      style={{ 
        minHeight: containerHeight ? '100%' : undefined
      }}
    >
      {isLoading && <ImageSkeleton aspectRatio={aspectRatio} className={className} />}
      
      <Image
        src={src}
        alt={alt || fallbackText || 'Image'}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        fill={containerHeight || (!width && !height)}
        width={!containerHeight ? width : undefined}
        height={!containerHeight ? height : undefined}
        sizes={imageSizes}
        priority={shouldPrioritize}
        loading={loadingStrategy}
        quality={imageQuality}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        style={{
          // For mobile optimization, applying content visibility to non-critical images
          contentVisibility: placement === 'below-fold' || placement === 'footer' ? 'auto' : undefined,
          height: containerHeight ? '100%' : undefined,
          objectFit: containerHeight ? 'cover' : undefined,
        }}
      />
      
      {hasError && (
        <div className="flex items-center justify-center absolute inset-0 bg-gray-100 text-gray-500 text-sm p-4 text-center">
          {fallbackText || alt || 'Image could not be loaded'}
        </div>
      )}
    </div>
  );
}
