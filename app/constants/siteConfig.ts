// Central location for all site-specific information
import { businessInfo } from '../content/businessInfo';

export const siteConfig = {
  // Basic site info
  name: businessInfo.name,
  tagline: businessInfo.tagline,
  description: businessInfo.description,
  url: 'https://brightway-cleaning.com',
  ogImage: 'https://brightway-cleaning.com/og.svg',
  
  // Business information
  business: {
    legalName: businessInfo.legalName,
    startYear: businessInfo.yearEstablished,
    employeeCount: businessInfo.stats.employeeCount,
    servicesCount: businessInfo.stats.servicesCount,
    clientsServed: businessInfo.stats.clientsServed,
    satisfaction: businessInfo.stats.satisfaction,
  },
  
  // Contact information
  contact: {
    phone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      street: businessInfo.location.address,
      city: businessInfo.location.city,
      state: businessInfo.location.state,
      zip: '',
      country: 'USA',
      full: businessInfo.location.fullAddress,
      maps: businessInfo.location.googleMapsUrl
    },
    hours: businessInfo.hours,
    coordinates: businessInfo.location.coordinates
  },
  
  // Social media links
  social: {
    twitter: businessInfo.social.twitter,
    facebook: businessInfo.social.facebook,
    instagram: businessInfo.social.instagram,
    linkedin: businessInfo.social.linkedin,
    // Social handles without URLs (for Schema.org)
    handles: {
      twitter: '@brightwaycleaningco',
      facebook: 'brightwaycleaningco',
      instagram: '@brightwaycleaningco',
    }
  },
  
  // SEO and metadata
  seo: {
    keywords: [
      'cleaning services',
      'commercial cleaning',
      'office cleaning',
      'professional cleaning',
      'janitorial services',
      'sanitization services',
      'workplace cleaning',
      'DFW cleaning services',
      'Bedford cleaning company',
    ],
    locale: 'en_US',
    type: 'ProfessionalService', // Schema.org type
    alternateLocales: [], // For multilingual sites
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    verification: {
      google: 'google-site-verification-code', // Replace with actual code
      bing: '', // Replace with actual code if needed
      yandex: '', // Replace with actual code if needed
    },
    robotsContent: 'index, follow',
    // Common regions/cities served - used for local SEO
    serviceAreas: businessInfo.serviceAreas,
    businessType: 'Commercial Cleaning Service',
    businessCategory: 'Professional Services', 
    yearEstablished: businessInfo.yearEstablished,
  },

  // Service types (used for displaying service cards only)
  serviceTypes: [
    {
      id: 'office-cleaning',
      name: 'Office Cleaning',
      shortDescription: 'Professional office cleaning tailored to your business needs.',
    },
    {
      id: 'commercial-cleaning',
      name: 'Commercial Cleaning',
      shortDescription: 'Comprehensive commercial cleaning solutions for all business types.',
    },
    {
      id: 'sanitization-services',
      name: 'Sanitization Services',
      shortDescription: 'Deep sanitization services to ensure a healthy environment.',
    }
  ],
}; 