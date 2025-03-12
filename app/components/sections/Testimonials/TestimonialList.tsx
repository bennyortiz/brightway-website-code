/**
 * Server Component to fetch testimonials and pass data to client component
 */

import { getTestimonials } from '@/app/services/testimonialsService';
import TestimonialsCarouselContainer from './TestimonialsCarouselContainer';
import { testimonials as fallbackTestimonials } from './testimonialsData';

export default async function TestimonialList() {
  try {
    // This fetch will be awaited on the server
    const testimonials = await getTestimonials();
    
    // Log testimonials for debugging
    console.log("Fetched testimonials:", testimonials.length);
    
    // Return the client component with data
    return <TestimonialsCarouselContainer testimonials={testimonials} />;
  } catch (error) {
    // If there's an error fetching testimonials, use the fallback data
    console.error("Error fetching testimonials:", error);
    console.log("Using fallback testimonials:", fallbackTestimonials.length);
    
    // Return the client component with fallback data
    return <TestimonialsCarouselContainer testimonials={fallbackTestimonials} />;
  }
} 