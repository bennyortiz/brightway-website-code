import React from 'react';
import { cn } from '@/app/@lib/utils';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Typography System
 * 
 * A comprehensive set of typography components that:
 * - Ensures consistent font sizes across all breakpoints
 * - Maintains proper responsive text scaling
 * - Standardizes text styling throughout the site
 * 
 * These components help maintain visual consistency 
 * while automatically adjusting to different screen sizes.
 */

export function SectionHeading({ 
  children, 
  className, 
  as: Component = 'h2' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-rendering-optimizeLegibility',
      className
    )}>
      {children}
    </Component>
  );
}

export function SectionSubheading({ 
  children, 
  className, 
  as: Component = 'p' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-base sm:text-lg md:text-xl text-gray-600',
      className
    )}>
      {children}
    </Component>
  );
}

export function FeatureHeading({ 
  children, 
  className, 
  as: Component = 'h3' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-gray-900',
      className
    )}>
      {children}
    </Component>
  );
}

export function FeatureText({ 
  children, 
  className, 
  as: Component = 'p' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-sm sm:text-base text-gray-600 leading-relaxed',
      className
    )}>
      {children}
    </Component>
  );
}

export function LargeText({ 
  children, 
  className, 
  as: Component = 'p' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed',
      className
    )}>
      {children}
    </Component>
  );
}

export function SmallText({ 
  children, 
  className, 
  as: Component = 'p' 
}: TextProps) {
  return (
    <Component className={cn(
      'text-xs sm:text-sm text-gray-500',
      className
    )}>
      {children}
    </Component>
  );
}

export function SectionTag({ 
  children, 
  className, 
  as: Component = 'div' 
}: TextProps) {
  return (
    <Component className={cn(
      'inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-primary',
      className
    )}>
      {children}
    </Component>
  );
} 