'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSkeleton from './image-skeleton';
import type { SyntheticEvent } from 'react';

type ImagePlacement = 'hero' | 'above-fold' | 'below-fold';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
  onLoad?: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
  placement?: ImagePlacement;
  quality?: number;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * Safe image component that handles loading states, errors, and performance optimizations
 */
export default function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackText,
  priority = false,
  loading,
  onLoad,
  placement = 'below-fold',
  quality = 85,
  width,
  height,
  sizes,
}: SafeImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Simple client-side mounting check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simplified loading strategy based on placement
  const loadingStrategy = loading || 
    (placement === 'hero' ? undefined : 
     placement === 'above-fold' ? 'eager' : 'lazy');

  // Set priority for hero images
  const shouldPrioritize = priority || placement === 'hero';

  // Simplified sizes attribute based on placement
  const defaultSizes = 
    placement === 'hero' ? '100vw' : 
    placement === 'above-fold' ? '(max-width: 768px) 100vw, 50vw' : 
    '(max-width: 768px) 100vw, 33vw';

  // Handle image load completion
  const handleLoadingComplete = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(event);
    }
  };

  // Handle image load error
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };

  // Determine aspect ratio for skeleton loader
  const getAspectRatio = (): 'square' | '16/9' | '4/3' => {
    if (!width || !height) return 'square';
    
    const ratio = width / height;
    if (ratio > 1.7 && ratio < 1.9) return '16/9';
    if (ratio > 1.25 && ratio < 1.35) return '4/3';
    return 'square';
  };

  // Simplified container style logic
  const containerStyle: React.CSSProperties = {};
  if (width && height && !className?.includes('w-full') && !className?.includes('h-full')) {
    containerStyle.aspectRatio = `${width} / ${height}`;
  }

  return (
    <div className="image-container relative w-full h-full" style={containerStyle}>
      {isLoading && <ImageSkeleton aspectRatio={getAspectRatio()} className={className} />}

      {(isMounted || !hasError) && (
        <Image
          src={src}
          alt={alt || fallbackText || 'Image'}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          fill={width && height ? undefined : true}
          width={width || undefined}
          height={height || undefined}
          sizes={sizes || defaultSizes}
          priority={shouldPrioritize}
          loading={loadingStrategy}
          quality={quality}
          onLoad={handleLoadingComplete}
          onError={handleError}
          style={{ 
            objectFit: 'cover', 
            objectPosition: 'center',
            position: width && height ? 'relative' : 'absolute',
            inset: width && height ? undefined : 0
          }}
        />
      )}

      {hasError && (
        <div className="flex items-center justify-center relative h-full w-full bg-gray-100 text-gray-500 text-sm p-4 text-center">
          {fallbackText || alt || 'Image could not be loaded'}
        </div>
      )}
    </div>
  );
}
