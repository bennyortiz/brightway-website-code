import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
}

/**
 * Logo Component
 * 
 * Displays the Brightway logo with both icon and text or just icon
 * Can be used in different sizes and contexts throughout the site
 */
const Logo: React.FC<LogoProps> = ({ 
  className = '',
  iconOnly = false,
  textSize = 'md'
}) => {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <Link 
      href="/" 
      prefetch={true} 
      className={`flex items-center font-bold ${className}`}
    >
      {/* Icon from favicon.svg */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={iconOnly ? "36" : "32"} 
        height={iconOnly ? "36" : "32"} 
        viewBox="0 0 64 64" 
        className="mr-2 flex-shrink-0"
      >
        {/* Background circle */}
        <circle cx="32" cy="32" r="32" fill="currentColor" className="text-primary" />
        
        {/* Stylized B letterform */}
        <path d="M24 16H40C44.4183 16 48 19.5817 48 24C48 28.4183 44.4183 32 40 32H24V16Z" fill="white" opacity="0.85" />
        <path d="M24 32H42C46.4183 32 50 35.5817 50 40C50 44.4183 46.4183 48 42 48H24V32Z" fill="white" />

        {/* Water droplet */}
        <path d="M20 17C20 17 14 24 14 28C14 31.3137 16.6863 34 20 34C23.3137 34 26 31.3137 26 28C26 24 20 17 20 17Z" fill="white" opacity="0.9" />
      </svg>

      {/* Only show text if not iconOnly */}
      {!iconOnly && (
        <span className={`${textSizeClasses[textSize]} text-primary`}>
          Brightway
        </span>
      )}
    </Link>
  );
};

export default Logo; 