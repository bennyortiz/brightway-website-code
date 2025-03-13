/**
 * Testimonial Service
 * 
 * Fetches testimonial data from a service or API with artificial delay
 * to simulate a real-world API request
 */

import { TestimonialItem } from '../components/sections/Testimonials/testimonialsData';

// Sample testimonial data that would normally come from a database or API
const testimonialData: TestimonialItem[] = [
  {
    quote:
      'Brightway Cleaning has transformed our office space. Their attention to detail and consistent quality have made them an invaluable partner for our business.',
    author: 'Sarah Johnson',
    position: 'Office Manager',
    company: 'Tech Solutions Inc.',
  },
  {
    quote:
      "We've been using Brightway for our retail locations for over 5 years. Their reliability and professionalism are unmatched in the industry.",
    author: 'Michael Chen',
    position: 'Operations Director',
    company: 'Retail Group International',
  },
  {
    quote:
      'The team at Brightway understands our unique needs as a medical facility. Their thorough sanitization protocols give us peace of mind.',
    author: 'Dr. Emily Rodriguez',
    position: 'Clinic Director',
    company: 'Wellness Medical Center',
  },
];

/**
 * Simulates fetching testimonials from an API
 * This is a server-side function that will be streamed with Suspense
 */
export async function getTestimonials(): Promise<TestimonialItem[]> {
  // Add artificial delay to simulate real API
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return testimonialData;
} 