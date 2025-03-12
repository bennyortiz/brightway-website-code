/**
 * Animation variants for Framer Motion
 * 
 * This file contains reusable animation configurations that can be
 * applied across the website for consistent motion design.
 */

import { Variants } from 'framer-motion';

// Fade in animation (subtle)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Fade in animation with y-axis movement (from bottom)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Fade in animation with y-axis movement (from top)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Scale up animation with fade
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// Staggered children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Hover animations for interactive elements
export const hoverScale = {
  scale: 1.03,
  transition: { duration: 0.2 }
};

// Tap animation for buttons
export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1 }
};

// Initial animation delay based on index
export const getDelayedFadeIn = (index: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: 0.1 * index,
      ease: 'easeOut'
    }
  }
}); 