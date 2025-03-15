'use client';

import React from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialsCarouselContainerProps {
  testimonials: TestimonialItem[];
}

/**
 * Client component that receives testimonials data from server component
 * and renders the carousel with enhanced visual styling
 */
const TestimonialsCarouselContainer: React.FC<TestimonialsCarouselContainerProps> = ({
  testimonials,
}) => {
  // If no testimonials are provided, render placeholder
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">No testimonials available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Carousel content */}
      <div className="py-4">
        <TestimonialCarousel testimonials={testimonials} transparent={false} />
      </div>
    </div>
  );
};

export default TestimonialsCarouselContainer;
