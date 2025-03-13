import Image from 'next/image';

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
}

/**
 * Enhanced safe image component with intelligent loading strategies
 * based on image placement within the page
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
}: SafeImageProps) {
  // Determine priority based on placement if not explicitly set
  const shouldPrioritize = priority || placement === 'hero' || placement === 'above-fold';
  
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

  // Determine image quality based on placement
  // Hero and above-fold images get higher quality
  const imageQuality = shouldPrioritize ? 90 : quality;
  
  // Determine appropriate sizes based on placement
  // This helps the browser make better decisions about which source to load
  let imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  
  if (placement === 'hero') {
    imageSizes = "(max-width: 768px) 100vw, 50vw";
  } else if (placement === 'above-fold') {
    imageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw";
  }

  return (
    <Image
      src={src}
      alt={alt || fallbackText || 'Image'}
      className={className}
      fill
      sizes={imageSizes}
      priority={shouldPrioritize}
      loading={loadingStrategy}
      quality={imageQuality}
      onLoadingComplete={onLoadingComplete}
    />
  );
}
