/**
 * Icon Utilities
 * 
 * Optimized icon system that uses dynamic imports to reduce bundle size
 * Only the icons that are actually used are included in the JS bundle
 */

import React from 'react';
import dynamic from 'next/dynamic';
import type { LucideProps } from 'lucide-react';

// Define type for any lucide icon
export type LucideIcon = React.ForwardRefExoticComponent<
  LucideProps & React.RefAttributes<SVGSVGElement>
>;

// Dynamic imports for all used icons
export const iconComponents = {
  // Base UI icons
  ArrowRight: dynamic(() => import('lucide-react/dist/esm/icons/arrow-right')),
  ChevronLeft: dynamic(() => import('lucide-react/dist/esm/icons/chevron-left')),
  ChevronRight: dynamic(() => import('lucide-react/dist/esm/icons/chevron-right')),
  
  // Contact/Location icons
  Mail: dynamic(() => import('lucide-react/dist/esm/icons/mail')),
  Phone: dynamic(() => import('lucide-react/dist/esm/icons/phone')),
  MapPin: dynamic(() => import('lucide-react/dist/esm/icons/map-pin')),
  Clock: dynamic(() => import('lucide-react/dist/esm/icons/clock')),
  
  // Social icons
  Facebook: dynamic(() => import('lucide-react/dist/esm/icons/facebook')),
  Twitter: dynamic(() => import('lucide-react/dist/esm/icons/twitter')),
  Instagram: dynamic(() => import('lucide-react/dist/esm/icons/instagram')),
  Linkedin: dynamic(() => import('lucide-react/dist/esm/icons/linkedin')),
  
  // Service/Feature icons
  CheckCircle: dynamic(() => import('lucide-react/dist/esm/icons/check-circle')),
  CheckCircle2: dynamic(() => import('lucide-react/dist/esm/icons/check-circle-2')),
  Shield: dynamic(() => import('lucide-react/dist/esm/icons/shield')),
  ThumbsUp: dynamic(() => import('lucide-react/dist/esm/icons/thumbs-up')),
  Award: dynamic(() => import('lucide-react/dist/esm/icons/award')),
  BadgeCheck: dynamic(() => import('lucide-react/dist/esm/icons/badge-check')),
  Building: dynamic(() => import('lucide-react/dist/esm/icons/building')),
  Building2: dynamic(() => import('lucide-react/dist/esm/icons/building-2')),
  Sparkles: dynamic(() => import('lucide-react/dist/esm/icons/sparkles')),
  Briefcase: dynamic(() => import('lucide-react/dist/esm/icons/briefcase')),
  Droplets: dynamic(() => import('lucide-react/dist/esm/icons/droplets')),
  Trash2: dynamic(() => import('lucide-react/dist/esm/icons/trash-2')),
  Users: dynamic(() => import('lucide-react/dist/esm/icons/users')),
};

// Type for icon names
export type IconName = keyof typeof iconComponents;

// Icon component with optimized loading
export function Icon({ 
  name, 
  className,
  ...props 
}: { 
  name: IconName; 
  className?: string;
} & Omit<LucideProps, 'ref'>) {
  const IconComponent = iconComponents[name] as React.ComponentType<LucideProps>;
  return <IconComponent className={className} {...props} />;
} 