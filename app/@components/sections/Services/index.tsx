'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { serviceItems } from '@/app/@lib/data/services';
import { Building2, Briefcase, Building, Droplets, Trash2, Clock } from 'lucide-react';

// Service icons mapping
const serviceIcons = [
  <Building2 key="building2" className="h-14 w-14 text-primary" />,
  <Briefcase key="briefcase" className="h-14 w-14 text-primary" />,
  <Building key="building" className="h-14 w-14 text-primary" />,
  <Droplets key="droplets" className="h-14 w-14 text-primary" />,
  <Trash2 key="trash2" className="h-14 w-14 text-primary" />,
  <Clock key="clock" className="h-14 w-14 text-primary" />,
];

// Fallback service data in case the import fails
const fallbackServiceItems = [
  {
    title: 'Office Cleaning',
    description: 'Comprehensive cleaning solutions for offices of all sizes.',
    features: ['Daily sanitization', 'Carpet cleaning', 'Restroom maintenance'],
  },
];

/**
 * Services Section Component
 *
 * Displays a grid of service offerings with animation effects.
 * Uses the IntersectionObserver API for scroll-based animations.
 */
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use service data if available, otherwise use fallback
  const services = serviceItems || fallbackServiceItems;

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
    <section id="services" ref={sectionRef} className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive cleaning services for businesses of all sizes, with customized
            solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard 
                service={{
                  ...service,
                  icon: serviceIcons[index % serviceIcons.length]
                }} 
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
