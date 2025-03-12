import { siteConfig } from '../constants/siteConfig'

/**
 * Generates Schema.org JSON-LD for a LocalBusiness
 */
export const generateLocalBusinessSchema = () => {
  const { business, contact, social } = siteConfig

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phone.raw,
    email: contact.email,
    foundingDate: `${business.startYear}`,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD',
    openingHours: contact.hours,
    sameAs: [
      social.facebook,
      social.twitter,
      social.instagram, 
      social.linkedin
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: contact.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749, // Replace with actual coordinates
      longitude: -122.4194 // Replace with actual coordinates
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 37.7749, // Replace with actual coordinates
        longitude: -122.4194 // Replace with actual coordinates
      },
      geoRadius: '50000' // 50km radius
    }
  }
}

/**
 * Generates Schema.org JSON-LD for a WebSite
 */
export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

/**
 * Generates Schema.org JSON-LD for an Organization
 */
export const generateOrganizationSchema = () => {
  const { business, contact, social } = siteConfig
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: contact.email,
    telephone: contact.phone.raw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: contact.address.country
    },
    sameAs: [
      social.facebook,
      social.twitter, 
      social.instagram,
      social.linkedin
    ]
  }
}

/**
 * Generates Schema.org JSON-LD for FAQs
 */
export const generateFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

/**
 * Generates a formatted meta description for different page types
 */
export const generateMetaDescription = (
  type: 'home' | 'about' | 'contact', 
  customData?: Record<string, string>
) => {
  const baseDesc = siteConfig.description

  switch (type) {
    case 'home':
      return baseDesc
    case 'about':
      return `Learn about ${siteConfig.name}, established in ${siteConfig.business.startYear} with ${siteConfig.business.clientsServed} satisfied clients.`
    case 'contact':
      return `Contact ${siteConfig.name} for ${siteConfig.business.satisfaction} satisfaction guaranteed cleaning services. Get a free quote today!`
    default:
      return baseDesc
  }
} 