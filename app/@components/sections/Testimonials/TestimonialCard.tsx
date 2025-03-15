import React from 'react';
import { TestimonialItem } from './testimonialsData';

/**
 * TestimonialCard Component
 *
 * Displays a single testimonial with a modern, sleek design
 * and visual appeal through gradient accents and subtle animations.
 * 
 * Accessibility improved with proper semantic structure.
 *
 * @param {TestimonialItem} props - The testimonial data
 */
const TestimonialCard = ({ 
  quote, 
  author, 
  position, 
  company, 
  transparent = false 
}: TestimonialItem & { transparent?: boolean }) => {
  return (
    <div className={`${transparent ? 'bg-transparent' : 'bg-white'} rounded-2xl shadow-lg h-full p-8 flex flex-col relative 
                  transition-all duration-300 
                  border border-gray-100 hover:border-primary/30
                  hover:shadow-xl hover:translate-y-[-4px]`}>
      
      {/* Quote icon as a stylized element */}
      <div className="text-5xl leading-none text-primary/30 font-serif mb-2" aria-hidden="true">"</div>
      
      {/* Testimonial content */}
      <div className="flex-grow flex flex-col">
        <blockquote>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">{quote}</p>
        </blockquote>
        
        {/* Author info with modern styling - using proper semantic elements */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
          {/* Avatar placeholder circle with gradient */}
          <div 
            className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center text-white font-bold text-lg"
            aria-hidden="true"
          >
            {author.charAt(0)}
          </div>
          
          <div className="ml-4">
            <p className="font-bold text-gray-900" aria-label="Testimonial by">{author}</p>
            <p className="text-sm text-gray-500">{position} • {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
