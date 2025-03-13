'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { serviceItems } from '@/app/@lib/data/services';
import { Icon } from '@/app/@lib/utils/icons';
import SectionContainer from '../../ui/layout/SectionContainer';
import ResponsiveGrid from '../../ui/layout/ResponsiveGrid';
import { SectionHeading, SectionSubheading } from '../../ui/typography';

/**
 * Services Section Component
 *
 * Displays a grid of service offerings with animation effects.
 * Uses the IntersectionObserver API for scroll-based animations.
 * 
 * Enhanced with standardized responsive components:
 * - SectionContainer for consistent padding and layout
 * - ResponsiveGrid for adaptive column management
 * - Typography components for consistent text sizing
 */
const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Service icons using our optimized Icon component
  const serviceIcons = [
    <Icon key="building2" name="Building2" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
    <Icon key="briefcase" name="Briefcase" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
    <Icon key="building" name="Building" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
    <Icon key="droplets" name="Droplets" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
    <Icon key="trash2" name="Trash2" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
    <Icon key="clock" name="Clock" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-primary" />,
  ];

  // Fallback service data in case the import fails
  const fallbackServiceItems = [
    {
      title: 'Office Cleaning',
      description: 'Comprehensive cleaning solutions for offices of all sizes.',
      features: ['Daily sanitization', 'Carpet cleaning', 'Restroom maintenance'],
    },
  ];

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
    <SectionContainer id="services" outerClassName="bg-gray-50" ref={sectionRef}>
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <SectionHeading>Our Services</SectionHeading>
        <SectionSubheading className="max-w-3xl mx-auto mt-4">
          We provide comprehensive cleaning services for businesses of all sizes, with customized
          solutions tailored to your specific needs.
        </SectionSubheading>
      </div>

      <ResponsiveGrid 
        columns={{ default: 1, sm: 2, lg: 3 }}
        gap={{ default: 6, md: 8 }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ServiceCard {...service} icon={serviceIcons[index % serviceIcons.length]} />
          </div>
        ))}
      </ResponsiveGrid>

      <div className="mt-12 sm:mt-14 md:mt-16 text-center">
        <Link
          href="#contact"
          className="inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
        >
          Get a Free Quote
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Services;
