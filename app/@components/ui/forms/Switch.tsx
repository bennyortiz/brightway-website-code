import React, { forwardRef } from 'react';

/**
 * Switch Props
 */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  labelPlacement?: 'start' | 'end';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Switch Component
 * 
 * A toggle switch component with consistent styling and features like
 * label, helper text, and error state.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      helperText,
      error,
      className = '',
      checked = false,
      onChange,
      labelPlacement = 'end',
      size = 'md',
      ...props
    },
    ref
  ) => {
    // Generate unique ID for switch field and label
    const id = props.id || `switch-${Math.random().toString(36).substring(2, 9)}`;
    
    // Size classes for switch track and thumb
    const sizeClasses = {
      sm: {
        track: 'w-8 h-4',
        thumb: 'h-3 w-3',
        translateX: 'translate-x-4',
      },
      md: {
        track: 'w-11 h-6',
        thumb: 'h-5 w-5',
        translateX: 'translate-x-5',
      },
      lg: {
        track: 'w-14 h-7',
        thumb: 'h-6 w-6',
        translateX: 'translate-x-7',
      },
    };
    
    // Label font size based on switch size
    const labelFontSize = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };
    
    // Handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked);
      }
    };

    const labelComponent = label && (
      <label 
        htmlFor={id} 
        className={`font-medium ${labelFontSize[size]} ${props.disabled ? 'text-gray-400' : 'text-gray-700'} cursor-pointer select-none`}
      >
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );

    return (
      <div className={className}>
        <div className="flex items-center">
          {/* Label before switch */}
          {label && labelPlacement === 'start' && (
            <div className="mr-3">{labelComponent}</div>
          )}
          
          {/* Switch */}
          <div className="relative inline-flex flex-shrink-0 items-center">
            <input
              id={id}
              ref={ref}
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={handleChange}
              aria-invalid={!!error}
              aria-describedby={`${id}-helper ${id}-error`}
              {...props}
            />
            
            {/* Switch Track */}
            <div
              className={`
                ${sizeClasses[size].track}
                ${checked ? 'bg-primary' : 'bg-gray-200'}
                ${error ? 'ring-2 ring-red-500' : ''}
                ${props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
              `}
              onClick={props.disabled ? undefined : () => {
                if (onChange) onChange(!checked);
              }}
            >
              {/* Switch Thumb */}
              <span
                className={`
                  ${sizeClasses[size].thumb}
                  ${checked ? sizeClasses[size].translateX : 'translate-x-1'}
                  ${props.disabled ? 'bg-gray-400' : 'bg-white'}
                  absolute inline-block transform rounded-full shadow-md transition-transform duration-200 ease-in-out
                `}
              />
            </div>
          </div>
          
          {/* Label after switch */}
          {label && labelPlacement === 'end' && (
            <div className="ml-3">{labelComponent}</div>
          )}
        </div>
        
        {/* Helper Text and Error Message */}
        <div className={`mt-1 text-sm ${labelPlacement === 'end' ? 'ml-12' : ''}`}>
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

Switch.displayName = 'Switch'; 