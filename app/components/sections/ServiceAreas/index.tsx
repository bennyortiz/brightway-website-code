'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceAreaCard from './ServiceAreaCard';
import { serviceAreas } from './serviceAreasData';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

/**
 * ServiceAreas Component
 *
 * Displays a grid of service areas with animation effects.
 * Uses the IntersectionObserver API for scroll-based animations.
 */
const ServiceAreas = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Filter featured areas (to be displayed at the top if needed)
  const featuredAreas = serviceAreas.filter(area => area.isFeatured);
  const otherAreas = serviceAreas.filter(area => !area.isFeatured);

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
            Brightway Cleaning provides exceptional cleaning services across California. 
            Our team is strategically located to serve businesses in these key areas and beyond.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {serviceAreas.map((area, index) => (
            <div
              key={area.city}
              className="transform transition-all duration-700"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)' 
              }}
            >
              <ServiceAreaCard
                city={area.city}
                description={area.description}
                population={area.population}
                keyLocations={area.keyLocations}
                isFeatured={area.isFeatured}
              />
            </div>
          ))}
        </div>

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