/**
 * Motion Components
 * 
 * Reusable animated components built with Framer Motion.
 * These components provide consistent animations throughout the site.
 */

'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { fadeIn, fadeInUp, scaleUp } from './index';

interface AnimatedComponentProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: React.ElementType;
}

// Component that appears with a subtle fade effect
export const FadeIn = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  variants = fadeIn,
  ...rest
}: AnimatedComponentProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Component that fades in while moving up
export const FadeInUp = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...rest
}: AnimatedComponentProps) => {
  return (
    <FadeIn className={className} delay={delay} variants={fadeInUp} {...rest}>
      {children}
    </FadeIn>
  );
};

// Component that scales up while fading in
export const ScaleIn = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...rest
}: AnimatedComponentProps) => {
  return (
    <FadeIn className={className} delay={delay} variants={scaleUp} {...rest}>
      {children}
    </FadeIn>
  );
};

// Component that reveals children in a staggered sequence
export const StaggerContainer = ({
  children,
  className = '',
  delay = 0,
  as = 'div',
  ...rest
}: AnimatedComponentProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay, staggerChildren: 0.1 }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Component that animates on hover
export const AnimatedButton = ({
  children,
  className = '',
  ...rest
}: AnimatedComponentProps) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

// Animated image component with zoom capability
export const AnimatedImage = ({
  children,
  className = '',
  delay = 0,
  ...rest
}: AnimatedComponentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={`overflow-hidden ${className}`}
      {...rest}
    >
      <motion.div
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.8 }
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 