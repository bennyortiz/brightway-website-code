'use client';

import React from 'react';
import HeroRating from './HeroRating';
import { PrimaryButton, OutlineButton } from '../../ui/buttons';
import HeroText from './HeroText';

/**
 * HeroContent Component
 *
 * Displays the main content of the Hero section, including:
 * - Text content
 * - Rating
 * - Call-to-action buttons
 * 
 * Optimized for better LCP performance by:
 * 1. Loading critical content directly without dynamic imports
 * 2. Removing unnecessary animations
 * 3. Reducing bundle size
 */
const HeroContent = () => {
  return (
    <div>
      {/* Critical text content */}
      <HeroText />

      {/* Interactive elements */}
      <div className="mt-6 space-y-6">
        <div>
          <HeroRating />
        </div>

        <div className="pt-2 md:pt-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <PrimaryButton href="#contact" className="w-full sm:w-auto">Get a Free Quote</PrimaryButton>
            <OutlineButton href="#services" withArrow className="w-full sm:w-auto">
              Explore Services
            </OutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
