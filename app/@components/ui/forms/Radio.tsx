import React, { forwardRef } from 'react';

/**
 * Radio Option Item
 */
export interface RadioOptionItem {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Radio Group Props
 */
export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOptionItem[];
  value?: string;
  onChange?: (value: string) => void;
  helperText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  inline?: boolean;
  className?: string;
}

/**
 * Radio Props
 */
export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  label?: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

/**
 * Radio Component
 *
 * A simple radio button component
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, value, checked, onChange, className = '', ...props }, ref) => {
    // Generate unique ID for radio field and label
    const id = props.id || `radio-${Math.random().toString(36).substring(2, 9)}`;

    // Calculate radio classes
    const radioClasses = `
      h-4 w-4 rounded-full
      border-gray-300 
      text-primary focus:ring-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50
      ${props.disabled ? 'cursor-not-allowed opacity-75' : ''}
      ${className}
    `;

    // Handle change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className="flex items-center">
        <input
          id={id}
          ref={ref}
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
          className={radioClasses}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className={`ml-3 block text-sm font-medium ${props.disabled ? 'text-gray-400' : 'text-gray-700'} cursor-pointer`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

/**
 * RadioGroup Component
 *
 * A group of radio buttons with consistent styling and features like
 * label, helper text, and error state.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  options = [],
  value,
  onChange,
  helperText,
  error,
  required,
  disabled,
  inline = false,
  className = '',
}) => {
  // Generate unique ID for the group
  const groupId = `radio-group-${Math.random().toString(36).substring(2, 9)}`;

  // Handle radio change
  const handleRadioChange = (radioValue: string) => {
    if (onChange) {
      onChange(radioValue);
    }
  };

  return (
    <div className={className}>
      {/* RadioGroup Label */}
      {label && (
        <label id={`${groupId}-label`} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Radio Options */}
      <div
        role="radiogroup"
        aria-labelledby={label ? `${groupId}-label` : undefined}
        className={`${inline ? 'flex flex-wrap gap-4' : 'space-y-2'}`}
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={handleRadioChange}
            disabled={disabled || option.disabled}
            aria-describedby={`${groupId}-helper ${groupId}-error`}
          />
        ))}
      </div>

      {/* Helper Text and Error Message */}
      <div className="mt-1 text-sm">
        {helperText && !error && (
          <p id={`${groupId}-helper`} className="text-gray-500">
            {helperText}
          </p>
        )}
        {error && (
          <p id={`${groupId}-error`} className="text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};
