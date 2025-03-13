'use client';

import React from 'react';
import HeroRating from './HeroRating';
import { PrimaryButton, OutlineButton } from '../../ui/buttons';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import HeroText for hydration
const HeroText = dynamic(() => import('./HeroText'), {
  ssr: true,
});

// Animation variants - optimized for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/**
 * HeroContent Component
 *
 * Displays the main content of the Hero section, including:
 * - Server-rendered text content (HeroText)
 * - Rating
 * - Call-to-action buttons
 * 
 * Optimized for better LCP performance by:
 * 1. Using server-rendered text
 * 2. Deferring animations until after hydration
 * 3. Lazy-loading non-critical elements
 */
const HeroContent = () => {
  return (
    <div className="md:w-1/2">
      {/* Critical text content - server rendered */}
      <HeroText />

      {/* Interactive elements - client rendered with animations */}
      <LazyMotion features={domAnimation}>
        <motion.div 
          className="mt-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <HeroRating />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2 md:pt-4"
            variants={itemVariants}
          >
            <PrimaryButton href="#contact">Get a Free Quote</PrimaryButton>
            <OutlineButton href="#services" withArrow>
              Explore Services
            </OutlineButton>
          </motion.div>
        </motion.div>
      </LazyMotion>
    </div>
  );
};

export default HeroContent;
