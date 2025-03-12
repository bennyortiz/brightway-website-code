interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  fallbackText,
}: SafeImageProps) {
  // Use a simple img tag with no client-side interactivity
  return (
    <img
      src={src}
      alt={alt || fallbackText || "Image"}
      className={className}
    />
  );
} 