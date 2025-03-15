import React from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialsCarouselContainer from './TestimonialsCarouselContainer';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 *
 * A more performant version of the testimonial list that uses a carousel
 * for better mobile experience and consistent card heights.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  return <TestimonialsCarouselContainer testimonials={testimonials} />;
};

export default OptimizedTestimonialList;
