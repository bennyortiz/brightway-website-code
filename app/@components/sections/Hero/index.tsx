'use client';

import React, { useEffect, useState } from 'react';
import HeroContent from './HeroContent';
import SafeImage from '../../ui/safe-image';
import dynamic from 'next/dynamic';

// Dynamically import motion components to reduce initial bundle size
// Only load after the main content is visible
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => ({ 
    default: mod.motion.div 
  })),
  { ssr: false, loading: () => <div className="w-full h-full rounded-2xl bg-gray-100"></div> }
);

/**
 * Hero Section Component
 *
 * The main hero section displayed at the top of the homepage.
 * Features a headline, description, rating, CTA buttons, and hero image.
 * Optimized for better LCP performance with efficient resource loading.
 */
const Hero = () => {
  const [shouldLoadImage, setShouldLoadImage] = useState(false);
  
  useEffect(() => {
    // Defer loading the image animation until after LCP
    const timer = setTimeout(() => {
      setShouldLoadImage(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-32 lg:pb-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content - prioritized for mobile */}
          <HeroContent />

          {/* Image section - deferred loading on mobile */}
          {shouldLoadImage ? (
            <MotionDiv 
              className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                type: "spring",
                damping: 25, 
                stiffness: 100,
                delay: 0.1
              }}
            >
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <SafeImage
                  src="/images/brightway-commercial-hallway.jpg"
                  alt="Brightway Commercial Hallway Cleaning"
                  fallbackText="Commercial Hallway Cleaning"
                  priority={false} // Don't compete with text for priority
                  placement="above-fold"
                  quality={85}
                  className="w-full h-full object-cover md:opacity-100 transition-opacity duration-300"
                />
              </div>
            </MotionDiv>
          ) : (
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
