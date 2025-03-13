'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, Globe, ArrowRight } from 'lucide-react';
import InteractiveMapContainer from './InteractiveMapContainer';

/**
 * ServiceAreas Component
 *
 * Displays an interactive map of DFW metroplex service areas
 * Replaces the previous static grid of service area cards with a more
 * engaging and user-friendly interactive map experience
 */
const ServiceAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="service-areas" ref={sectionRef} className="w-full py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">Areas We Service</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our interactive map to see our service coverage throughout the 
            DFW metroplex. Click on any area to learn more about our services in that location.
          </p>
        </div>

        {/* Interactive Map Container */}
        <div 
          className={`transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <InteractiveMapContainer />
        </div>

        {/* Contact Info */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="p-4 bg-white rounded-xl shadow-md flex items-center max-w-md">
            <Globe className="h-8 w-8 text-primary flex-shrink-0 mr-4" />
            <p className="text-gray-700">
              <span className="font-medium">Don't see your area?</span> We likely service your location too! 
              Contact us to confirm availability in your specific area.
            </p>
          </div>
          
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 group"
          >
            <span>Check Your Area</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas; 