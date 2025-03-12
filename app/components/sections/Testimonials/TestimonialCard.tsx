import React from 'react'
import { Quote } from 'lucide-react'
import { TestimonialItem } from './testimonialsData'

/**
 * TestimonialCard Component
 * 
 * Displays a single testimonial with quote, author, position, and company.
 * 
 * @param {TestimonialItem} props - The testimonial data
 */
const TestimonialCard = ({ quote, author, position, company }: TestimonialItem) => {
  return (
    <div className="relative bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm">
      <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />
      
      <div className="relative z-10">
        <p className="text-lg md:text-xl italic mb-6">
          "{quote}"
        </p>
        
        <div className="flex flex-col">
          <span className="font-semibold">{author}</span>
          <span className="text-gray-600">{position}, {company}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard 