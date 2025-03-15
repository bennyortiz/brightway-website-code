/**
 * Button Component
 * 
 * A versatile button component that supports various visual styles,
 * sizes, loading states, and icon placements. This component serves as
 * the primary action element throughout the application.
 * 
 * @module UI Components
 */

'use client';

import React, { forwardRef } from 'react';
import Link from 'next/link';

/**
 * Button Variants
 * 
 * Defines the visual style of the button
 */
export type ButtonVariant = 
  | 'primary'   // Main call-to-action
  | 'secondary' // Secondary buttons
  | 'outline'   // Outlined style
  | 'ghost'     // Text-only style
  | 'danger'    // Destructive actions
  | 'success';  // Confirmation actions

/**
 * Button Sizes
 * 
 * Controls the size of the button
 */
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Base Button Props
 * 
 * Common props shared between Button and ButtonLink components
 */
export interface BaseButtonProps {
  /**
   * Content to display inside the button
   */
  children: React.ReactNode;
  
  /**
   * Button variant that determines the visual style
   * @default "primary"
   */
  variant?: ButtonVariant;
  
  /**
   * Button size
   * @default "md"
   */
  size?: ButtonSize;
  
  /**
   * Whether the button should take full width of container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Whether the button should be in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Icon to display before the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display after the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Additional class names
   */
  className?: string;
  
  /**
   * Makes the button corners rounded
   */
  rounded?: boolean;
}

/**
 * Button Props
 */
export interface ButtonProps extends 
  BaseButtonProps,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {}

/**
 * Button Link Props
 */
export interface ButtonLinkProps extends 
  BaseButtonProps,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> {
  /**
   * The URL the link should navigate to
   */
  href: string;
  
  /**
   * Whether the link should be handled by Next.js router
   */
  nextLink?: boolean;
  
  /**
   * Target attribute (e.g., '_blank' for new tab)
   */
  target?: string;
}

/**
 * Gets class names based on button variant
 */
const getVariantClasses = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'bg-primary text-white hover:bg-primary-dark focus:ring-primary';
    case 'secondary':
      return 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary';
    case 'outline':
      return 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500';
    case 'ghost':
      return 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
    case 'success':
      return 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500';
    default:
      return 'bg-primary text-white hover:bg-primary-dark focus:ring-primary';
  }
};

/**
 * Gets class names based on button size
 */
const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case 'xs':
      return 'px-2.5 py-1.5 text-xs';
    case 'sm':
      return 'px-3 py-2 text-sm';
    case 'md':
      return 'px-4 py-2 text-base';
    case 'lg':
      return 'px-5 py-2.5 text-lg';
    case 'xl':
      return 'px-6 py-3 text-xl';
    default:
      return 'px-4 py-2 text-base';
  }
};

/**
 * Button Component
 * 
 * A reusable button component with different variants, sizes, and states.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      className = '',
      rounded = true,
      disabled,
      ...rest
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = getVariantClasses(variant);
    const sizeClasses = getSizeClasses(size);
    const widthClass = fullWidth ? 'w-full' : '';
    const roundedClass = rounded ? 'rounded-md' : '';
    
    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${roundedClass} ${className}`}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
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
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

/**
 * ButtonLink Component
 * 
 * A component that renders a link styled like a button.
 * Can be used with Next.js Link component or as a regular anchor.
 */
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  rounded = true,
  nextLink = true,
  target,
  ...rest
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const widthClass = fullWidth ? 'w-full' : '';
  const roundedClass = rounded ? 'rounded-md' : '';
  
  const linkClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${roundedClass} ${className}`;
  
  // If it should use Next.js Link component
  if (nextLink) {
    return (
      <Link 
        href={href}
        className={linkClasses}
        target={target}
        {...rest}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Link>
    );
  }
  
  // Regular anchor tag
  return (
    <a
      href={href}
      className={linkClasses}
      target={target}
      {...rest}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </a>
  );
};
