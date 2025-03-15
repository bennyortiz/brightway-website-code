import React from 'react';
import { cn } from '@/app/@lib/utils';

type GridProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?:
    | {
        default?: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
        '2xl'?: number | string;
      }
    | number
    | string;
  rowGap?:
    | {
        default?: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
        '2xl'?: number | string;
      }
    | number
    | string;
  columnGap?:
    | {
        default?: number | string;
        sm?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
        '2xl'?: number | string;
      }
    | number
    | string;
};

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  as: Component = 'div',
  columns = { default: 1, md: 2, lg: 3 },
  gap = 4,
  rowGap,
  columnGap,
}) => {
  // Helper function to convert responsive object to tailwind classes
  const getResponsiveClasses = (
    prefix: string,
    value?: Record<string, number | string> | number | string
  ) => {
    if (value === undefined) return '';

    if (typeof value === 'number' || typeof value === 'string') {
      return `${prefix}-${value}`;
    }

    return Object.entries(value)
      .map(([breakpoint, val]) => {
        if (val === undefined) return '';
        const breakpointPrefix = breakpoint === 'default' ? '' : `${breakpoint}:`;
        return `${breakpointPrefix}${prefix}-${val}`;
      })
      .filter(Boolean)
      .join(' ');
  };

  // Generate columns classes
  const columnsClasses = Object.entries(columns)
    .map(([breakpoint, count]) => {
      if (count === undefined) return '';
      const breakpointPrefix = breakpoint === 'default' ? '' : `${breakpoint}:`;
      return `${breakpointPrefix}grid-cols-${count}`;
    })
    .filter(Boolean)
    .join(' ');

  // Generate gap classes
  const gapClasses = getResponsiveClasses('gap', gap);
  const rowGapClasses = getResponsiveClasses('gap-y', rowGap);
  const colGapClasses = getResponsiveClasses('gap-x', columnGap);

  return (
    <Component
      className={cn('grid', columnsClasses, gapClasses, rowGapClasses, colGapClasses, className)}
    >
      {children}
    </Component>
  );
};

export default Grid;
