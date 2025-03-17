import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { CheckCircle2 } from 'lucide-react';
import { 
  createSlug, 
  getAllCityServicePaths, 
  getCityNameFromSlug, 
  getCityDataFromSlug,
  getServiceFromSlug
} from '@/app/@lib/utils/slugs';

// Generate static params for all city-service combinations
export function generateStaticParams() {
  return getAllCityServicePaths();
}

// Generate metadata for each city-service page
export async function generateMetadata({ 
  params 
}: { 
  params: { city: string; service: string } 
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = params;
  
  const cityName = getCityNameFromSlug(citySlug);
  const serviceInfo = getServiceFromSlug(serviceSlug);
  
  if (!cityName || !serviceInfo) return notFound();
  
  return generatePageMetadata({
    pageType: 'custom',
    title: `${serviceInfo.title} Services in ${cityName} | Brightway Cleaning`,
    description: `Professional ${serviceInfo.title.toLowerCase()} services in ${cityName}. ${serviceInfo.description} Contact Brightway Cleaning for a customized solution.`,
    slug: `services/${citySlug}/${serviceSlug}`,
  });
}

export default function CityServicePage({ 
  params 
}: { 
  params: { city: string; service: string } 
}) {
  const { city: citySlug, service: serviceSlug } = params;
  
  const cityName = getCityNameFromSlug(citySlug);
  const serviceInfo = getServiceFromSlug(serviceSlug);
  
  // If city or service doesn't exist, show 404
  if (!cityName || !serviceInfo) return notFound();
  
  // Find city data
  const cityData = getCityDataFromSlug(citySlug);
  
  return (
    <PageTemplate
      title={`${serviceInfo.title} Services in ${cityName}`}
      description={`Professional ${serviceInfo.title.toLowerCase()} services tailored to the unique needs of ${cityName} businesses.`}
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Service Introduction */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="prose max-w-none">
            <h2>{serviceInfo.title} Services in {cityName}</h2>
            <p className="lead">
              Brightway Cleaning provides professional {serviceInfo.title.toLowerCase()} services 
              for businesses throughout {cityName}, including {cityData?.keyLocations.join(', ')}.
            </p>
            <p>
              {serviceInfo.description} Our specialized team understands the unique requirements of
              {cityName} businesses and provides customized solutions to meet your specific needs.
            </p>
            
            <h3>Why Choose Our {serviceInfo.title} Services in {cityName}</h3>
            <ul>
              {serviceInfo.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">
                    <CheckCircle2 size={18} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <ButtonLink href="/contact" variant="primary" size="lg" className="mt-6">
              Request a Free Quote
            </ButtonLink>
          </div>
          
          <div className="lg:mt-12">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for service image - you would use a real image in production */}
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <p className="text-gray-500 text-lg font-medium">
                  {serviceInfo.title} in {cityName}
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Local {cityName} Expertise</h3>
              <p className="text-gray-700">
                With a population of {cityData?.population || 'over 100,000'}, {cityName} has unique
                business needs. Our team has extensive experience serving local businesses with
                professional {serviceInfo.title.toLowerCase()} services.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
      
      {/* Call to Action */}
      <PageSection contentWidth="container" maxWidth="lg" bgColor="gray-50" spacingY="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your {cityName} {serviceInfo.title.toLowerCase()} needs.
          </p>
          <ButtonLink href="/contact" size="lg" variant="primary">
            Get a Free Quote
          </ButtonLink>
        </div>
      </PageSection>
    </PageTemplate>
  );
} 