'use client';

import React, { useEffect } from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 * 
 * A carousel implementation for testimonials that shows:
 * - 3 cards per slide on desktop
 * - 1 card per slide on mobile devices
 * 
 * Uses react-slick for the carousel functionality with custom styling and navigation.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  // Configure slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    className: "testimonial-carousel"
  };

  // Custom styles for the carousel
  useEffect(() => {
    // Add custom styles for carousel navigation
    const style = document.createElement('style');
    style.innerHTML = `
      .testimonial-carousel .slick-track {
        display: flex !important;
      }
      .testimonial-carousel .slick-slide {
        height: inherit !important;
        display: flex !important;
      }
      .testimonial-carousel .slick-slide > div {
        display: flex;
        flex: 1;
        height: 100%;
      }
      .testimonial-carousel .slick-dots li button:before {
        color: #0070f3;
      }
      .testimonial-carousel .slick-dots li.slick-active button:before {
        color: #0070f3;
        opacity: 1;
      }
      .testimonial-carousel .slick-prev, 
      .testimonial-carousel .slick-next {
        z-index: 1;
        width: 40px;
        height: 40px;
      }
      .testimonial-carousel .slick-prev {
        left: -5px;
      }
      .testimonial-carousel .slick-next {
        right: -5px;
      }
      .testimonial-carousel .slick-prev:before,
      .testimonial-carousel .slick-next:before {
        color: #0070f3;
        font-size: 24px;
      }
      @media (max-width: 768px) {
        .testimonial-carousel .slick-dots {
          bottom: -35px;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="testimonials-carousel-wrapper py-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="h-full">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OptimizedTestimonialList; 