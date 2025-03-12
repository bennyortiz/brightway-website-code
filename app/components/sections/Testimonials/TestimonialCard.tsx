import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from './testimonialsData';

/**
 * TestimonialCard Component
 *
 * Displays a single testimonial with quote, author, position, and company.
 * Enhanced visibility with stronger shadow and clearer styling.
 *
 * @param {TestimonialItem} props - The testimonial data
 */
const TestimonialCard = ({ quote, author, position, company }: TestimonialItem) => {
  return (
    <div className="relative bg-white p-8 md:p-10 rounded-lg shadow-lg border-2 border-gray-100 h-full flex flex-col transition-all hover:shadow-xl hover:border-primary/20">
      <Quote className="h-8 w-8 text-primary absolute top-6 right-6" />

      <div className="relative z-10 flex flex-col h-full">
        <p className="text-base md:text-lg italic text-gray-700 mb-6 flex-grow font-medium">"{quote}"</p>

        <div className="flex flex-col mt-auto pt-4 border-t border-gray-200">
          <span className="font-bold text-gray-900 text-lg">{author}</span>
          <span className="text-gray-600 text-sm">
            {position}, {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
