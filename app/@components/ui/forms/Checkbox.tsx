import React, { forwardRef } from 'react';

/**
 * Checkbox Props
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  helperText?: string;
  error?: string;
  labelPlacement?: 'start' | 'end';
}

/**
 * Checkbox Component
 * 
 * A reusable checkbox component with consistent styling and features like
 * label, helper text, and error state.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      helperText,
      error,
      className = '',
      labelPlacement = 'end',
      ...props
    },
    ref
  ) => {
    // Generate unique ID for checkbox field and label
    const id = props.id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    
    // Calculate checkbox classes based on error state
    const checkboxClasses = `
      h-5 w-5 rounded
      border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'} 
      text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
      ${props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : ''}
      transition-colors duration-200
      ${className}
    `;

    const labelComponent = label && (
      <label 
        htmlFor={id} 
        className={`text-sm font-medium ${props.disabled ? 'text-gray-400' : 'text-gray-700'} cursor-pointer select-none`}
      >
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );

    return (
      <div>
        <div className="flex items-center">
          {/* Label before checkbox */}
          {label && labelPlacement === 'start' && (
            <div className="mr-3">{labelComponent}</div>
          )}
          
          {/* Checkbox */}
          <input
            id={id}
            ref={ref}
            type="checkbox"
            className={checkboxClasses}
            aria-invalid={!!error}
            aria-describedby={`${id}-helper ${id}-error`}
            {...props}
          />
          
          {/* Label after checkbox */}
          {label && labelPlacement === 'end' && (
            <div className="ml-3">{labelComponent}</div>
          )}
        </div>
        
        {/* Helper Text and Error Message */}
        <div className="mt-1 text-sm pl-7">
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

Checkbox.displayName = 'Checkbox'; 