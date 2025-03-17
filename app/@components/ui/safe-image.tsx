'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import ImageSkeleton from './image-skeleton';
import type { SyntheticEvent } from 'react';

type ImagePlacement = 'hero' | 'above-fold' | 'mid-page' | 'below-fold' | 'footer';

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
 * Enhanced safe image component with intelligent loading strategies
 * based on image placement within the page and optimized for LCP performance.
 * Automatically loads WebP versions of images when available for better performance.
 */
export default function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackText,
  priority = false,
  loading,
  onLoad,
  placement,
  quality = 85,
  width,
  height,
  sizes,
}: SafeImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  // Use WebP version if available, with fallback
  useEffect(() => {
    setIsMounted(true);
    
    // Always use the original source rather than trying WebP conversion
    setImageSrc(src);
    
    // Pre-load the image to detect any issues
    const img = new globalThis.Image();
    img.src = src;
    
    img.onload = () => {
      setIsLoading(false);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      setHasError(true);
      setIsLoading(false);
    };
    
    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  // Determine priority based on placement if not explicitly set
  // Only use priority for true hero images to avoid excessive preloading
  const shouldPrioritize = priority || placement === 'hero';

  // Determine loading strategy based on placement
  // - hero images are loaded with priority
  // - above-fold uses eager loading without priority
  // - all others use lazy loading unless specified
  let loadingStrategy = loading;

  if (!loadingStrategy) {
    if (placement === 'hero') {
      // Don't set loading for priority images, Next.js handles this
      loadingStrategy = undefined;
    } else if (placement === 'above-fold') {
      loadingStrategy = 'eager';
    } else {
      loadingStrategy = 'lazy';
    }
  }

  // Determine image quality based on placement and device
  // Hero and above-fold images get higher quality but still optimize for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const imageQuality = shouldPrioritize ? (isMobile ? 85 : 90) : isMobile ? 75 : quality;

  // Determine appropriate sizes based on placement
  // This helps the browser make better decisions about which source to load
  let imageSizes = sizes;
  
  if (!imageSizes) {
    if (placement === 'hero') {
      imageSizes = '(max-width: 768px) 100vw, 50vw';
    } else if (placement === 'above-fold') {
      imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw';
    } else {
      imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    }
  }

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
    
    // If the current src is already the original (non-WebP), then we have a real error
    if (imageSrc === src) {
      setHasError(true);
      console.error(`Failed to load image: ${imageSrc}`);
    } else {
      // Try falling back to original format
      console.log(`Falling back to original image format: ${src}`);
      setImageSrc(src);
    }
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

  // Compute styles for the container to prevent layout shifts
  const computedStyle: React.CSSProperties = {};
  if (width && height && !className?.includes('w-full') && !className?.includes('h-full')) {
    computedStyle.aspectRatio = `${width} / ${height}`;
  }

  // Always render the image, but conditionally apply opacity and transition
  return (
    <div className="image-container relative w-full h-full" style={computedStyle}>
      {isLoading && <ImageSkeleton aspectRatio={aspectRatio} className={className} />}

      {(isMounted || !hasError) && (
        <Image
          src={imageSrc}
          alt={alt || fallbackText || 'Image'}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          fill={width && height ? undefined : true}
          width={width || undefined}
          height={height || undefined}
          sizes={imageSizes}
          priority={shouldPrioritize}
          loading={loadingStrategy}
          quality={imageQuality}
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

/**
 * Helper function to determine the best available image format
 */
function useBestImageFormat(src: string): string {
  // If no src provided, return as is
  if (!src) return src;
  
  // If already using a modern format, return as is
  if (src.endsWith('.webp') || src.endsWith('.avif')) return src;
  
  // For local images in the public folder, prefer original format for compatibility
  return src;
}
