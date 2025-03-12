import { testimonials } from '@/app/content/testimonialsInfo';

/**
 * Testimonial Item Interface
 */
export interface TestimonialItem {
  quote: string
  author: string
  position: string
  company: string
}

/**
 * Testimonials Data
 * 
 * Contains testimonial quotes from clients with their details.
 * Used in the Testimonials section to display client feedback.
 */
export const testimonialItems = testimonials; 