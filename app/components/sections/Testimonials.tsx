import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Brightway Cleaning has transformed our office space. Their attention to detail and consistent quality have made them an invaluable partner for our business.",
    author: "Sarah Johnson",
    position: "Office Manager",
    company: "Tech Solutions Inc."
  },
  {
    quote: "We've been using Brightway for our retail locations for over 5 years. Their reliability and professionalism are unmatched in the industry.",
    author: "Michael Chen",
    position: "Operations Director",
    company: "Retail Group International"
  },
  {
    quote: "The team at Brightway understands our unique needs as a medical facility. Their thorough sanitization protocols give us peace of mind.",
    author: "Dr. Emily Rodriguez",
    position: "Clinic Director",
    company: "Wellness Medical Center"
  }
]

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
          <div className="relative bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm">
            <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex flex-col">
                <span className="font-semibold">{testimonial.author}</span>
                <span className="text-gray-600">{testimonial.position}, {testimonial.company}</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 