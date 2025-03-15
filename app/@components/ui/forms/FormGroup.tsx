import React from 'react';

/**
 * Form Group Props
 */
export interface FormGroupProps {
  /**
   * Group label
   */
  label?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Helper text displayed below the form control
   */
  helperText?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Form control component(s)
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Optional ID for the label
   */
  id?: string;

  /**
   * Whether to display in a horizontal layout
   */
  horizontal?: boolean;

  /**
   * Distribution ratio for horizontal layout (label:control)
   */
  ratio?: '1:3' | '1:2' | '1:1' | '2:1' | '3:1';
}

/**
 * FormGroup Component
 *
 * A component to consistently wrap form controls with labels, helper text,
 * and error messages. Supports both vertical and horizontal layouts.
 */
export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  required,
  helperText,
  error,
  children,
  className = '',
  id,
  horizontal = false,
  ratio = '1:2',
}) => {
  // Generate unique ID for the label
  const labelId = id || `form-group-${Math.random().toString(36).substring(2, 9)}`;

  // Parse ratio values
  const [labelPart, controlPart] = ratio.split(':').map(Number);
  const totalParts = labelPart + controlPart;
  const labelWidth = Math.round((labelPart / totalParts) * 12);
  const controlWidth = 12 - labelWidth;

  // Generate grid template columns for horizontal layout
  const gridCols = `grid-cols-12`;
  const labelCols = `col-span-${labelWidth}`;
  const controlCols = `col-span-${controlWidth}`;

  if (horizontal) {
    return (
      <div className={`${className}`}>
        <div className={`grid ${gridCols} gap-4 items-start`}>
          {/* Label */}
          {label && (
            <div className={`${labelCols}`}>
              <label htmlFor={labelId} className="block text-sm font-medium text-gray-700 pt-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
              </label>
            </div>
          )}

          {/* Form Control */}
          <div className={`${label ? controlCols : 'col-span-12'}`}>
            {children}

            {/* Helper Text and Error Message */}
            <div className="mt-1 text-sm">
              {helperText && !error && <p className="text-gray-500">{helperText}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vertical layout
  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      {label && (
        <label htmlFor={labelId} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Form Control */}
      <div>
        {children}

        {/* Helper Text and Error Message */}
        <div className="mt-1 text-sm">
          {helperText && !error && <p className="text-gray-500">{helperText}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
};
