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
        
        {/* Centered B letterform */}
        <path d="M22 16H38C42.4183 16 46 19.5817 46 24C46 28.4183 42.4183 32 38 32H22V16Z" fill="white" opacity="0.85" />
        <path d="M22 32H40C44.4183 32 48 35.5817 48 40C48 44.4183 44.4183 48 40 48H22V32Z" fill="white" />
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