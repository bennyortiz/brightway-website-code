import Image from 'next/image';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
}

export default function SafeImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackText,
  priority = false,
}: SafeImageProps) {
  return (
    <Image
      src={src}
      alt={alt || fallbackText || "Image"}
      className={className}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      quality={85}
    />
  );
} 