import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { serviceItems } from '@/app/@lib/data/services';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { Card, CardBody } from '@/app/@components/ui/cards';
import { 
  createSlug, 
  getAllCityPaths, 
  getCityNameFromSlug, 
  getCityDataFromSlug,
  getCityServiceUrl
} from '@/app/@lib/utils/slugs';

// Generate static params for all cities
export function generateStaticParams() {
  return getAllCityPaths();
}

// Generate metadata for each city page
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const citySlug = params.city;
  const cityName = getCityNameFromSlug(citySlug);
  
  if (!cityName) return notFound();
  
  return generatePageMetadata({
    pageType: 'custom',
    title: `Commercial Cleaning Services in ${cityName} | Brightway Cleaning`,
    description: `Brightway Cleaning offers professional commercial cleaning services in ${cityName}. Our tailored solutions meet the specific needs of ${cityName} businesses.`,
    slug: `services/${citySlug}`,
  });
}

export default function CityServicesPage({ params }: { params: { city: string } }) {
  const citySlug = params.city;
  const cityName = getCityNameFromSlug(citySlug);
  
  // If city doesn't exist in our service areas, show 404
  if (!cityName) return notFound();
  
  // Find city data
  const cityData = getCityDataFromSlug(citySlug);
  
  return (
    <PageTemplate
      title={`Commercial Cleaning Services in ${cityName}`}
      description={`Professional commercial cleaning services tailored to the specific needs of ${cityName} businesses and facilities.`}
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* City Introduction */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="prose max-w-none">
          <h2>Professional Cleaning Services in {cityName}</h2>
          <p>
            At Brightway Cleaning, we provide comprehensive commercial cleaning services 
            throughout {cityName}. Our team of experienced professionals is familiar with the 
            unique requirements of businesses in {cityData?.keyLocations.join(', ')} and 
            surrounding areas.
          </p>
          <p>
            With a population of {cityData?.population || 'over 100,000'}, {cityName} businesses 
            require specialized cleaning solutions that meet their specific industry standards 
            and location needs.
          </p>
        </div>
      </PageSection>
      
      {/* Services Grid */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="lg">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services in {cityName}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service) => {
            const serviceSlug = createSlug(service.title);
            return (
              <Card key={service.title} className="h-full">
                <CardBody className="h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <ButtonLink 
                      href={getCityServiceUrl(cityName, service.title)}
                      variant="primary"
                      fullWidth
                    >
                      Learn More
                    </ButtonLink>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </PageSection>
      
      {/* Call to Action */}
      <PageSection contentWidth="container" maxWidth="lg" bgColor="white" spacingY="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your {cityName} commercial cleaning needs.
          </p>
          <ButtonLink href="/contact" size="lg" variant="primary">
            Get a Free Quote
          </ButtonLink>
        </div>
      </PageSection>
    </PageTemplate>
  );
} 