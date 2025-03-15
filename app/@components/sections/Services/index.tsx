'use client';

import React from 'react';
import { serviceItems } from '@/app/@lib/data/services';
import ServiceList from './ServiceList';

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
 * Uses the ServiceList component for consistent display.
 */
const Services = () => {
  // Use service data if available, otherwise use fallback
  const services = serviceItems || fallbackServiceItems;
  
  return (
    <div id="services">
      <ServiceList 
        services={services}
        title="Our Services"
        description="We provide comprehensive cleaning services for businesses of all sizes, with customized solutions tailored to your specific needs."
        showCta={true}
        ctaText="View All Services"
        ctaHref="/services"
      />
    </div>
  );
};

export default Services;
