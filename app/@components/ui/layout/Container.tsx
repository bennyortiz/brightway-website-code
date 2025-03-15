import React from 'react';
import { cn } from '@/app/@lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  size = 'xl',
  padding = true,
}) => {
  const sizeClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        padding && 'px-4 sm:px-6 md:px-8',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
