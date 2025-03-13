/**
 * SITE CONFIGURATION
 *
 * This is the central location for all business information and site settings.
 * Update this file to change your contact details, business information, and site metadata.
 *
 * === HOW TO EDIT ===
 * Simply update the values below while maintaining the structure.
 * For example, to change your phone number, find the 'phone' section and update the 'display' value.
 */

// Central location for all site-specific information
export const siteConfig = {
  // =========================================================================
  // BASIC SITE INFO (Edit these values frequently as needed)
  // =========================================================================
  name: 'Brightway Cleaning',
  tagline: 'Professional Cleaning Services',
  description:
    'Professional commercial cleaning services with a focus on quality, reliability, and customer satisfaction.',
  url: 'https://brightway-cleaning.com',
  ogImage: 'https://brightway-cleaning.com/og.svg',

  // =========================================================================
  // BUSINESS INFORMATION (Edit as your business evolves)
  // =========================================================================
  business: {
    legalName: 'Brightway Cleaning',
    startYear: 2010,
    employeeCount: '50+',
    servicesCount: '15+',
    clientsServed: '1000+',
    satisfaction: '99%',
  },

  // =========================================================================
  // CONTACT INFORMATION (Edit when your contact details change)
  // =========================================================================
  contact: {
    phone: {
      display: '(214) 636-2323', // Phone number as displayed on the site
      raw: '+12146362323', // Phone number for tel: links (no spaces or special chars)
    },
    email: 'brightwaycleaningco@gmail.com',
    address: {
      street: '1234 Industrial Blvd',
      city: 'Bedford',
      state: 'TX',
      zip: '76022',
      country: 'USA',
      full: '1234 Industrial Blvd, Bedford, TX 76022', // Combined address as displayed on the site
      maps: 'https://maps.google.com/?q=Bedford+TX',
    },
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    coordinates: {
      latitude: 32.8465,
      longitude: -97.1429,
    },
  },

  // =========================================================================
  // SOCIAL MEDIA LINKS (Update when your social media changes)
  // =========================================================================
  social: {
    twitter: 'https://twitter.com/brightwaycleaningco',
    facebook: 'https://facebook.com/brightwaycleaningco',
    instagram: 'https://instagram.com/brightwaycleaningco',
    linkedin: 'https://linkedin.com/company/brightwaycleaningco',
    // Social handles without URLs (for Schema.org)
    handles: {
      twitter: '@brightwaycleaningco',
      facebook: 'brightwaycleaningco',
      instagram: '@brightwaycleaningco',
    },
  },

  // =========================================================================
  // SEO AND METADATA (Update periodically for SEO optimization)
  // =========================================================================
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
    serviceAreas: [
      'Bedford',
      'Fort Worth',
      'Dallas',
      'Arlington',
      'Irving',
      'Plano',
      'Frisco',
      'McKinney',
      'Grapevine',
      'Southlake',
    ],
    businessType: 'Commercial Cleaning Service',
    businessCategory: 'Professional Services',
    yearEstablished: 2010,
  },

  // =========================================================================
  // SERVICE TYPES (Update when adding/changing service offerings)
  // =========================================================================
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
    },
  ],
};
