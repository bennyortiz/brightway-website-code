// Central location for all site-specific information
export const siteConfig = {
  // Basic site info
  name: 'Brightway Cleaning',
  tagline: 'Professional Cleaning Services',
  description: 'Professional commercial cleaning services with a focus on quality, reliability, and customer satisfaction.',
  url: 'https://brightway-cleaning.com',
  ogImage: 'https://brightway-cleaning.com/og.svg',
  
  // Business information
  business: {
    legalName: 'Brightway Cleaning',
    startYear: 2010,
    employeeCount: '50+',
    servicesCount: '15+',
    clientsServed: '1000+',
    satisfaction: '99%',
  },
  
  // Contact information
  contact: {
    phone: {
      display: '(214) 636-2323',
      raw: '+12146362323',
    },
    email: 'brightwaycleaningco@gmail.com',
    address: {
      street: 'Bedford, TX',
      city: 'Bedford',
      state: 'TX',
      zip: '',
      country: 'USA',
      full: 'Bedford, TX',
      maps: 'https://maps.google.com/?q=Bedford+TX'
    },
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    coordinates: {
      latitude: 32.8465,
      longitude: -97.1429
    }
  },
  
  // Social media links
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
    serviceAreas: [
      'Bedford',
      'Fort Worth',
      'Dallas',
      'Arlington',
      'Irving',
      'Plano',
      'Euless',
      'Grapevine',
      'Hurst',
      'DFW Metroplex',
    ],
    businessType: 'Commercial Cleaning Service',
    businessCategory: 'Professional Services', 
    yearEstablished: 2010,
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