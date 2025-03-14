'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { serviceItems } from '@/app/@lib/data/services';
import { Building2, Briefcase, Building, Droplets, Trash2, Clock } from 'lucide-react';
import { Grid, Column, Container, Section } from '../../ui/layout';

// Service icons mapping
const serviceIcons = [
  <Building2 key="building2" className="h-14 w-14 text-primary" />,
  <Briefcase key="briefcase" className="h-14 w-14 text-primary" />,
  <Building key="building" className="h-14 w-14 text-primary" />,
  <Droplets key="droplets" className="h-14 w-14 text-primary" />,
  <Trash2 key="trash2" className="h-14 w-14 text-primary" />,
  <Clock key="clock" className="h-14 w-14 text-primary" />,
];

// Remove fallback service data to avoid unnecessary code
// Always use the imported service items

/**
 * Services Section Component
 *
 * Displays a grid of service offerings with animation effects.
 * Optimized for faster loading and preventing layout shift.
 * Uses Grid and Column components for responsive layout.
 */
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true); // Start with visible state for above-fold content

  useEffect(() => {
    // Setup observer for animating on scroll
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
    <div id="services" ref={sectionRef}>
      <Section 
        className="py-16 md:py-24 bg-gray-50"
        withContainer={true}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive cleaning services for businesses of all sizes, with customized
            solutions tailored to your specific needs.
          </p>
        </div>

        <Grid 
          columns={{ default: 1, sm: 2, lg: 3 }} 
          gap={8}
          className="items-stretch"
        >
          {serviceItems.map((service, index) => (
            <Column key={index} className="flex h-full">
              <div
                className={`transform transition-all duration-500 w-full ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                }`}
                style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }} // Limit delay to 300ms maximum
              >
                <ServiceCard {...service} icon={serviceIcons[index % serviceIcons.length]} />
              </div>
            </Column>
          ))}
        </Grid>

        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
          >
            Get a Free Quote
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Services;
