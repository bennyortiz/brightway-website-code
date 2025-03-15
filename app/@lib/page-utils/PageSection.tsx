/**
 * PageSection Component
 * 
 * A standardized section component that provides consistent styling
 * for full-width page sections with appropriate spacing and layout.
 */

import React from 'react';

export interface PageSectionProps {
  /** Section content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional ID for direct navigation */
  id?: string;
  /** Background color of the section */
  bgColor?: 'white' | 'gray-50' | 'gray-100' | 'primary-light' | 'blue-50';
  /** Vertical spacing size */
  spacingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether content should be contained to standard width or full width */
  contentWidth?: 'container' | 'full';
  /** Max width for contained content */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether section has a border at top/bottom */
  border?: 'none' | 'top' | 'bottom' | 'both';
}

/**
 * PageSection Component
 * 
 * Creates a consistent full-width section with appropriate spacing and styling
 */
const PageSection: React.FC<PageSectionProps> = ({
  children,
  className = '',
  id,
  bgColor = 'white',
  spacingY = 'lg',
  contentWidth = 'container',
  maxWidth = 'xl',
  border = 'none'
}) => {
  // Map spacing values to Tailwind classes
  const spacingClasses = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32'
  };

  // Map background colors to Tailwind classes
  const bgColorClasses = {
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    'gray-100': 'bg-gray-100',
    'primary-light': 'bg-primary/10',
    'blue-50': 'bg-blue-50'
  };

  // Map max width values to Tailwind classes
  const maxWidthClasses = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: ''
  };

  // Map border options to Tailwind classes
  const borderClasses = {
    none: '',
    top: 'border-t',
    bottom: 'border-b',
    both: 'border-t border-b'
  };

  return (
    <section
      id={id}
      className={`w-full ${spacingClasses[spacingY]} ${bgColorClasses[bgColor]} ${borderClasses[border]} ${className}`}
    >
      {contentWidth === 'container' ? (
        <div className={`container mx-auto px-4 ${maxWidthClasses[maxWidth]}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default PageSection; 