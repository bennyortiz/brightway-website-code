import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/app/lib/utils';

interface ButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  withArrow?: boolean;
}

export function Button({
  href,
  className,
  children,
  variant = 'primary',
  size = 'default',
  withArrow = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow";
  
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
  };
  
  const sizeStyles = {
    default: "h-12 px-6 text-lg",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-xl",
  };
  
  return (
    <Link 
      href={href}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Link>
  );
}

export function PrimaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="primary" />;
}

export function OutlineButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="outline" />;
}

export function SecondaryButton(props: Omit<ButtonProps, 'variant'>) {
  return <Button {...props} variant="secondary" />;
} 