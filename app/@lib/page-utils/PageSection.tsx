/**
 * PageSection Component
 * 
 * A standardized section component that provides consistent styling
 * for full-width page sections with appropriate spacing and layout.
 */

import React from 'react';
import { cn } from '@/app/@lib/utils';

// Simplified prop type using a variant-based approach
export interface PageSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional ID for direct navigation */
  id?: string;
  /** Visual variant of the section */
  variant?: 'default' | 'alternate' | 'highlight' | 'primary' | 'subtle';
  /** Vertical spacing size */
  spacing?: 'none' | 'default' | 'large';
  /** Content container width */
  width?: 'full' | 'contained' | 'narrow';
  /** Whether section has a border */
  hasBorder?: boolean;
}

/**
 * PageSection Component
 * 
 * Creates a consistent full-width section with appropriate spacing and styling.
 * Uses a simplified variant-based approach for styling.
 */
const PageSection: React.FC<PageSectionProps> = ({
  children,
  className = '',
  id,
  variant = 'default',
  spacing = 'default',
  width = 'contained',
  hasBorder = false
}) => {
  // Map variants to background colors
  const variantClasses = {
    default: 'bg-white',
    alternate: 'bg-gray-50',
    highlight: 'bg-primary/10',
    primary: 'bg-primary text-white',
    subtle: 'bg-blue-50'
  };

  // Simplified spacing options
  const spacingClasses = {
    none: '',
    default: 'py-12 md:py-16',
    large: 'py-20 md:py-32'
  };

  // Content width options
  const widthClasses = {
    full: '',
    contained: 'container mx-auto px-4',
    narrow: 'container mx-auto px-4 max-w-4xl'
  };

  // Get border class if needed
  const borderClass = hasBorder ? 'border-t border-b' : '';

  return (
    <section
      id={id}
      className={cn(
        'w-full',
        variantClasses[variant],
        spacingClasses[spacing],
        borderClass,
        className
      )}
    >
      {width === 'full' ? (
        children
      ) : (
        <div className={widthClasses[width]}>
          {children}
        </div>
      )}
    </section>
  );
};

export default PageSection; 