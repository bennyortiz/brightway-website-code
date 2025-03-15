import React from 'react';
import { cn } from '@/app/@lib/utils';

type ColumnSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  span?:
    | {
        default?: ColumnSpan;
        sm?: ColumnSpan;
        md?: ColumnSpan;
        lg?: ColumnSpan;
        xl?: ColumnSpan;
        '2xl'?: ColumnSpan;
      }
    | ColumnSpan;
  start?:
    | {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      }
    | number;
  order?:
    | {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
      }
    | number;
};

export const Column: React.FC<ColumnProps> = ({
  children,
  className,
  as: Component = 'div',
  span,
  start,
  order,
}) => {
  // Helper function to convert responsive object to tailwind classes
  const getResponsiveClasses = (
    prefix: string,
    value?: Record<string, number | string> | number | string
  ) => {
    if (value === undefined) return '';

    if (typeof value === 'number' || typeof value === 'string') {
      const spanValue = value === 'full' ? 'full' : value;
      return `${prefix}-${spanValue}`;
    }

    return Object.entries(value)
      .map(([breakpoint, val]) => {
        if (val === undefined) return '';
        const breakpointPrefix = breakpoint === 'default' ? '' : `${breakpoint}:`;
        const spanValue = val === 'full' ? 'full' : val;
        return `${breakpointPrefix}${prefix}-${spanValue}`;
      })
      .filter(Boolean)
      .join(' ');
  };

  const spanClasses = getResponsiveClasses('col-span', span);
  const startClasses = getResponsiveClasses('col-start', start);
  const orderClasses = getResponsiveClasses('order', order);

  return (
    <Component className={cn(spanClasses, startClasses, orderClasses, className)}>
      {children}
    </Component>
  );
};

export default Column;
