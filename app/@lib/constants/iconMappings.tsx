import React from 'react';
import {
  Building2,
  Briefcase,
  Building,
  Droplets,
  Trash2,
  Clock,
  Shield,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

type IconProps = {
  className?: string;
};

/**
 * Service icon mapping - maps service titles to their corresponding icons
 * Used across the application to ensure consistent icon usage
 */
export const serviceIcons: Record<string, LucideIcon> = {
  'Office Cleaning': Briefcase,
  'Commercial Spaces': Building2,
  'Industrial Cleaning': Building,
  'Sanitization Services': Droplets,
  'Waste Management': Trash2,
  'Scheduled Maintenance': Clock,
};

/**
 * Gets the appropriate icon component for a service
 * @param title - The title of the service
 * @param className - Optional class name to apply to the icon
 * @returns React component with the icon
 */
export const getServiceIcon = (title: string, className = 'w-10 h-10 text-primary'): JSX.Element => {
  const IconComponent = serviceIcons[title] || Briefcase;
  return <IconComponent className={className} />;
};

/**
 * Feature icons mapping - maps feature types to their corresponding icons
 */
export const featureIcons: Record<string, LucideIcon> = {
  check: CheckCircle2,
  time: Clock,
  shield: Shield,
  sparkle: Sparkles,
  message: MessageSquare,
};

/**
 * Gets the appropriate feature icon component
 * @param type - The type of feature icon
 * @param className - Optional class name to apply to the icon
 * @returns React component with the icon
 */
export const getFeatureIcon = (type: string, className = 'w-5 h-5 text-primary'): JSX.Element => {
  const IconComponent = featureIcons[type] || CheckCircle2;
  return <IconComponent className={className} />;
}; 