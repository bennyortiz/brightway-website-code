'use client';

import React from 'react';
import HeroRating from './HeroRating';
import { PrimaryButton, OutlineButton } from '../../ui/buttons';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

/**
 * HeroContent Component
 *
 * Displays the main textual content of the Hero section, including:
 * - Badge
 * - Heading
 * - Description
 * - Rating
 * - Call-to-action buttons
 * 
 * Enhanced with animations for a more engaging presentation.
 */
const HeroContent = () => {
  return (
    <motion.div 
      className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary self-center md:self-start"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(0, 112, 243, 0.1)'
        }}
      >
        <span>Professional Commercial Cleaning</span>
      </motion.div>

      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-rendering-optimizeLegibility"
        variants={itemVariants}
      >
        Pristine Spaces for{' '}
        <motion.span 
          className="text-primary"
          animate={{ 
            color: ['#0070f3', '#0050a3', '#0070f3'],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: 'reverse' 
          }}
        >
          Productive
        </motion.span>{' '}
        Businesses
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto md:mx-0 font-optimizeLegibility"
        variants={itemVariants}
      >
        Brightway Cleaning delivers exceptional commercial cleaning services tailored to your
        business needs, ensuring a healthy, professional environment.
      </motion.p>

      <motion.div variants={itemVariants}>
        <HeroRating />
      </motion.div>

      <motion.div 
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
        variants={itemVariants}
      >
        <PrimaryButton href="#contact">Get a Free Quote</PrimaryButton>
        <OutlineButton href="#services" withArrow>
          Explore Services
        </OutlineButton>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
