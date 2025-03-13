/**
 * Testimonials API Service
 * 
 * Provides functions for fetching testimonial data.
 * In a real-world application, this would make actual API calls
 * to a backend service rather than using static data.
 */

import { TestimonialItem, testimonials } from '@/app/@lib/data/testimonials';

/**
 * Fetches all testimonials
 * 
 * @returns Promise that resolves to an array of testimonial items
 */
export async function getTestimonials(): Promise<TestimonialItem[]> {
  // Simulating API request delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return testimonials;
}

/**
 * Fetches a single testimonial by index
 * 
 * @param index - The index of the testimonial to fetch
 * @returns Promise that resolves to a testimonial item or null if not found
 */
export async function getTestimonialByIndex(index: number): Promise<TestimonialItem | null> {
  // Simulating API request delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return testimonials[index] || null;
}

/**
 * Fetches featured testimonials
 * In a real API, this might be testimonials marked as featured
 * 
 * @param count - Number of testimonials to return (default: 3)
 * @returns Promise that resolves to an array of testimonial items
 */
export async function getFeaturedTestimonials(count: number = 3): Promise<TestimonialItem[]> {
  // Simulating API request delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Get a random selection of testimonials for featured display
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, Math.min(count, shuffled.length));
} 