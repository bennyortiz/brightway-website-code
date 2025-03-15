'use client';

import React from 'react';
import Link from 'next/link';
import { Service } from '@/app/@lib/types';
import { getServiceIcon } from '@/app/@lib/constants';
import { useStaggeredAnimation } from '@/app/@lib/hooks';
import ServiceCard from './ServiceCard';

export interface ServiceListProps {
  services: Service[];
  title?: string;
  description?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaHref?: string;
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * ServiceList Component
 *
 * A reusable component for displaying a grid of services
 * with consistent styling and animations
 */
const ServiceList: React.FC<ServiceListProps> = ({
  services,
  title = 'Our Services',
  description = 'We provide comprehensive cleaning services for businesses of all sizes, with customized solutions tailored to your specific needs.',
  showCta = true,
  ctaText = 'Get a Free Quote',
  ctaHref = '/contact',
  columns = 3,
  className = '',
}) => {
  const [sectionRef, visibleItems] = useStaggeredAnimation<HTMLDivElement>(services.length);

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section ref={sectionRef} className={`w-full py-16 md:py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <>
                <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">
                  Services
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
              </>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transform transition-all duration-700 ${
                visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                service={{
                  ...service,
                  icon: getServiceIcon(service.title, 'h-14 w-14 text-primary'),
                }}
                _index={index}
              />
            </div>
          ))}
        </div>

        {showCta && (
          <div className="mt-16 text-center">
            <Link
              href={ctaHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceList; 