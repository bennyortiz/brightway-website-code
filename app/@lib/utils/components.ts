/**
 * Component utility functions and patterns
 * These utilities help with component organization and extraction
 */

import type { ReactNode } from 'react';
import React from 'react';

/**
 * Type for components that can be wrapped
 */
export type Wrappable = {
  children: ReactNode;
};

/**
 * Type for components that take a className prop
 */
export type WithClassName = {
  className?: string;
};

/**
 * Type for components that have an identifier
 */
export type WithId = {
  id?: string;
};

/**
 * Type for components that can be conditionally rendered
 */
export type Conditional = {
  if?: boolean;
};

/**
 * Helper to create a conditional component wrapper
 * @param Component - The component to be conditionally rendered
 * @returns A new component that only renders if the 'if' prop is true
 * 
 * @example
 * const ConditionalAlert = makeConditional(Alert);
 * <ConditionalAlert if={hasError}>Error message</ConditionalAlert>
 */
export function makeConditional<T extends object>(
  Component: React.ComponentType<T>
): React.FC<T & Conditional> {
  return function ConditionalComponent({ if: condition, ...props }: T & Conditional) {
    if (condition === false) {
      return null;
    }
    return React.createElement(Component, props as T);
  };
}

/**
 * Combines multiple class names, filtering out undefined and null values
 * 
 * @deprecated Use the `cn` utility from '@/app/@lib/utils' instead
 */
export function combineClasses(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Extract a component from a larger component to improve maintainability
 * 
 * This is a pattern example, not a function to be used directly
 * 
 * @example
 * // Instead of:
 * function LargeComponent() {
 *   return (
 *     <div>
 *       <div className="header">
 *         <h1>Title</h1>
 *         <p>Subtitle</p>
 *       </div>
 *       <div className="content">...</div>
 *     </div>
 *   );
 * }
 * 
 * // Extract components:
 * // components/LargeComponent/Header.tsx
 * function Header() {
 *   return (
 *     <div className="header">
 *       <h1>Title</h1>
 *       <p>Subtitle</p>
 *     </div>
 *   );
 * }
 * 
 * // components/LargeComponent/index.tsx
 * import Header from './Header';
 * 
 * function LargeComponent() {
 *   return (
 *     <div>
 *       <Header />
 *       <div className="content">...</div>
 *     </div>
 *   );
 * }
 */ 