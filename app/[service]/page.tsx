import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import MainLayout from '../components/layout/MainLayout'
import SEO from '../components/shared/SEO'
import { siteConfig } from '../constants/siteConfig'
import { generatePageMetadata } from '../utils/metadata'
import { generateFAQSchema } from '../utils/seo'

// Define proper interface for page props
interface ServicePageProps {
  params: {
    service: string;
  };
}

// Define the dynamic params
export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    service: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = siteConfig.services.find((s) => s.slug === params.service)
  
  if (!service) {
    return generatePageMetadata({
      pageType: 'custom',
      title: 'Service Not Found',
      noIndex: true,
    })
  }
  
  return generatePageMetadata({
    pageType: 'service',
    title: `${service.name} | ${siteConfig.name}`,
    description: service.metaDescription,
    slug: params.service,
    customData: {
      serviceName: service.name,
    },
  })
}

// Service page component with properly typed props
export default function ServicePage({ params }: ServicePageProps) {
  // Find the service data from the slug
  const serviceSlug = params.service
  const service = siteConfig.services.find((s) => s.slug === serviceSlug)
  
  // Return 404 if service doesn't exist
  if (!service) {
    notFound()
  }
  
  // Example service FAQs - in a real site, these would likely come from a CMS or database
  const serviceFAQs = [
    {
      question: `What is included in your ${service.name}?`,
      answer: `Our ${service.name} includes comprehensive cleaning tailored to your specific needs. We use professional-grade equipment and eco-friendly products to ensure the highest quality results.`
    },
    {
      question: `How much does your ${service.name} cost?`,
      answer: 'Our pricing is customized based on your specific requirements. Contact us for a free quote tailored to your needs.'
    },
    {
      question: 'Do you provide services on weekends?',
      answer: 'Yes, we offer flexible scheduling including weekends to accommodate your business hours and minimize disruption.'
    }
  ]
  
  // Schema for the service page
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.name,
      url: siteConfig.url
    },
    description: service.shortDescription,
    url: `${siteConfig.url}/${serviceSlug}`,
    areaServed: siteConfig.seo.serviceAreas.join(', '),
    serviceType: service.name,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    }
  }
  
  return (
    <MainLayout>
      {/* Add custom schema for the service and FAQs */}
      <SEO jsonLd={serviceSchema} />
      <SEO jsonLd={generateFAQSchema(serviceFAQs)} />
      
      {/* Page content would go here */}
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold">{service.name}</h1>
        <p className="mt-4 text-lg text-gray-600">{service.shortDescription}</p>
        
        {/* Other service page content would go here */}
        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {serviceFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 