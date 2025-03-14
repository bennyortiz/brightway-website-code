import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/app/@lib/utils';

type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Set to true for critical above-the-fold images
   */
  priority?: boolean;
  /**
   * Optional placeholder blur data URL or "blur"
   */
  placeholder?: "blur" | "empty" | string;
  /**
   * Optional className for the image container
   */
  className?: string;
  /**
   * Optional sizes attribute for responsive images
   * e.g. "(max-width: 768px) 100vw, 50vw"
   */
  sizes?: string;
};

/**
 * OptimizedImage Component
 * 
 * A wrapper around Next.js Image component that implements best practices:
 * - Optional blur placeholder for better perceived performance
 * - Loading state handling
 * - Priority loading for critical images
 * - Proper sizes attribute for responsive loading
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  placeholder = "empty",
  className,
  sizes = "100vw",
  ...props
}: OptimizedImageProps & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt' | 'width' | 'height' | 'sizes' | 'priority' | 'placeholder'>) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn(
      "overflow-hidden", 
      isLoading ? "bg-gray-200 animate-pulse" : "",
      className
    )}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        placeholder={placeholder === "blur" ? "blur" : undefined}
        blurDataURL={placeholder !== "empty" && placeholder !== "blur" ? placeholder : undefined}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
} 