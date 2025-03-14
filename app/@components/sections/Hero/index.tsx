'use client';

import React, { Suspense } from 'react';
import HeroContent from './HeroContent';
import SafeImage from '../../ui/safe-image';
import dynamic from 'next/dynamic';
import { Grid, Column } from '../../ui/layout';
import { Container } from '../../ui/layout';

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
 * Uses Grid and Column components for responsive layout
 * Image now automatically adjusts to match the content container height
 */
const Hero = () => {
  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-32 lg:pb-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <Container>
        <Grid columns={{ default: 1, md: 2 }} gap={8} className="items-center">
          {/* Critical content - server rendered */}
          <Column span={{ default: 'full', md: 6 }}>
            <Suspense fallback={null}>
              <HeroContent />
            </Suspense>
          </Column>

          {/* Image section - client rendered with optimizations */}
          <Column span={{ default: 'full', md: 6 }} className="mt-10 md:mt-0 flex justify-center md:justify-end">
            <Suspense 
              fallback={
                <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100" />
              }
            >
              <MotionDiv 
                className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl"
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
                  containerHeight={true}
                />
              </MotionDiv>
            </Suspense>
          </Column>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
