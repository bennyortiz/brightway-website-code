'use client';

import React, { Suspense } from 'react';
import HeroContent from './HeroContent';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import motion components to reduce initial bundle size
const MotionDiv = dynamic(
  () =>
    import('framer-motion').then((mod) => ({
      default: mod.motion.div,
    })),
  { ssr: false, loading: () => <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100" /> }
);

/**
 * Hero Section Component
 *
 * The main hero section displayed at the top of the homepage.
 * Optimized for better LCP and overall performance by:
 * 1. Server-rendering critical content
 * 2. Lazy-loading non-critical components
 * 3. Using direct Next.js Image component with proper optimization settings
 */
const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center pt-16 md:pt-0 relative overflow-hidden">
      <div className="container mx-auto px-4 py-14 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Critical content - server rendered */}
          <Suspense fallback={null}>
            <HeroContent />
          </Suspense>

          {/* Image section - high performance implementation */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '400px', minWidth: '400px' }}>
              <Image 
                src="/images/brightway-commercial-hallway.jpg"
                alt="Brightway Commercial Hallway Cleaning"
                fill
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
