'use client';

import React from 'react';
import HeroRating from './HeroRating';
import { PrimaryButton, OutlineButton } from '../../ui/buttons';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

// Animation variants - optimized for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
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
 * Displays the main textual content of the Hero section, including:
 * - Badge
 * - Heading
 * - Description
 * - Rating
 * - Call-to-action buttons
 * 
 * Optimized for better LCP performance with simplified animations.
 */
const HeroContent = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div 
        className="flex flex-col space-y-4 md:space-y-6 md:w-1/2 text-center md:text-left hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary self-center md:self-start"
          variants={itemVariants}
        >
          <span>Professional Commercial Cleaning</span>
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-rendering-optimizeLegibility hero-text"
          variants={itemVariants}
        >
          Pristine Spaces for{' '}
          <span className="text-primary">
            Productive
          </span>{' '}
          Businesses
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-[600px] mx-auto md:mx-0 font-optimizeLegibility hero-text"
          variants={itemVariants}
          data-lcp="true"
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '0 500px',
          }}
        >
          Brightway Cleaning delivers exceptional commercial cleaning services tailored to your
          business needs, ensuring a healthy, professional environment.
        </motion.p>

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
  );
};

export default HeroContent;
