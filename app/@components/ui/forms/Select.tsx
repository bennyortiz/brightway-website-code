import React, { forwardRef, useId } from 'react';

/**
 * Option Item for Select
 */
export interface OptionItem {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Select Props
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
  options: OptionItem[];
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
}

/**
 * Select Component
 *
 * A reusable select component with consistent styling and features like
 * label, helper text, and error state.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      className = '',
      fullWidth = true,
      options = [],
      icon,
      size = 'md',
      placeholder,
      ...props
    },
    ref
  ) => {
    // Generate stable ID for select field and label
    const uniqueId = useId();
    const id = props.id || `select-${uniqueId}`;

    // Calculate width class based on fullWidth prop
    const widthClass = fullWidth ? 'w-full' : '';

    // Calculate sizing
    const sizeClasses = {
      sm: 'py-1.5 text-sm',
      md: 'py-2.5 text-base',
      lg: 'py-3 text-lg',
    };

    // Calculate select classes based on error state and size
    const selectClasses = `
      block ${widthClass} px-4 ${sizeClasses[size]} pr-10 rounded-md appearance-none
      border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'} 
      focus:outline-none focus:ring-2 focus:ring-opacity-50
      ${icon ? 'pl-10' : ''}
      ${props.disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : 'bg-white'}
      transition-colors duration-200
      ${className}
    `;

    return (
      <div className={widthClass}>
        {/* Select Label */}
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* Select Field with Icon */}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}

          <select
            id={id}
            ref={ref}
            className={selectClasses}
            aria-invalid={!!error}
            aria-describedby={`${id}-helper ${id}-error`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}

            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Custom select arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className={`h-5 w-5 ${error ? 'text-red-500' : 'text-gray-400'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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

Select.displayName = 'Select';
