import React, { forwardRef } from 'react';

/**
 * Textarea Props
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  rows?: number;
}

/**
 * Textarea Component
 * 
 * A reusable textarea component with consistent styling and features like
 * label, helper text, and error state.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      className = '',
      fullWidth = true,
      rows = 4,
      ...props
    },
    ref
  ) => {
    // Generate unique ID for textarea field and label
    const id = props.id || `textarea-${Math.random().toString(36).substring(2, 9)}`;
    
    // Calculate width class based on fullWidth prop
    const widthClass = fullWidth ? 'w-full' : '';
    
    // Calculate textarea classes based on error state
    const textareaClasses = `
      block ${widthClass} px-4 py-3 rounded-md 
      border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} 
      focus:outline-none focus:ring-2 focus:ring-opacity-50
      ${props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : 'bg-white'}
      transition-colors duration-200
      resize-y
      ${className}
    `;

    return (
      <div className={widthClass}>
        {/* Textarea Label */}
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        {/* Textarea Field */}
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          className={textareaClasses}
          aria-invalid={!!error}
          aria-describedby={`${id}-helper ${id}-error`}
          {...props}
        />
        
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

Textarea.displayName = 'Textarea'; 