'use client';

import React from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialsCarousel from './TestimonialsCarousel';

interface TestimonialsCarouselContainerProps {
  testimonials: TestimonialItem[];
}

/**
 * Client component that receives testimonials data from server component
 * and renders the carousel with enhanced visual styling
 */
const TestimonialsCarouselContainer: React.FC<TestimonialsCarouselContainerProps> = ({ 
  testimonials 
}) => {
  // No initialization needed

  // If no testimonials are provided, render placeholder
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">No testimonials available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full relative z-10">
      {/* Visual enhancement for carousel container */}
      <div className="absolute inset-0 bg-primary/5 -z-10 rounded-3xl transform -rotate-1 scale-105 opacity-70"></div>
      
      {/* Carousel content */}
      <div className="relative py-4">
        <TestimonialsCarousel testimonials={testimonials} cardStyle="transparent" />
      </div>
    </div>
  );
};

export default TestimonialsCarouselContainer;
