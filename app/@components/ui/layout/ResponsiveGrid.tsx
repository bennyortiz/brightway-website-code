import React from 'react';
import { cn } from '@/app/@lib/utils';

type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6;

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    default: ColumnCount;
    sm?: ColumnCount;
    md?: ColumnCount;
    lg?: ColumnCount;
    xl?: ColumnCount;
  };
  gap?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

/**
 * ResponsiveGrid Component
 * 
 * A flexible grid layout component that:
 * - Adapts column count at different breakpoints
 * - Manages consistent gap spacing
 * - Standardizes responsive behavior
 * 
 * This helps maintain consistent layouts across all sections
 * and simplifies the implementation of responsive designs.
 */
export default function ResponsiveGrid({
  children,
  className,
  columns = { default: 1, sm: 2, lg: 3 },
  gap = { default: 6, md: 8 }
}: ResponsiveGridProps) {
  
  // Create column classes for different breakpoints
  const getColumnClass = (count: ColumnCount) => {
    return {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    }[count];
  };
  
  // Create gap classes for different breakpoints
  const getGapClass = (size: number) => {
    return `gap-${size}`;
  };
  
  // Construct responsive classes
  const columnClasses = [
    getColumnClass(columns.default),
    columns.sm && `sm:${getColumnClass(columns.sm)}`,
    columns.md && `md:${getColumnClass(columns.md)}`,
    columns.lg && `lg:${getColumnClass(columns.lg)}`,
    columns.xl && `xl:${getColumnClass(columns.xl)}`,
  ].filter(Boolean);
  
  const gapClasses = [
    getGapClass(gap.default),
    gap.sm && `sm:${getGapClass(gap.sm)}`,
    gap.md && `md:${getGapClass(gap.md)}`,
    gap.lg && `lg:${getGapClass(gap.lg)}`,
    gap.xl && `xl:${getGapClass(gap.xl)}`,
  ].filter(Boolean);
  
  return (
    <div className={cn('grid', ...columnClasses, ...gapClasses, className)}>
      {children}
    </div>
  );
} 