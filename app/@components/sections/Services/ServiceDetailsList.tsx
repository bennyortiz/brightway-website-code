'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/app/@lib/types';
import ServiceDetails from './ServiceDetails';

export interface ServiceDetailsListProps {
  services: Service[];
  title?: string;
  description?: string;
  showNavLinks?: boolean;
  className?: string;
}

/**
 * ServiceDetailsList Component
 *
 * Displays detailed information about multiple services with optional
 * navigation links at the top for quick access
 */
const ServiceDetailsList: React.FC<ServiceDetailsListProps> = ({
  services,
  title,
  description,
  showNavLinks = true,
  className = '',
}) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {title && (
        <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      )}
      
      {description && (
        <p className="text-xl text-gray-600 mb-8 text-center max-w-4xl mx-auto">
          {description}
        </p>
      )}

      {showNavLinks && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map(service => {
            // Create ID-safe slug
            const slug = service.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <Link
                key={service.title}
                href={`#${slug}`}
                className="px-4 py-2 rounded-full border border-gray-200 hover:border-primary transition-colors"
              >
                {service.title}
              </Link>
            );
          })}
        </div>
      )}

      <div className="mt-16 space-y-24">
        {services.map((service, index) => (
          <ServiceDetails
            key={service.title}
            service={service}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsList; 