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
        
        {/* Perfectly centered B letterform */}
        <path d="M20 16H36C40.4183 16 44 19.5817 44 24C44 28.4183 40.4183 32 36 32H20V16Z" fill="white" opacity="0.85" />
        <path d="M20 32H38C42.4183 32 46 35.5817 46 40C46 44.4183 42.4183 48 38 48H20V32Z" fill="white" />
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