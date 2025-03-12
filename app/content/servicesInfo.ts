/**
 * SERVICES INFORMATION
 * 
 * This file contains all information about the services offered.
 * Edit this file to update service details across the entire site.
 */

import { Building2, Briefcase, Building, Droplets, Trash2, Clock } from 'lucide-react';

export const services = [
  {
    id: 'office-cleaning',
    name: 'Office Cleaning',
    icon: Building2,
    description: 'Professional office cleaning tailored to your business needs.',
    shortDescription: 'Professional office cleaning tailored to your business needs.',
    features: [
      'Regular schedule options (daily, weekly, bi-weekly)',
      'Thorough dusting and vacuuming',
      'Restroom sanitization',
      'Kitchen and break room cleaning',
      'Trash removal and recycling',
    ],
  },
  {
    id: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    icon: Briefcase,
    description: 'Comprehensive commercial cleaning solutions for all business types.',
    shortDescription: 'Comprehensive commercial cleaning solutions for all business types.',
    features: [
      'Customized cleaning programs',
      'Common area maintenance',
      'Floor care (carpet, tile, hardwood)',
      'Window cleaning',
      'High dusting',
    ],
  },
  {
    id: 'sanitization-services',
    name: 'Sanitization Services',
    icon: Droplets,
    description: 'Deep sanitization services to ensure a healthy environment.',
    shortDescription: 'Deep sanitization services to ensure a healthy environment.',
    features: [
      'EPA-approved disinfection',
      'High-touch surface treatment',
      'Electrostatic spraying',
      'Air quality improvement',
      'Antimicrobial treatments',
    ],
  },
];

// Primary services highlighted on the homepage
export const featuredServices = [
  'office-cleaning',
  'commercial-cleaning',
  'sanitization-services',
]; 