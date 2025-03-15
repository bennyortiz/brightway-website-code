import React from 'react';
import { cn } from '@/app/@lib/utils';
import Container from './Container';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  containerPadding?: boolean;
  withContainer?: boolean;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  as: Component = 'section',
  containerSize = 'xl',
  containerPadding = true,
  withContainer = true,
  spacing = 'lg',
  background,
}) => {
  // Spacing classes based on the spacing prop
  const spacingClasses = {
    none: '',
    sm: 'py-4 md:py-6',
    md: 'py-8 md:py-12',
    lg: 'py-12 md:py-16',
    xl: 'py-16 md:py-24',
  };

  // The section content - either direct children or within a container
  const content = withContainer ? (
    <Container size={containerSize} padding={containerPadding} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component className={cn(spacing && spacingClasses[spacing], background, className)}>
      {content}
    </Component>
  );
};

export default Section;
