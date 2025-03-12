import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from './testimonialsData';

/**
 * TestimonialCard Component
 *
 * Displays a single testimonial with quote, author, position, and company.
 * Has consistent height for better display in carousel.
 *
 * @param {TestimonialItem} props - The testimonial data
 */
const TestimonialCard = ({ quote, author, position, company }: TestimonialItem) => {
  return (
    <div className="relative bg-gray-50 p-8 md:p-10 rounded-lg shadow-sm h-full flex flex-col">
      <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />

      <div className="relative z-10">
        <p className="text-base md:text-lg italic mb-6 flex-grow">"{quote}"</p>

        <div className="flex flex-col mt-auto pt-4 border-t border-gray-200">
          <span className="font-semibold">{author}</span>
          <span className="text-gray-600 text-sm">
            {position}, {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
