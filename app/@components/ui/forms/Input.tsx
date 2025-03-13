import React, { forwardRef } from 'react';

/**
 * Input Props
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

/**
 * Input Component
 * 
 * A reusable input component with consistent styling and features like
 * label, helper text, error state, and icons.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      className = '',
      fullWidth = true,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    // Generate unique ID for input field and label
    const id = props.id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    // Calculate width class based on fullWidth prop
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Calculate input classes based on error state and icon position
    const inputClasses = `
      block ${widthClass} px-4 py-3 rounded-md 
      border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} 
      focus:outline-none focus:ring-2 focus:ring-opacity-50
      ${icon && iconPosition === 'left' ? 'pl-10' : ''}
      ${icon && iconPosition === 'right' ? 'pr-10' : ''}
      ${props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : 'bg-white'}
      transition-colors duration-200
      ${className}
    `;

    return (
      <div className={widthClass}>
        {/* Input Label */}
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {/* Input Field with Icon */}
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
          
          <input
            id={id}
            ref={ref}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={`${id}-helper ${id}-error`}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}
        </div>
        
        {/* Helper Text and Error Message */}
        <div className="mt-1 text-sm">
          {helperText && !error && (
            <p id={`${id}-helper`} className="text-gray-500">
              {helperText}
            </p>
          )}
          {error && (
            <p id={`${id}-error`} className="text-red-600">
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input'; 