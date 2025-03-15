'use client';

/**
 * Client Component to fetch testimonials and render them
 */

import { useEffect, useState } from 'react';
import TestimonialsCarouselContainer from './TestimonialsCarouselContainer';
import {
  testimonials as fallbackTestimonials,
  TestimonialItem,
} from '@/app/@lib/data/testimonials';
import { getTestimonials } from '@/app/@lib/api/services/testimonials';

export default function TestimonialList() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(fallbackTestimonials);
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch testimonials on the client side
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();

        setTestimonials(data);
      } catch (error) {
        // If there's an error fetching testimonials, keep using the fallback data
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return <TestimonialsCarouselContainer testimonials={testimonials} />;
}
