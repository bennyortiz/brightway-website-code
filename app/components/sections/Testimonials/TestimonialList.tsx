/**
 * Server Component to fetch and display testimonials
 * This component will be rendered on the server and streamed to the client
 */

import { getTestimonials } from '@/app/services/testimonialsService';
import TestimonialCard from './TestimonialCard';

export default async function TestimonialList() {
  // This fetch will be awaited on the server and the result streamed to the client
  const testimonials = await getTestimonials();
  
  return (
    <div className="space-y-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`${testimonial.author}-${index}`}
          quote={testimonial.quote}
          author={testimonial.author}
          position={testimonial.position}
          company={testimonial.company}
        />
      ))}
    </div>
  );
} 