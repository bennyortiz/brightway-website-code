import React, { forwardRef } from 'react';
import { cn } from '@/app/@lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  fullWidth?: boolean;
  noPadding?: boolean;
  outerClassName?: string;
}

/**
 * SectionContainer Component
 * 
 * A standardized container for page sections that ensures consistent:
 * - Responsive padding
 * - Width constraints
 * - Margin handling
 * - Spacing between sections
 * 
 * This component helps maintain consistent responsive behavior
 * across all sections of the website.
 */
const SectionContainer = forwardRef<HTMLElement, SectionContainerProps>(
  ({
    children,
    className,
    id,
    as: Component = 'section',
    fullWidth = false,
    noPadding = false,
    outerClassName,
  }, ref) => {
    return (
      <Component
        id={id}
        className={cn(
          'w-full',
          !noPadding && 'py-12 sm:py-16 md:py-20 lg:py-24',
          outerClassName
        )}
        ref={ref}
      >
        <div
          className={cn(
            !fullWidth && 'container mx-auto',
            !fullWidth && !noPadding && 'px-4 sm:px-6 lg:px-8',
            className
          )}
        >
          {children}
        </div>
      </Component>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer; 