'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import type { Service } from '@/app/@lib/types';
import { Card } from '@/app/@components/ui/cards';

/**
 * ServiceCard component props that use the central Service interface
 */
interface ServiceCardProps {
  service: Service & { icon: React.ReactNode };
  _index: number;
}

/**
 * ServiceCard Component
 *
 * Displays a service offering with icon, title, description, and features
 * Uses the reusable Card component with animation effects
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ service, _index }) => {
  return (
    <Card
      title={service.title}
      description={service.description}
      icon={service.icon}
      features={service.features}
      featureIcon={<CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />}
      animated={true}
      variant="default"
      className="h-full"
    />
  );
};

export default ServiceCard;
