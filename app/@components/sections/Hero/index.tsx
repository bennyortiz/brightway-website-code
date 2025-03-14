'use client';

import React, { Suspense } from 'react';
import HeroContent from './HeroContent';
import SafeImage from '../../ui/safe-image';
import { Grid, Column, Container } from '../../ui/layout';
import { motion } from 'framer-motion';

/**
 * Hero Section Component
 *
 * The main hero section displayed at the top of the homepage.
 * Optimized for better LCP and overall performance by:
 * 1. Server-rendering critical content
 * 2. Preloading critical assets
 * 3. Optimizing image loading strategy
 * 4. Reducing initial JavaScript bundle size
 * 
 * Uses Grid and Column components for responsive layout
 * Image automatically adjusts to match the content container height
 */
const Hero = () => {
  return (
    <section className="w-full pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-32 lg:pb-40 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
      <Container>
        <Grid columns={{ default: 1, md: 2 }} gap={8} className="items-center">
          {/* Critical content - loaded first */}
          <Column span={{ default: 'full', md: 6 }}>
            <HeroContent />
          </Column>

          {/* Image section - optimized for fast loading */}
          <Column span={{ default: 'full', md: 6 }} className="mt-10 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <SafeImage
                src="/images/brightway-commercial-hallway.jpg"
                alt="Brightway Commercial Hallway Cleaning"
                fallbackText="Commercial Hallway Cleaning"
                priority={true}
                placement="hero"
                quality={85}
                className="w-full h-full object-cover transition-opacity duration-300"
                containerHeight={true}
              />
            </div>
          </Column>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
