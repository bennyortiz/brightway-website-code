import React from 'react';
import { cn } from '@/app/@lib/utils';

/**
 * Card Header Component
 */
export interface CardHeaderProps {
  /** Children content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  );
}

/**
 * Card Title Component
 */
export interface CardTitleProps {
  /** Children content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-2xl font-bold text-gray-900', className)}>
      {children}
    </h3>
  );
}

/**
 * Card Body Component
 */
export interface CardBodyProps {
  /** Children content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export function CardBody({ children, className }: CardBodyProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

/**
 * Card Footer Component
 */
export interface CardFooterProps {
  /** Children content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('p-6 pt-0 mt-auto', className)}>
      {children}
    </div>
  );
} 