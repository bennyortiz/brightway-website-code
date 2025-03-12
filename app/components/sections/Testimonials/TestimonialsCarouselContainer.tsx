'use client';

import React from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialsCarouselContainerProps {
  testimonials: TestimonialItem[];
}

/**
 * Client component that receives testimonials data from server component
 * and renders the carousel
 */
const TestimonialsCarouselContainer: React.FC<TestimonialsCarouselContainerProps> = ({ 
  testimonials 
}) => {
  return <TestimonialCarousel testimonials={testimonials} />;
};

export default TestimonialsCarouselContainer; 