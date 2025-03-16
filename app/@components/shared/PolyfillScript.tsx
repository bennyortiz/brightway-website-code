'use client';

import Script from 'next/script';

/**
 * PolyfillScript Component
 * 
 * A client component that loads a small feature detection script
 * which will only load polyfills for legacy browsers.
 * 
 * This approach avoids shipping unnecessary JavaScript to modern browsers.
 */
export default function PolyfillScript() {
  return (
    <Script
      src="/polyfill.js"
      strategy="beforeInteractive"
      id="feature-detect-polyfill"
    />
  );
} 