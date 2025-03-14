import React, { ReactNode } from 'react';
import clsx from 'clsx';

// Define the different background types
export type SectionBackground = 'white' | 'gray-50' | 'blue-50';

// Props for the background wrapper component
interface SectionBackgroundWrapperProps {
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
  id?: string; // Optional ID for linking
}

/**
 * Section component with background handling
 * 
 * This wrapper ensures the section has the proper background
 * and padding, with no need for inline hardcoded values.
 */
export const Section: React.FC<SectionBackgroundWrapperProps> = ({
  children,
  background = 'white',
  className = '',
  id
}) => {
  // Construct the background class based on the background type
  const bgClass = {
    'white': 'bg-white',
    'gray-50': 'bg-gray-50',
    'blue-50': 'bg-blue-50'
  }[background];

  return (
    <section 
      id={id}
      className={clsx('w-full py-16 md:py-20', bgClass, className)}
    >
      {children}
    </section>
  );
};

/**
 * CTASection component
 * 
 * This specifically handles CTA sections with correct background
 */
export const CTASection: React.FC<SectionBackgroundWrapperProps> = ({
  children,
  background = 'white',
  className = '',
  id
}) => {
  // Construct the background class based on the background type
  const bgClass = {
    'white': 'bg-white',
    'gray-50': 'bg-gray-50',
    'blue-50': 'bg-blue-50'
  }[background];

  return (
    <section 
      id={id}
      className={clsx('w-full py-16', bgClass, className)}
    >
      {children}
    </section>
  );
};

export default Section; 