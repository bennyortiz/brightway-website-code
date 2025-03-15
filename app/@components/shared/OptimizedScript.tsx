'use client';

import Script from 'next/script';
import { useState, useEffect } from 'react';

interface OptimizedScriptProps {
  src: string;
  id: string;
  onLoad?: () => void;
}

/**
 * OptimizedScript Component
 *
 * A script loader component that defers loading until the page is idle
 * Helps reduce JavaScript impact on page load performance
 */
export default function OptimizedScript({ src, id, onLoad }: OptimizedScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback to load the script when browser is idle
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        // @ts-expect-error - TypeScript doesn't recognize requestIdleCallback
        window.requestIdleCallback(
          () => {
            setShouldLoad(true);
          },
          { timeout: 3000 }
        );
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          setShouldLoad(true);
        }, 2000);
      }
    }
  }, []);

  if (!shouldLoad) {
    return null;
  }

  return <Script id={id} src={src} strategy="lazyOnload" onLoad={onLoad} />;
}
