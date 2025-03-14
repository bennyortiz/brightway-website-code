import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { Grid, Column, Section, Container } from '@/app/@components/ui/layout';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Commercial Cleaning Services in DFW | Brightway Cleaning',
  description: 'Professional commercial cleaning services for businesses in the Dallas-Fort Worth area. Office cleaning, janitorial services, and specialized cleaning solutions.',
  canonicalPath: '/services',
});

const ServicesPage = () => {
  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <Container className="py-16 lg:py-24">
          <Grid columns={{ default: 1, md: 2 }} gap={12} className="items-center">
            <Column className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Commercial Cleaning Services in DFW
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Professional cleaning solutions tailored to your business needs. Serving the entire Dallas-Fort Worth metroplex.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-md hover:bg-gray-50 transition-colors"
              >
                Get a Free Quote
              </Link>
            </Column>
            <Column className="hidden md:block">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/brightway-commercial-cleaning-team.jpg"
                  alt="Brightway Cleaning Services"
                  fill
                  className="object-cover"
                />
              </div>
            </Column>
          </Grid>
        </Container>
      </div>

      {/* Main Services */}
      <Container className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commercial Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of commercial cleaning services designed to meet the unique needs of businesses throughout the DFW metroplex.
          </p>
        </div>

        <Grid columns={{ default: 1, md: 2, lg: 3 }} gap={8} className="mb-16">
          {/* Service 1 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <Image
                  src="/images/brightway-office-cleaning.jpg"
                  alt="Office Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Office Cleaning</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive office cleaning services to maintain a clean, healthy, and productive work environment for your employees and clients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Reception and lobby areas
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Workstations and cubicles
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Conference rooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Kitchens and break rooms
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Restroom sanitization
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </Column>

          {/* Service 2 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <Image
                  src="/images/brightway-janitorial-services.jpg"
                  alt="Janitorial Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Janitorial Services</h3>
                <p className="text-gray-600 mb-6">
                  Regular janitorial services to keep your facility clean and maintained on a daily, weekly, or custom schedule.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Daily maintenance cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Floor care (vacuuming, mopping)
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Trash removal and recycling
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Restocking supplies
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Surface disinfection
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </Column>

          {/* Service 3 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-56">
                <Image
                  src="/images/brightway-floor-care.jpg"
                  alt="Floor Care"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Floor Care</h3>
                <p className="text-gray-600 mb-6">
                  Specialized floor cleaning, maintenance, and restoration services for all types of commercial flooring.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Carpet cleaning & shampooing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Hard floor stripping & waxing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Tile & grout cleaning
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Concrete polishing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Stone floor restoration
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-block text-primary font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </Column>
        </Grid>

        {/* Specialized Services */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Specialized Cleaning Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond our standard commercial cleaning, we offer specialized services to address specific industry needs and cleaning challenges.
          </p>
        </div>

        <Grid columns={{ default: 1, md: 2 }} gap={8} className="mb-16">
          {/* Specialized Service 1 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Medical Facility Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Specialized cleaning protocols for healthcare environments, including medical offices, clinics, and surgical centers. Our team is trained in infection control procedures and uses hospital-grade disinfectants.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </Column>

          {/* Specialized Service 2 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Construction Cleanup</h3>
              <p className="text-gray-600 mb-4">
                Post-construction cleaning services to remove debris, dust, and construction materials, leaving your newly built or renovated space ready for occupancy.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </Column>

          {/* Specialized Service 3 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Educational Facility Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive cleaning services for schools, colleges, and educational facilities. We understand the unique needs of educational environments and provide cleaning that promotes health and safety for students and staff.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </Column>

          {/* Specialized Service 4 */}
          <Column>
            <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Industrial Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Heavy-duty cleaning services for warehouses, manufacturing facilities, and industrial spaces. Our industrial cleaning addresses the unique challenges of these environments, including equipment cleaning and safety compliance.
              </p>
              <Link
                href="/contact"
                className="inline-block text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </Column>
        </Grid>

        {/* Service Process */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Cleaning Process</h2>
          <Grid columns={{ default: 1, md: 4 }} gap={6}>
            <Column>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                <p className="text-gray-600">
                  We meet with you to understand your specific cleaning needs and facility requirements.
                </p>
              </div>
            </Column>
            <Column>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Customized Proposal</h3>
                <p className="text-gray-600">
                  We develop a tailored cleaning plan and provide a detailed, transparent quote.
                </p>
              </div>
            </Column>
            <Column>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Scheduled Service</h3>
                <p className="text-gray-600">
                  Our professional team executes your cleaning plan on your preferred schedule.
                </p>
              </div>
            </Column>
            <Column>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  We conduct regular inspections and welcome your feedback to ensure satisfaction.
                </p>
              </div>
            </Column>
          </Grid>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
          <Grid columns={{ default: 2, md: 3, lg: 4 }} gap={6}>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/office-building.svg" 
                    alt="Office Buildings" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Office Buildings</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/medical.svg" 
                    alt="Medical Facilities" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Medical Facilities</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/retail.svg" 
                    alt="Retail Spaces" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Retail Spaces</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/school.svg" 
                    alt="Educational Facilities" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Educational Facilities</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/warehouse.svg" 
                    alt="Industrial & Warehouses" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Industrial & Warehouses</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/restaurant.svg" 
                    alt="Restaurants" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Restaurants</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/gym.svg" 
                    alt="Fitness Centers" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Fitness Centers</h3>
              </div>
            </Column>
            <Column>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image 
                    src="/images/icons/church.svg" 
                    alt="Religious Facilities" 
                    width={64} 
                    height={64} 
                  />
                </div>
                <h3 className="font-semibold">Religious Facilities</h3>
              </div>
            </Column>
          </Grid>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="relative z-10 p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-4 text-center">Ready to Experience the Brightway Difference?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 text-center">
              Contact us today to discuss your commercial cleaning needs and receive a customized quote for your facility.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-md hover:bg-gray-50 transition-colors"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ServicesPage; 