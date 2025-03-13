import React from 'react';

/**
 * PageSection Props
 */
export interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray-50' | 'blue-50' | 'primary-light';
  spacingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Page Section Component
 * 
 * A component for creating consistent page sections with proper spacing and styling.
 * Use this to wrap content sections in pages for consistent styling.
 */
export const PageSection: React.FC<PageSectionProps> = ({
  children,
  className = '',
  id,
  bgColor = 'white',
  spacingY = 'lg',
}) => {
  // Map spacing values to actual classes
  const spacingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  // Map background colors to actual classes
  const bgColorClasses = {
    white: 'bg-white',
    'gray-50': 'bg-gray-50',
    'blue-50': 'bg-blue-50',
    'primary-light': 'bg-primary/10',
  };

  return (
    <section
      id={id}
      className={`w-full ${spacingClasses[spacingY]} ${bgColorClasses[bgColor]} ${className}`}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

/**
 * Page Header Props
 */
export interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  centered?: boolean;
  eyebrow?: string;
}

/**
 * Page Header Component
 * 
 * A component for creating consistent page headers with title and optional description.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
  centered = true,
  eyebrow,
}) => {
  return (
    <div className={`max-w-4xl ${centered ? 'mx-auto text-center' : ''} mb-12 ${className}`}>
      {eyebrow && (
        <div className="text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3 inline-block">
          {eyebrow}
        </div>
      )}
      <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${titleClassName}`}>{title}</h1>
      {description && (
        <p className={`text-lg text-gray-600 ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
};

/**
 * PageContent Props
 */
export interface PageContentProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Page Content Component
 * 
 * A component for creating consistent content sections within pages.
 */
export const PageContent: React.FC<PageContentProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
}) => {
  // Map max width values to actual classes
  const maxWidthClasses = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: '',
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto ${className}`}>
      {children}
    </div>
  );
}; 