'use client';

import { lazy, Suspense, ComponentType } from 'react';

// Define types for the lazy-loaded component
type LazyComponentProps = {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
};

/**
 * LazyLoad component for dynamically importing components only when needed
 * This helps reduce the initial JavaScript payload
 * 
 * @example
 * // To use this component:
 * <LazyLoad 
 *   component={() => import('./HeavyComponent')}
 *   fallback={<p>Loading...</p>}
 *   props={{ someValue: 123 }}
 * />
 */
export default function LazyLoad({ 
  component, 
  fallback = <div className="h-20 w-full animate-pulse bg-gray-200 rounded"></div>, 
  props = {} 
}: LazyComponentProps) {
  const LazyComponent = lazy(component);
  
  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
} 