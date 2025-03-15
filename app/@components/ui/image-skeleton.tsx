import React from 'react';

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: 'square' | '16/9' | '4/3' | '2/1';
}

/**
 * ImageSkeleton Component
 *
 * Displays a loading skeleton for images to improve perceived performance
 * especially for LCP elements. Shows a subtle gradient animation while
 * the actual image is being loaded.
 */
export default function ImageSkeleton({
  className = 'w-full h-full',
  aspectRatio = 'square',
}: ImageSkeletonProps) {
  // Determine the aspect ratio class
  let aspectRatioClass = 'aspect-square';

  if (aspectRatio === '16/9') {
    aspectRatioClass = 'aspect-video';
  } else if (aspectRatio === '4/3') {
    aspectRatioClass = 'aspect-[4/3]';
  } else if (aspectRatio === '2/1') {
    aspectRatioClass = 'aspect-[2/1]';
  }

  return (
    <div
      className={`${className} ${aspectRatioClass} bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-md overflow-hidden`}
      data-testid="image-skeleton"
      aria-hidden="true"
    >
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );
}

// Add this to globals.css
// @keyframes shimmer {
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(100%);
//   }
// }
// .animate-shimmer {
//   animation: shimmer 1.5s infinite;
// }
