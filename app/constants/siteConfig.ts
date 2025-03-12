// Central location for all site-specific information
export const siteConfig = {
  // Basic site info
  name: 'Brightway Cleaning',
  tagline: 'Professional Cleaning Services',
  description: 'Professional commercial cleaning services with a focus on quality, reliability, and customer satisfaction.',
  url: 'https://brightwayservices.com',
  ogImage: 'https://brightwayservices.com/og.svg',
  
  // Business information
  business: {
    legalName: 'Brightway Cleaning Services, Inc.',
    startYear: 2010,
    employeeCount: '50+',
    servicesCount: '15+',
    clientsServed: '1000+',
    satisfaction: '99%',
  },
  
  // Contact information
  contact: {
    phone: {
      display: '(555) 123-4567',
      raw: '+15551234567',
    },
    email: 'info@brightwayservices.com',
    address: {
      street: '123 Main Street, Suite 100',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'USA',
      full: '123 Main Street, Suite 100, San Francisco, CA 94105',
      maps: 'https://maps.google.com/?q=123+Main+Street+San+Francisco+CA+94105'
    },
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    }
  },
  
  // Social media links
  social: {
    twitter: 'https://twitter.com/brightwayservices',
    facebook: 'https://facebook.com/brightwayservices',
    instagram: 'https://instagram.com/brightwayservices',
    linkedin: 'https://linkedin.com/company/brightwayservices',
    // Social handles without URLs (for Schema.org)
    handles: {
      twitter: '@brightwayservices',
      facebook: 'brightwayservices',
      instagram: '@brightwayservices',
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
      'San Francisco',
      'Oakland',
      'San Jose',
      'Bay Area',
      'Silicon Valley',
    ],
    businessType: 'Commercial Cleaning Service',
    businessCategory: 'Professional Services', 
    yearEstablished: 2010,
  },

  // Services information
  services: [
    {
      id: 'office-cleaning',
      name: 'Office Cleaning',
      shortDescription: 'Professional office cleaning tailored to your business needs.',
      metaDescription: 'Professional office cleaning services by Brightway Cleaning. We ensure a clean, healthy workplace environment for your team.',
      slug: 'office-cleaning',
    },
    {
      id: 'commercial-cleaning',
      name: 'Commercial Cleaning',
      shortDescription: 'Comprehensive commercial cleaning solutions for all business types.',
      metaDescription: 'Expert commercial cleaning services for businesses of all sizes. Brightway Cleaning provides reliable, high-quality cleaning solutions.',
      slug: 'commercial-cleaning',
    },
    {
      id: 'sanitization-services',
      name: 'Sanitization Services',
      shortDescription: 'Deep sanitization services to ensure a healthy environment.',
      metaDescription: 'Professional sanitization services by Brightway Cleaning. Create a safe, hygienic environment with our advanced cleaning protocols.',
      slug: 'sanitization-services',
    }
  ],
}; 