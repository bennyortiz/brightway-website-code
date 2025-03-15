import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Award, Shield, Clock } from 'lucide-react';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { serviceItems } from '@/app/@lib/data/services';
import { Service } from '@/app/@lib/types';
import { getServiceIcon } from '@/app/@lib/constants';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { Card, CardBody } from '@/app/@components/ui/cards';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';

/**
 * Page Metadata - Enhanced for better SEO
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Professional Commercial Cleaning Services | Brightway Cleaning',
  description:
    "Brightway Cleaning offers comprehensive commercial cleaning services for offices, medical facilities, retail spaces, and industrial buildings throughout the DFW metroplex. Get a customized cleaning solution for your business.",
  slug: 'services',
});

// Helper function to create ID-safe slugs
const createSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export default function ServicesPage() {
  return (
    <PageTemplate
      title="Professional Commercial Cleaning Services"
      description="We deliver comprehensive cleaning solutions tailored to your business needs, with specialized expertise across various industries and facility types."
      headerOptions={{ fullWidth: true }}
    >
      {/* Quick Navigation */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="md">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Jump to a Service
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {serviceItems.map(service => (
              <a
                key={service.title}
                href={`#${createSlug(service.title)}`}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Introduction */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="primary-light" spacingY="md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Brightway for Your Business?
            </h2>
            <p className="text-gray-700 mb-6">
              At Brightway Cleaning, we understand that a clean environment is essential for your business's success. 
              Our comprehensive commercial cleaning services are designed to exceed expectations and maintain pristine 
              conditions that impress clients and create healthy workspaces for your team.
            </p>
            <div className="space-y-3">
              {[
                'Customized cleaning plans based on your specific needs',
                'Fully insured and background-checked cleaning professionals',
                'Eco-friendly cleaning products and practices',
                'Flexible scheduling including after-hours and weekend options',
                '24/7 emergency cleaning services available'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/professional-cleaning-team.jpg"
              alt="Brightway Professional Cleaning Team"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </PageSection>

      {/* Services List */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Comprehensive Cleaning Services
        </h2>
        
        <div className="space-y-24">
          {serviceItems.map((service, index) => {
            const slug = createSlug(service.title);
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.title} 
                id={slug}
                className="scroll-mt-24"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  <div className="lg:w-1/2">
                    <div className="mb-4 inline-block">
                      {getServiceIcon(service.title, 'w-16 h-16 text-primary')}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <ButtonLink 
                      href="/contact" 
                      variant="primary"
                      rightIcon={<ArrowRight className="ml-2 h-4 w-4" />}
                    >
                      Request This Service
                    </ButtonLink>
                  </div>
                  
                  <div className="lg:w-1/2 relative rounded-lg overflow-hidden aspect-video w-full shadow-lg">
                    <Image
                      src={`/images/services/${slug}.jpg`}
                      alt={`${service.title} - Brightway Cleaning Services`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>

      {/* Industry-Specific Solutions */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industry-Specific Cleaning Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Medical Facilities',
              description: 'Specialized cleaning for healthcare environments with strict adherence to sanitation protocols and compliance with all healthcare regulations.',
              image: '/images/industries/medical-cleaning.jpg'
            },
            {
              title: 'Office Buildings',
              description: 'Comprehensive cleaning solutions for office spaces of all sizes, ensuring a productive and healthy environment for your employees and visitors.',
              image: '/images/industries/office-cleaning.jpg'
            },
            {
              title: 'Retail Spaces',
              description: 'Create an inviting shopping environment with our retail cleaning services, designed to maintain pristine conditions during business hours.',
              image: '/images/industries/retail-cleaning.jpg'
            },
            {
              title: 'Educational Facilities',
              description: 'Safe and thorough cleaning for schools and educational institutions, with special attention to high-touch surfaces and common areas.',
              image: '/images/industries/education-cleaning.jpg'
            },
            {
              title: 'Industrial & Manufacturing',
              description: 'Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities that meet safety standards and operational requirements.',
              image: '/images/industries/industrial-cleaning.jpg'
            },
            {
              title: 'Hospitality',
              description: 'Elevate guest experiences with our hospitality cleaning services for hotels, restaurants, and event venues throughout the DFW area.',
              image: '/images/industries/hospitality-cleaning.jpg'
            }
          ].map((industry, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardBody className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                  <div className="mt-4">
                    <ButtonLink 
                      href="/contact" 
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Learn More
                    </ButtonLink>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Benefits Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Brightway Difference</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you choose Brightway Cleaning, you're partnering with a company committed to excellence
            in every aspect of commercial cleaning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Experienced Professionals</h3>
            <p className="text-gray-600">
              Our team consists of highly trained and experienced cleaning professionals who take pride in delivering exceptional results.
            </p>
          </div>
          
          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
            <p className="text-gray-600">
              We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll re-clean at no additional cost.
            </p>
          </div>
          
          <div className="text-center p-6 border border-gray-100 rounded-lg shadow-sm">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
            <p className="text-gray-600">
              Count on us to show up on time, every time. Our reliability has made us a trusted partner for businesses across DFW.
            </p>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="primary-light" spacingY="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free, no-obligation consultation and quote. Discover the difference professional cleaning can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink 
              href="/contact" 
              variant="primary"
              size="lg"
              className="px-8"
            >
              Get a Free Quote
            </ButtonLink>
            <ButtonLink 
              href="tel:+1234567890" 
              variant="outline"
              size="lg"
              className="px-8"
            >
              Call Us Now
            </ButtonLink>
          </div>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
