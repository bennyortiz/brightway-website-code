'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Service } from '@/app/@lib/types';
import { getServiceIcon } from '@/app/@lib/constants';
import { useIntersectionObserver } from '@/app/@lib/hooks';

export interface ServiceDetailsProps {
  service: Service;
  isReversed?: boolean;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
  imageAlt?: string;
  imageSrc?: string;
}

/**
 * ServiceDetails Component
 *
 * Displays detailed information about a service with image and features
 * Used on service pages for in-depth service descriptions
 */
const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  service,
  isReversed = false,
  ctaText = 'Request This Service',
  ctaHref = '/contact',
  className = '',
  imageAlt,
  imageSrc,
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
  
  // Create ID-safe slug
  const slug = service.title.toLowerCase().replace(/\s+/g, '-');
  
  // Determine image source
  const imgSrc = imageSrc || `/images/services/${slug}.jpg`;
  const imgAlt = imageAlt || service.title;

  return (
    <div 
      ref={ref} 
      id={slug} 
      className={`scroll-mt-24 transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${className}`}
    >
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
        <div className="lg:w-1/2">
          <div className="mb-4 inline-block">
            {getServiceIcon(service.title, 'w-16 h-16 text-primary')}
          </div>
          <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{service.description}</p>
          
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div 
                key={i} 
                className={`flex items-start transform transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link 
              href={ctaHref} 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90"
            >
              {ctaText}
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative rounded-lg overflow-hidden aspect-video w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails; 