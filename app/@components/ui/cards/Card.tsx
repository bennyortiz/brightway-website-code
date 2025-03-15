'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/app/@lib/utils';

/**
 * Card component props
 */
export interface CardProps {
  /** Children content of the card */
  children?: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Title displayed at the top of the card */
  title?: React.ReactNode;
  /** Description displayed below the title */
  description?: React.ReactNode;
  /** Icon to display at the top of the card (optional) */
  icon?: React.ReactNode;
  /** If true, adds hover animation effects */
  animated?: boolean;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** If true, card will fill the height of its container */
  fullHeight?: boolean;
  /** Card variant - affects styling */
  variant?: 'default' | 'outline' | 'ghost';
  /** Link destination if card should be clickable */
  href?: string;
  /** Optional array of features (typically string[]) */
  features?: React.ReactNode[];
  /** Feature icon to use if features are provided */
  featureIcon?: React.ReactNode;
  /** Any other props */
  [key: string]: any;
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.3,
    },
  }),
};

/**
 * Card Component
 * 
 * A versatile card component that can be used for services, features, testimonials, etc.
 * Supports animation effects and various content patterns.
 */
const Card = ({
  children,
  className,
  title,
  description,
  icon,
  animated = true,
  footer,
  fullHeight = true,
  variant = 'default',
  href,
  features,
  featureIcon,
  ...props
}: CardProps) => {
  // Determine appropriate card styles based on variant
  const cardStyles = cn(
    'p-6 rounded-lg transition-all duration-300',
    fullHeight && 'h-full flex flex-col',
    variant === 'default' && 'bg-white shadow-md hover:shadow-lg',
    variant === 'outline' && 'border border-gray-200 hover:border-primary/50',
    variant === 'ghost' && 'hover:bg-gray-50',
    href && 'cursor-pointer',
    className
  );

  const content = (
    <>
      {icon && (
        <motion.div
          className="mb-4"
          whileHover={animated ? { scale: 1.1, rotate: 5 } : undefined}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
      )}
      
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      
      {children}
      
      {features && features.length > 0 && (
        <div className="mt-auto">
          <div className="font-semibold text-gray-800 mb-2">Key Features:</div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                custom={index}
                variants={animated ? featureVariants : undefined}
              >
                {featureIcon && (
                  <motion.div
                    whileHover={animated ? { scale: 1.2 } : undefined}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="shrink-0 mr-2"
                  >
                    {featureIcon}
                  </motion.div>
                )}
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
      
      {footer && <div className="mt-4">{footer}</div>}
    </>
  );

  // Use conditional rendering based on href
  if (href) {
    return (
      <motion.a
        href={href}
        className={cardStyles}
        initial={animated ? "hidden" : undefined}
        whileInView={animated ? "visible" : undefined}
        viewport={animated ? { once: true, margin: '-50px' } : undefined}
        variants={animated ? cardVariants : undefined}
        whileHover={animated ? { y: -5 } : undefined}
        transition={animated ? { type: 'spring', stiffness: 300 } : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className={cardStyles}
      initial={animated ? "hidden" : undefined}
      whileInView={animated ? "visible" : undefined}
      viewport={animated ? { once: true, margin: '-50px' } : undefined}
      variants={animated ? cardVariants : undefined}
      whileHover={animated ? { y: -5 } : undefined}
      transition={animated ? { type: 'spring', stiffness: 300 } : undefined}
      {...props}
    >
      {content}
    </motion.div>
  );
};

export default Card;
