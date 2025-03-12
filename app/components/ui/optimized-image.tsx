import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

/**
 * OptimizedImage Component
 * 
 * An optimized image component that uses Next.js Image for:
 * - Automatic WebP/AVIF conversion
 * - Responsive sizing
 * - Lazy loading
 * - Preventing cumulative layout shift
 * 
 * @param props Component properties
 */
export default function OptimizedImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackText,
  width,
  height,
  priority = false,
  quality = 80,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [isError, setIsError] = useState(false);
  
  // For external URLs
  const isExternal = src.startsWith('http') || src.startsWith('https');
  
  // If there's an error loading the image, display fallback text
  if (isError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <span className="text-gray-500">{fallbackText || alt || "Image"}</span>
      </div>
    );
  }

  // If width and height are provided, use them
  if (width && height) {
    return (
      <Image
        src={src}
        alt={alt || fallbackText || "Image"}
        width={width}
        height={height}
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onError={() => setIsError(true)}
      />
    );
  }

  // Otherwise, use fill mode which requires parent to have position relative/absolute/fixed
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt || fallbackText || "Image"}
        fill
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onError={() => setIsError(true)}
      />
    </div>
  );
} 