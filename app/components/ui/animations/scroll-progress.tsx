'use client';

import { motion, useScroll } from 'framer-motion';

/**
 * ScrollProgressBar Component
 * 
 * Displays a progress bar at the bottom of the page that fills as the user scrolls down.
 * This provides a visual indicator of how far through the content the user has scrolled.
 * Positioned at the bottom for better visibility.
 */
export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-2 bg-primary z-30 shadow-[0_-1px_6px_rgba(0,112,243,0.3)]"
      style={{ 
        scaleX: scrollYProgress, 
        transformOrigin: '0%'
      }}
      initial={{ opacity: 0.7 }}
      animate={{ 
        opacity: [0.7, 0.9, 0.7],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    />
  );
}; 