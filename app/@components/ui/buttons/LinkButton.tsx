import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/app/@lib/utils';

/**
 * LinkButton Props Interface
 */
export interface LinkButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  withArrow?: boolean;
}

/**
 * LinkButton Component
 *
 * A button component that acts as a link (Next.js Link component).
 * Supports different variants, sizes, and an optional arrow icon.
 *
 * @param {LinkButtonProps} props - The component props
 */
export function LinkButton({
  href,
  className,
  children,
  variant = 'primary',
  size = 'default',
  withArrow = false,
}: LinkButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-primary bg-transparent text-primary hover:bg-primary/10',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
  };

  const sizeStyles = {
    default: 'h-11 sm:h-10 px-3 sm:px-4 py-2 text-sm',
    sm: 'h-10 sm:h-9 px-2 sm:px-3 text-xs',
    lg: 'h-12 px-4 sm:px-6 py-2 text-sm sm:text-base min-w-[120px]',
  };

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  );
}

/**
 * PrimaryLinkButton Component
 *
 * A pre-configured LinkButton with the primary variant.
 */
export function PrimaryLinkButton(props: Omit<LinkButtonProps, 'variant'>) {
  return <LinkButton {...props} variant="primary" />;
}

/**
 * OutlineLinkButton Component
 *
 * A pre-configured LinkButton with the outline variant.
 */
export function OutlineLinkButton(props: Omit<LinkButtonProps, 'variant'>) {
  return <LinkButton {...props} variant="outline" />;
}

/**
 * SecondaryLinkButton Component
 *
 * A pre-configured LinkButton with the secondary variant.
 */
export function SecondaryLinkButton(props: Omit<LinkButtonProps, 'variant'>) {
  return <LinkButton {...props} variant="secondary" />;
}
