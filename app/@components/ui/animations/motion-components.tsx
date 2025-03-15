'use client';

import { motion } from 'framer-motion';

/**
 * FadeIn Animation Component
 *
 * A motion div that fades in its children with a slight delay.
 */
export const FadeIn = ({ children, className = '', delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * FadeInUp Animation Component
 *
 * A motion div that fades in its children while moving upward.
 */
export const FadeInUp = ({ children, className = '', delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * ScaleIn Animation Component
 *
 * A motion div that scales in its children.
 */
export const ScaleIn = ({ children, className = '', delay = 0, ...props }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

/**
 * StaggerContainer Animation Component
 *
 * A container that staggers the animation of its children.
 */
export const StaggerContainer = ({
  children,
  className = '',
  staggerChildren = 0.1,
  delayChildren = 0,
  ...props
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren,
          delayChildren,
        },
      },
    }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
