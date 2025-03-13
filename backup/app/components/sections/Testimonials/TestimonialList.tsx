'use client';

/**
 * Client Component to fetch testimonials and render them
 */

import { useEffect, useState } from 'react';
import TestimonialsCarouselContainer from './TestimonialsCarouselContainer';
import { testimonials as fallbackTestimonials, TestimonialItem } from './testimonialsData';

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(fallbackTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials on the client side
    const fetchTestimonials = async () => {
      try {
        // Import the service dynamically to avoid bundling issues
        const { getTestimonials } = await import('@/app/services/testimonialsService');
        const data = await getTestimonials();
        
        // Log testimonials for debugging
        console.log("Fetched testimonials:", data.length);
        setTestimonials(data);
      } catch (error) {
        // If there's an error fetching testimonials, keep using the fallback data
        console.error("Error fetching testimonials:", error);
        console.log("Using fallback testimonials:", fallbackTestimonials.length);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return <TestimonialsCarouselContainer testimonials={testimonials} />;
} 