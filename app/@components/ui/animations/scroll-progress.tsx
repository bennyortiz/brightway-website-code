'use client';

import { useEffect, useRef, RefObject } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  /**
   * Optional ref to the scrollable container
   * If provided, scroll progress will be calculated based on this container
   * If not provided, document.documentElement will be used
   */
  containerRef?: RefObject<HTMLElement>;
}

/**
 * ScrollProgressBar Component
 * 
 * Displays a progress bar at the bottom of the page that fills as the user scrolls down.
 * This provides a visual indicator of how far through the content the user has scrolled.
 * Positioned at the bottom for better visibility.
 * 
 * Uses a smoother animation with useSpring and ensures progress is calculated
 * against the entire document height to prevent resetting between sections.
 */
export const ScrollProgressBar = ({ containerRef }: ScrollProgressBarProps = {}) => {
  // Create a ref to hold the document element if no container ref is provided
  const documentRef = useRef<HTMLElement | null>(null);
  
  // Set the ref to the document element when component mounts if no container ref is provided
  useEffect(() => {
    if (!containerRef) {
      documentRef.current = document.documentElement;
    }
  }, [containerRef]);

  // Use the container ref if provided, otherwise use document ref
  const { scrollYProgress } = useScroll({
    // Use the provided container ref or fall back to document
    container: containerRef || documentRef,
    // Track progress from the start to end of the content
    offset: ["start start", "end end"]
  });
  
  // Add spring physics for smoother animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-2 bg-primary z-30 shadow-[0_-1px_6px_rgba(0,112,243,0.3)]"
      style={{ 
        scaleX, 
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