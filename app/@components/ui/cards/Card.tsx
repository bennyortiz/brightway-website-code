import React from 'react';

/**
 * Card Variants
 */
export type CardVariant = 'default' | 'outlined' | 'elevated' | 'flat';

/**
 * Card Props
 */
export interface CardProps {
  /**
   * Card content
   */
  children: React.ReactNode;

  /**
   * Card visual variant
   */
  variant?: CardVariant;

  /**
   * Whether to disable all padding
   */
  noPadding?: boolean;

  /**
   * Whether to add hover effects
   */
  hoverable?: boolean;

  /**
   * Whether to make card clickable
   */
  clickable?: boolean;

  /**
   * On click handler
   */
  onClick?: () => void;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Full width card
   */
  fullWidth?: boolean;

  /**
   * Header component (uses CardHeader internally)
   */
  header?: React.ReactNode;

  /**
   * Footer component (uses CardFooter internally)
   */
  footer?: React.ReactNode;

  /**
   * HTML element to render the card as
   */
  as?: React.ElementType;
}

/**
 * Card Header Props
 */
export interface CardHeaderProps {
  /**
   * Header content
   */
  children: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Remove bottom border
   */
  noBorder?: boolean;
}

/**
 * Card Footer Props
 */
export interface CardFooterProps {
  /**
   * Footer content
   */
  children: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Remove top border
   */
  noBorder?: boolean;
}

/**
 * Card Title Props
 */
export interface CardTitleProps {
  /**
   * Title content
   */
  children: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string;
}

/**
 * Card Body Props
 */
export interface CardBodyProps {
  /**
   * Body content
   */
  children: React.ReactNode;

  /**
   * Additional class names
   */
  className?: string;

  /**
   * Whether to disable all padding
   */
  noPadding?: boolean;
}

/**
 * Get variant classes for the card
 */
const getVariantClasses = (variant: CardVariant): string => {
  switch (variant) {
    case 'default':
      return 'bg-white border border-gray-200';
    case 'outlined':
      return 'bg-white border-2 border-gray-300';
    case 'elevated':
      return 'bg-white border border-gray-200 shadow-lg';
    case 'flat':
      return 'bg-gray-50 border border-gray-100';
    default:
      return 'bg-white border border-gray-200';
  }
};

/**
 * Card Component
 *
 * A flexible card component that can be used to display content in a
 * contained area with consistent styling.
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  noPadding = false,
  hoverable = false,
  clickable = false,
  onClick,
  className = '',
  fullWidth = true,
  header,
  footer,
  as: Component = 'div',
}) => {
  const variantClasses = getVariantClasses(variant);
  const widthClass = fullWidth ? 'w-full' : '';
  const hoverClasses = hoverable
    ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-md'
    : '';
  const clickableClasses = clickable ? 'cursor-pointer transition-colors hover:bg-gray-50' : '';

  return (
    <Component
      className={`rounded-lg overflow-hidden ${variantClasses} ${widthClass} ${hoverClasses} ${clickableClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {header && <CardHeader>{header}</CardHeader>}

      {/* If children is CardBody, pass noPadding, otherwise wrap in CardBody */}
      {React.isValidElement(children) && children.type === CardBody ? (
        React.cloneElement(children as React.ReactElement<CardBodyProps>, { noPadding })
      ) : (
        <CardBody noPadding={noPadding}>{children}</CardBody>
      )}

      {footer && <CardFooter>{footer}</CardFooter>}
    </Component>
  );
};

/**
 * Card Header Component
 *
 * A component to consistently style the header section of a card.
 */
export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  noBorder = false,
}) => {
  const borderClass = noBorder ? '' : 'border-b border-gray-200';

  return <div className={`px-6 py-4 ${borderClass} ${className}`}>{children}</div>;
};

/**
 * Card Footer Component
 *
 * A component to consistently style the footer section of a card.
 */
export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
  noBorder = false,
}) => {
  const borderClass = noBorder ? '' : 'border-t border-gray-200';

  return <div className={`px-6 py-4 ${borderClass} ${className}`}>{children}</div>;
};

/**
 * Card Title Component
 *
 * A component to consistently style the title of a card.
 */
export const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-semibold text-gray-900 ${className}`}>{children}</h3>;
};

/**
 * Card Body Component
 *
 * A component to consistently style the main content area of a card.
 */
export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = '',
  noPadding = false,
}) => {
  const paddingClass = noPadding ? '' : 'px-6 py-4';

  return <div className={`${paddingClass} ${className}`}>{children}</div>;
};
