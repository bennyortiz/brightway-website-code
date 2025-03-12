import Image from 'next/image';

interface ServiceImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * ServiceImage Component
 * 
 * Optimized image component for service thumbnails and smaller images
 * Uses static image dimensions instead of fill to reduce layout shifts
 * Always uses lazy loading since these are typically below the fold
 */
export default function ServiceImage({
  src,
  alt,
  className = "",
  width = 400,
  height = 300,
}: ServiceImageProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full ${className}`}
        quality={75}
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
} 