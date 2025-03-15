'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/**
 * PolyfillScript Component
 * 
 * A client component that loads the polyfill script
 * with proper error handling
 */
export default function PolyfillScript() {
  useEffect(() => {
    // Log a message to help debug if needed
    console.debug('Polyfill loading initialized');
  }, []);

  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/core-js/3.32.2/minified.min.js"
      strategy="lazyOnload"
      id="polyfill-core-js"
      onError={(e) => {
        console.warn('Polyfill failed to load, but site functionality should not be affected');
      }}
    />
  );
} 