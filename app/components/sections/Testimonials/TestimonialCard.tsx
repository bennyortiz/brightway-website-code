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
    <div className="relative bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-100 h-full flex flex-col">
      <Quote className="h-10 w-10 text-primary/30 absolute top-6 right-6" />

      <div className="relative z-10 flex flex-col h-full">
        <p className="text-base md:text-lg italic text-gray-700 mb-6 flex-grow">"{quote}"</p>

        <div className="flex flex-col mt-auto pt-4 border-t border-gray-200">
          <span className="font-semibold text-gray-900">{author}</span>
          <span className="text-gray-600 text-sm">
            {position}, {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
