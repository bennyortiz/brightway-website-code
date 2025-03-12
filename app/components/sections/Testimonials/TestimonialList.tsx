/**
 * Server Component to fetch testimonials and pass data to client component
 */

import { getTestimonials } from '@/app/services/testimonialsService';
import TestimonialsCarouselContainer from './TestimonialsCarouselContainer';

export default async function TestimonialList() {
  // This fetch will be awaited on the server
  const testimonials = await getTestimonials();
  
  // Return the client component with data
  return <TestimonialsCarouselContainer testimonials={testimonials} />;
} 