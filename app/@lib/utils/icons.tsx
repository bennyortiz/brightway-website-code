/**
 * Icon Utilities
 *
 * Centralized icon system with consistent mapping and component generation
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Define type for any lucide icon
export type LucideIcon = React.ForwardRefExoticComponent<
  LucideProps & React.RefAttributes<SVGSVGElement>
>;

// Type for valid Lucide icon names
export type IconName = keyof typeof LucideIcons;

// Icon component 
export function Icon({
  name,
  className,
  ...props
}: {
  name: IconName;
  className?: string;
} & Omit<LucideProps, 'ref'>) {
  // Type cast to ensure IconComponent is a valid component
  const IconComponent = LucideIcons[name] as React.ComponentType<LucideProps>;
  return <IconComponent className={className} {...props} />;
}

/**
 * Service icon mapping - maps service titles to their corresponding icons
 * Used across the application to ensure consistent icon usage
 */
export const serviceIcons: Record<string, IconName> = {
  'Office Cleaning': 'Briefcase',
  'Commercial Spaces': 'Building2',
  'Industrial Cleaning': 'Building',
  'Sanitization Services': 'Droplets',
  'Waste Management': 'Trash2',
  'Scheduled Maintenance': 'Clock',
};

/**
 * Gets the appropriate icon component for a service
 * @param title - The title of the service
 * @param className - Optional class name to apply to the icon
 * @returns React component with the icon
 */
export const getServiceIcon = (title: string, className = 'w-10 h-10 text-primary'): JSX.Element => {
  const iconName = serviceIcons[title] || 'Briefcase';
  return <Icon name={iconName} className={className} />;
};

/**
 * Feature icons mapping - maps feature types to their corresponding icons
 */
export const featureIcons: Record<string, IconName> = {
  check: 'CheckCircle2',
  time: 'Clock',
  shield: 'Shield',
  sparkle: 'Sparkles',
  message: 'MessageSquare',
};

/**
 * Gets the appropriate feature icon component
 * @param type - The type of feature icon
 * @param className - Optional class name to apply to the icon
 * @returns React component with the icon
 */
export const getFeatureIcon = (type: string, className = 'w-5 h-5 text-primary'): JSX.Element => {
  const iconName = featureIcons[type] || 'CheckCircle2';
  return <Icon name={iconName} className={className} />;
};
