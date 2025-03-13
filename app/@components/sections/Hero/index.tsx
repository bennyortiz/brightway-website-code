'use client';

import React, { Suspense } from 'react';
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
 * Optimized for better LCP and overall performance by:
 * 1. Server-rendering critical content
 * 2. Lazy-loading non-critical components
 * 3. Optimizing image loading strategy
 * 
 * Enhanced with responsive design across all viewport sizes:
 * - Stack content on small screens
 * - Side-by-side on medium screens and above
 * - Optimized image sizes and aspect ratios for each viewport
 */
const Hero = () => {
  return (
    <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-10 sm:pb-16 md:pb-24 lg:pb-32 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-8 md:gap-4 lg:gap-8">
          {/* Critical content - server rendered */}
          <div className="w-full md:w-1/2 max-w-2xl mx-auto md:mx-0">
            <Suspense fallback={null}>
              <HeroContent />
            </Suspense>
          </div>

          {/* Image section - client rendered with optimizations */}
          <div className="w-full md:w-5/12 lg:w-1/2 max-w-xl mx-auto md:mx-0">
            <Suspense 
              fallback={
                <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100" />
              }
            >
              <MotionDiv 
                className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring",
                  damping: 25, 
                  stiffness: 100,
                  delay: 0.2
                }}
              >
                <SafeImage
                  src="/images/brightway-commercial-hallway.jpg"
                  alt="Brightway Commercial Hallway Cleaning"
                  fallbackText="Commercial Hallway Cleaning"
                  priority={true}
                  placement="above-fold"
                  quality={85}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 600px"
                />
              </MotionDiv>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
