import React from 'react'
import TestimonialCard from './TestimonialCard'
import { testimonials } from './testimonialsData'

/**
 * Testimonials Section Component
 * 
 * Displays client testimonials in a clean, focused layout.
 * Currently shows only the first testimonial to avoid client/server mismatches.
 */
const Testimonials = () => {
  // Display only the first testimonial to avoid client/server mismatches
  const testimonial = testimonials[0]

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials 