import React, { ReactNode } from 'react';
import Link from 'next/link';
import NoIndex from '@/app/@components/shared/NoIndex';

/**
 * Interface for the ErrorPageLayout component
 */
export interface ErrorPageLayoutProps {
  /**
   * The main title of the error page
   */
  title: string;
  
  /**
   * Optional subtitle text
   */
  subtitle?: string;
  
  /**
   * Optional description text
   */
  description?: string;
  
  /**
   * Optional icon component to display
   */
  icon?: ReactNode;
  
  /**
   * Optional HTTP status code (404, 500, etc.)
   */
  status?: string | number;
  
  /**
   * Primary action button component
   */
  actionButton?: ReactNode;
  
  /**
   * Secondary action button component
   */
  secondaryActionButton?: ReactNode;
  
  /**
   * Whether to include the NoIndex component (default: true)
   */
  withNoIndex?: boolean;
  
  /**
   * Additional classes for the layout
   */
  className?: string;
}

/**
 * ErrorPageLayout Component
 * 
 * A standardized layout for error pages such as 404, 500, etc.
 * It provides a consistent structure and styling while allowing
 * customization of content and actions.
 */
export function ErrorPageLayout({
  title,
  subtitle,
  description,
  icon,
  status,
  actionButton,
  secondaryActionButton,
  withNoIndex = true,
  className = '',
}: ErrorPageLayoutProps) {
  // Default action buttons if none provided
  const defaultActionButton = (
    <Link
      href="/"
      className="inline-flex items-center justify-center h-11 px-6 font-medium bg-primary text-white rounded-md shadow hover:bg-primary-dark transition-colors"
    >
      Return to Homepage
    </Link>
  );

  return (
    <div className={`container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen ${className}`}>
      {/* Prevent search engines from indexing error pages */}
      {withNoIndex && <NoIndex noFollow={true} />}
      
      {/* HTTP Status Code */}
      {status && <h1 className="text-5xl font-bold mb-4">{status}</h1>}
      
      {/* Icon */}
      {icon && (
        <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
      )}
      
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6 text-center">{title}</h2>
      
      {/* Subtitle */}
      {subtitle && (
        <p className="text-xl font-medium mb-4 text-center">
          {subtitle}
        </p>
      )}
      
      {/* Description */}
      {description && (
        <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
          {description}
        </p>
      )}
      
      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        {actionButton || defaultActionButton}
        {secondaryActionButton}
      </div>
    </div>
  );
}

export default ErrorPageLayout; 