'use client';

import React from 'react';
import HeroContent from './HeroContent';
import SafeImage from '../../ui/safe-image';
import dynamic from 'next/dynamic';

// Dynamically import motion components to reduce initial bundle size
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => ({ 
    default: mod.motion.div 
  })),
  { ssr: false }
);

/**
 * Hero Section Component
 *
 * The main hero section displayed at the top of the homepage.
 * Features a headline, description, rating, CTA buttons, and hero image.
 * Enhanced with animations for a more engaging introduction.
 */
const Hero = () => {
  return (
    <section className="w-full pt-32 md:pt-36 lg:pt-40 pb-12 md:pb-32 lg:pb-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content - prioritized for mobile */}
          <HeroContent />

          {/* Image section - deferred loading on mobile */}
          <MotionDiv 
            className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ 
              type: "spring",
              damping: 20, 
              stiffness: 100,
              delay: 0.2
            }}
          >
            <MotionDiv 
              className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.5 }
              }}
            >
              <SafeImage
                src="/images/brightway-commercial-hallway.jpg"
                alt="Brightway Commercial Hallway Cleaning"
                fallbackText="Commercial Hallway Cleaning"
                priority={false}
                loading="lazy"
                className="w-full h-full object-cover md:opacity-100 transition-opacity duration-300"
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;
