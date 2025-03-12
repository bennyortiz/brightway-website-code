'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

interface ThirdPartyScriptProps {
  id: string;
  src: string;
  strategy?: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload';
  onLoad?: () => void;
  delay?: number; // Delay in milliseconds
  deferUntilIdle?: boolean; // Should wait for requestIdleCallback?
  intersectionObserver?: boolean; // Load when in viewport
  mediaQuery?: string; // Only load if media query matches
  attributes?: Record<string, string>; // Additional script attributes
}

/**
 * ThirdPartyScript component optimizes loading of external scripts
 * to minimize performance impact and reduce Core Web Vitals penalties
 */
export default function ThirdPartyScript({
  id,
  src,
  strategy = 'lazyOnload',
  onLoad,
  delay = 0,
  deferUntilIdle = false,
  intersectionObserver = false,
  mediaQuery,
  attributes = {},
}: ThirdPartyScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(!delay && !deferUntilIdle && !intersectionObserver && !mediaQuery);
  const [scriptRef, setScriptRef] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    // Handle delayed loading
    if (delay > 0) {
      const timeout = setTimeout(() => {
        setShouldLoad(true);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
    
    // Handle loading when browser is idle
    if (deferUntilIdle) {
      if ('requestIdleCallback' in window) {
        const idleCallback = window.requestIdleCallback(() => {
          setShouldLoad(true);
        }, { timeout: 5000 });
        
        return () => window.cancelIdleCallback(idleCallback);
      } else {
        // Fallback for browsers without requestIdleCallback
        const timeout = setTimeout(() => {
          setShouldLoad(true);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }
    }
    
    // Handle loading based on media query
    if (mediaQuery) {
      const mql = window.matchMedia(mediaQuery);
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setShouldLoad(true);
        }
      };
      
      if (mql.matches) {
        setShouldLoad(true);
      }
      
      mql.addEventListener('change', handleChange);
      return () => mql.removeEventListener('change', handleChange);
    }
  }, [delay, deferUntilIdle, mediaQuery]);
  
  // Handle intersection observer for viewport loading
  useEffect(() => {
    if (!intersectionObserver || !scriptRef || shouldLoad) {
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(scriptRef);
    
    return () => {
      observer.disconnect();
    };
  }, [intersectionObserver, scriptRef, shouldLoad]);
  
  if (!shouldLoad) {
    return <div ref={setScriptRef} data-script-id={id} />;
  }
  
  return (
    <Script
      id={id}
      src={src}
      strategy={strategy}
      onLoad={onLoad}
      {...attributes}
    />
  );
} 