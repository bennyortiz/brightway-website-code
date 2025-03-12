'use client';

import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgressBar Component
 * 
 * Displays a progress bar at the top of the page that fills as the user scrolls down.
 * This provides a visual indicator of how far through the content the user has scrolled.
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
    />
  );
}; 