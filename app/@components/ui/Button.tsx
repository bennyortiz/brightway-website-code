/**
 * Button Component
 * 
 * A reusable button component with various styles and sizes.
 */

import React from 'react';
import Link from 'next/link';

/**
 * Button variants
 */
const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'text-primary hover:bg-primary/10',
  danger: 'bg-red-600 text-white hover:bg-red-700',
} as const;

/**
 * Button sizes
 */
const sizes = {
  sm: 'h-8 px-4 text-sm',
  md: 'h-10 px-6',
  lg: 'h-12 px-8 text-lg',
  icon: 'h-10 w-10',
} as const;

/**
 * Button props
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant/style
   * @default 'primary'
   */
  variant?: keyof typeof variants;
  
  /**
   * Button size
   * @default 'md'
   */
  size?: keyof typeof sizes;
  
  /**
   * If provided, the button will render as a Next.js Link
   */
  href?: string;
  
  /**
   * Whether the link should open in a new tab
   * Only applies when href is provided
   */
  external?: boolean;
  
  /**
   * Show loading spinner
   */
  isLoading?: boolean;
  
  /**
   * Custom CSS class names
   */
  className?: string;
  
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    href,
    external,
    isLoading = false,
    className = '',
    children,
    disabled,
    ...props
  }, ref) => {
    // Base button classes
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none';
    
    // Combine all classes
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    // If loading, show spinner and disable button
    const content = isLoading ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </>
    ) : children;
    
    // If href is provided, render as a link
    if (href) {
      return (
        <Link
          href={href}
          className={buttonClasses}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Link>
      );
    }
    
    // Otherwise render as a button
    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button; 