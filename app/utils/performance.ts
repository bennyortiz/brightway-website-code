/**
 * Performance Utilities
 * 
 * Collection of utilities to improve website performance:
 * - Lazy loading of scripts
 * - Resource hints
 * - Deferred loading techniques
 */

/**
 * Load a script dynamically with options for performance optimization
 * 
 * @param src - The URL of the script to load
 * @param options - Configuration options for script loading
 */
export function loadScript(
  src: string, 
  options: {
    defer?: boolean;
    async?: boolean;
    id?: string;
    onLoad?: () => void;
    delay?: number;
    inViewport?: boolean;
    mediaQuery?: string;
  } = {}
): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    const existingScript = document.getElementById(options.id || src) as HTMLScriptElement;
    if (existingScript) {
      resolve();
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = src;
    
    // Set attributes based on options
    if (options.defer) script.defer = true;
    if (options.async) script.async = true;
    if (options.id) script.id = options.id;
    
    // Handle load events
    script.onload = () => {
      if (options.onLoad) options.onLoad();
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    // Handle delayed loading
    if (options.delay && options.delay > 0) {
      setTimeout(() => document.head.appendChild(script), options.delay);
    } else if (options.inViewport) {
      // Only load when in viewport using Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          document.head.appendChild(script);
          observer.disconnect();
        }
      });
      
      // Create a sentinel element to observe
      const sentinel = document.createElement('div');
      sentinel.style.height = '1px';
      sentinel.style.width = '1px';
      sentinel.style.position = 'absolute';
      sentinel.style.bottom = '0';
      sentinel.style.opacity = '0';
      document.body.appendChild(sentinel);
      
      observer.observe(sentinel);
    } else if (options.mediaQuery) {
      // Only load when media query matches
      const mql = window.matchMedia(options.mediaQuery);
      if (mql.matches) {
        document.head.appendChild(script);
      } else {
        const handleChange = (e: MediaQueryListEvent) => {
          if (e.matches) {
            document.head.appendChild(script);
            mql.removeEventListener('change', handleChange);
          }
        };
        mql.addEventListener('change', handleChange);
      }
    } else {
      // Load immediately
      document.head.appendChild(script);
    }
  });
}

/**
 * Add resource hints to improve loading performance
 * 
 * @param resources - Array of resources to add hints for
 */
export function addResourceHints(
  resources: Array<{
    url: string;
    type: 'preconnect' | 'dns-prefetch' | 'preload' | 'prefetch' | 'prerender';
    as?: string;
    crossOrigin?: string;
  }>
): void {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.href = resource.url;
    link.rel = resource.type;
    
    if (resource.as) {
      link.setAttribute('as', resource.as);
    }
    
    if (resource.crossOrigin) {
      link.crossOrigin = resource.crossOrigin;
    }
    
    document.head.appendChild(link);
  });
} 