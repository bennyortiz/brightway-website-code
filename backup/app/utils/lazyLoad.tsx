/**
 * Utility for optimizing component and resource loading based on placement in the page
 * Provides consistent loading strategies across the site
 */

import dynamic from 'next/dynamic';
import React, { ComponentType, useState, useEffect } from 'react';

export type PagePlacement = 'critical' | 'above-fold' | 'mid-page' | 'below-fold' | 'footer';

/**
 * Configuration options for lazyLoad utility
 */
export interface LazyLoadOptions {
  /**
   * Where the component is placed on the page
   */
  placement?: PagePlacement;
  
  /**
   * Custom loading component to show while the main component is loading
   */
  loadingComponent?: JSX.Element | null;

  /**
   * Whether to show the loading component; set to false to show nothing during loading
   */
  showLoading?: boolean;

  /**
   * Whether to defer the component loading until after hydration
   */
  ssr?: boolean;
}

/**
 * Default options for each placement type
 */
const placementDefaults: Record<PagePlacement, Partial<LazyLoadOptions>> = {
  'critical': {
    ssr: true,
    showLoading: true,
  },
  'above-fold': {
    ssr: true,
    showLoading: true,
  },
  'mid-page': {
    ssr: false,
    showLoading: true,
  },
  'below-fold': {
    ssr: false,
    showLoading: false,
  },
  'footer': {
    ssr: false,
    showLoading: false,
  }
};

/**
 * Default loading placeholder component
 */
const DefaultLoadingPlaceholder = () => (
  <div className="min-h-[100px] animate-pulse bg-gray-100 rounded-md"></div>
);

/**
 * Lazy load a component with optimized loading strategy based on its placement in the page
 * 
 * @param importFn - Dynamic import function for the component
 * @param options - Configuration options for lazy loading
 * @returns Dynamically imported component
 * 
 * @example
 * // Import a component that appears below the fold
 * const BelowFoldComponent = lazyLoad(
 *   () => import('../components/SomeComponent'),
 *   { placement: 'below-fold' }
 * );
 */
export function lazyLoad<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
): T {
  const { placement = 'mid-page' } = options;
  const defaultOpts = placementDefaults[placement];
  
  // Merge provided options with defaults for the placement
  const finalOptions: LazyLoadOptions = {
    ...defaultOpts,
    ...options,
  };
  
  // For critical components, use minimal delay to avoid blocking render
  const loadingDelay = placement === 'critical' ? 0 : 
                     placement === 'above-fold' ? 100 : 
                     placement === 'mid-page' ? 300 : 500;
  
  // Create appropriate loading component based on settings
  const loadingElement = finalOptions.showLoading
    ? finalOptions.loadingComponent || <DefaultLoadingPlaceholder />
    : null;
  
  // Create a delayed loading component to prevent flash
  const DelayedLoadingComponent = () => {
    const [showLoading, setShowLoading] = useState(false);
    
    useEffect(() => {
      const timer = setTimeout(() => setShowLoading(true), loadingDelay);
      return () => clearTimeout(timer);
    }, []);
    
    return showLoading ? loadingElement : null;
  };
  
  return dynamic(importFn, {
    ssr: finalOptions.ssr,
    loading: () => {
      // Only use delay for client-side rendering
      if (typeof window !== 'undefined' && loadingDelay > 0 && loadingElement) {
        return <DelayedLoadingComponent />;
      }
      return loadingElement;
    }
  }) as T;
}

/**
 * Utility to preload components that will be needed soon
 * Use this when you want to preload a component before it's rendered
 * 
 * @param importFn - Dynamic import function for the component
 * 
 * @example
 * // Preload a component that will be shown after user interaction
 * useEffect(() => {
 *   preloadComponent(() => import('../components/DetailView'));
 * }, []);
 */
export function preloadComponent(importFn: () => Promise<any>): void {
  if (typeof window !== 'undefined') {
    // Use requestIdleCallback to preload during browser idle time
    // Falls back to setTimeout for browsers without requestIdleCallback
    const requestIdleCallback = 
      (window as any).requestIdleCallback || 
      ((cb: Function) => setTimeout(cb, 1));
    
    requestIdleCallback(() => {
      importFn().catch((err: Error) => console.warn('Preloading component failed:', err));
    });
  }
} 