import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  onLoadingComplete?: (img: HTMLImageElement) => void;
}

export default function SafeImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackText,
  priority = false,
  loading,
  onLoadingComplete,
}: SafeImageProps) {
  // Determine loading strategy
  // - priority images are always loaded eagerly
  // - explicitly set loading attribute is respected
  // - otherwise, default to lazy loading
  const loadingStrategy = priority ? "eager" : loading || "lazy";

  return (
    <Image
      src={src}
      alt={alt || fallbackText || "Image"}
      className={className}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      loading={loadingStrategy}
      quality={85}
      onLoadingComplete={onLoadingComplete}
    />
  );
} 