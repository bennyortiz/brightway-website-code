'use client'

import { useEffect, useState } from 'react'
import { loadScript } from '@/app/utils/performance'

export interface ScriptLoaderProps {
  src: string;
  id?: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'onViewport' | 'onMediaQuery';
  onLoad?: () => void;
  delay?: number;
  mediaQuery?: string;
  children?: React.ReactNode;
}

/**
 * ScriptLoader Component
 * 
 * Intelligently loads external scripts based on different strategies:
 * - afterInteractive: Load immediately after page becomes interactive
 * - lazyOnload: Load during idle time when browser is not busy
 * - onViewport: Load when component enters viewport
 * - onMediaQuery: Load when a specific media query is matched
 * 
 * This helps reduce JavaScript bloat and improve performance.
 */
export default function ScriptLoader({
  src,
  id,
  strategy = 'lazyOnload',
  onLoad,
  delay = 0,
  mediaQuery,
  children
}: ScriptLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewportRef, setViewportRef] = useState<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!src) return;
    
    // Skip for server-side rendering
    if (typeof window === 'undefined') return;
    
    const options: Parameters<typeof loadScript>[1] = {
      id: id || src,
      defer: true,
      onLoad: () => {
        setIsLoaded(true);
        if (onLoad) onLoad();
      }
    };
    
    const loadScriptBasedOnStrategy = async () => {
      // Load strategy based on the selected strategy
      switch (strategy) {
        case 'afterInteractive':
          // Load immediately
          await loadScript(src, options);
          break;
          
        case 'lazyOnload':
          // Load during idle time
          if ('requestIdleCallback' in window) {
            window.requestIdleCallback(() => loadScript(src, options), { timeout: 2000 });
          } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => loadScript(src, options), delay || 200);
          }
          break;
          
        case 'onViewport':
          if (!viewportRef) return;
          
          // Load when element comes into viewport
          const observer = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting) {
              await loadScript(src, options);
              observer.disconnect();
            }
          }, { rootMargin: '200px' });
          
          observer.observe(viewportRef);
          
          return () => observer.disconnect();
          
        case 'onMediaQuery':
          if (!mediaQuery) return;
          
          // Load when media query matches
          await loadScript(src, { ...options, mediaQuery });
          break;
      }
    };
    
    loadScriptBasedOnStrategy();
  }, [src, id, strategy, onLoad, delay, mediaQuery, viewportRef]);
  
  return (
    <>
      {strategy === 'onViewport' && (
        <div ref={setViewportRef} style={{ minHeight: '1px' }} />
      )}
      {children && isLoaded && children}
    </>
  );
} 