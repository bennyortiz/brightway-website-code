'use client';

import { useState } from 'react';
import { cn } from '@/app/@lib/utils';

/**
 * SkipLink Component
 * 
 * This component creates an accessible "skip to content" link that becomes visible when focused.
 * It allows keyboard users to bypass navigation and jump directly to the main content.
 * 
 * @example
 * ```tsx
 * // In your layout component
 * <SkipLink href="#main-content" />
 * <header>...</header>
 * <main id="main-content">...</main>
 * ```
 */
export default function SkipLink({ href = '#main-content' }: { href?: string }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href={href}
      className={cn(
        'fixed top-0 left-0 z-50 p-3 bg-primary text-white transition-transform',
        'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary',
        isFocused ? 'translate-y-0' : '-translate-y-full'
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to main content
    </a>
  );
} 