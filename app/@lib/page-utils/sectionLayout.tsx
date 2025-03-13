import React from 'react';

/**
 * Section Layout Props
 */
export interface SectionLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  centered?: boolean;
  eyebrow?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noContainer?: boolean;
}

/**
 * Section Layout Component
 * 
 * A component for creating consistent section layouts with title, description, and content.
 * This provides a standard way to structure sections across the site.
 */
export const SectionLayout: React.FC<SectionLayoutProps> = ({
  children,
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  headerClassName = '',
  contentClassName = '',
  centered = true,
  eyebrow,
  maxWidth = 'xl',
  noContainer = false,
}) => {
  // Map max width values to actual classes
  const maxWidthClasses = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: '',
  };

  const containerClasses = noContainer ? '' : 'container mx-auto px-4';

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className={`${maxWidthClasses[maxWidth]} mx-auto`}>
        {/* Section Header */}
        {(title || description) && (
          <div className={`${centered ? 'text-center' : ''} mb-12 ${headerClassName}`}>
            {eyebrow && (
              <div className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
                {eyebrow}
              </div>
            )}
            {title && <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleClassName}`}>{title}</h2>}
            {description && (
              <p className={`text-lg text-gray-600 ${centered ? 'max-w-3xl mx-auto' : ''} ${descriptionClassName}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Section Content */}
        <div className={contentClassName}>{children}</div>
      </div>
    </div>
  );
};

/**
 * TwoColumn Layout Props
 */
export interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  reverse?: boolean;
  verticalAlignment?: 'start' | 'center' | 'end' | 'stretch';
  leftColumnWidth?: '1/3' | '1/2' | '2/3';
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * Two Column Layout Component
 * 
 * A component for creating consistent two-column layouts.
 * Easily create responsive side-by-side content.
 */
export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftContent,
  rightContent,
  className = '',
  leftClassName = '',
  rightClassName = '',
  reverse = false,
  verticalAlignment = 'center',
  leftColumnWidth = '1/2',
  gap = 'lg',
}) => {
  // Map vertical alignment values to actual classes
  const alignmentClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  // Map column width values to actual classes
  const leftColumnClasses = {
    '1/3': 'md:w-1/3',
    '1/2': 'md:w-1/2',
    '2/3': 'md:w-2/3',
  };

  // Calculate right column width based on left column width
  const rightColumnClasses = {
    '1/3': 'md:w-2/3',
    '1/2': 'md:w-1/2',
    '2/3': 'md:w-1/3',
  };

  // Map gap values to actual classes
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
  };

  const orderClass = reverse ? 'md:flex-row-reverse' : '';

  return (
    <div className={`flex flex-col md:flex-row ${orderClass} ${alignmentClasses[verticalAlignment]} ${gapClasses[gap]} ${className}`}>
      <div className={`w-full ${leftColumnClasses[leftColumnWidth]} ${leftClassName}`}>
        {leftContent}
      </div>
      <div className={`w-full ${rightColumnClasses[leftColumnWidth]} ${rightClassName}`}>
        {rightContent}
      </div>
    </div>
  );
}; 