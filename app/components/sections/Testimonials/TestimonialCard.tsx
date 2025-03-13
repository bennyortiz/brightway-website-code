import React from 'react';
import { TestimonialItem } from './testimonialsData';

/**
 * TestimonialCard Component
 *
 * Displays a single testimonial with a modern, sleek design
 * and visual appeal through gradient accents and subtle animations.
 *
 * @param {TestimonialItem} props - The testimonial data
 */
const TestimonialCard = ({ quote, author, position, company }: TestimonialItem) => {
  return (
    <div className="relative group h-full transition-all duration-300 ease-in-out">
      {/* Card container with hover effects */}
      <div className="bg-white rounded-2xl shadow-lg h-full p-8 flex flex-col relative z-10 
                    transition-all duration-300 
                    border border-gray-100 group-hover:border-primary/30
                    group-hover:shadow-xl group-hover:-translate-y-1">
        
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-primary/10 z-0"></div>
        <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-primary/5 z-0"></div>
        
        {/* Quote icon as a stylized element */}
        <div className="text-5xl leading-none text-primary/30 font-serif mb-2">"</div>
        
        {/* Testimonial content */}
        <div className="flex-grow flex flex-col">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{quote}</p>
          
          {/* Author info with modern styling */}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
            {/* Avatar placeholder circle with gradient */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center text-white font-bold text-lg">
              {author.charAt(0)}
            </div>
            
            <div className="ml-4">
              <h4 className="font-bold text-gray-900">{author}</h4>
              <p className="text-sm text-gray-500">{position} • {company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
