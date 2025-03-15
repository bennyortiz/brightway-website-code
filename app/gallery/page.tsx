import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import SafeImage from '@/app/@components/ui/safe-image';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { ChevronRight } from 'lucide-react';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Our Work Gallery | Brightway Cleaning',
  description:
    'Browse through our gallery of completed commercial cleaning projects to see the quality of our services in action.',
  canonicalPath: '/gallery',
});

// Sample gallery items data
const galleryItems = [
  {
    id: 1,
    title: 'Office Space Cleaning',
    description: 'Complete cleaning service for a modern office space in Dallas.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Office',
  },
  {
    id: 2,
    title: 'Medical Facility Sanitization',
    description: 'Deep cleaning and sanitization of a healthcare facility.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Healthcare',
  },
  {
    id: 3,
    title: 'Restaurant Cleaning',
    description: 'Thorough kitchen and dining area cleaning for a restaurant in Fort Worth.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Restaurant',
  },
  {
    id: 4,
    title: 'School Janitorial Services',
    description: 'Regular maintenance cleaning for an elementary school.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Education',
  },
  {
    id: 5,
    title: 'Industrial Warehouse Cleaning',
    description: 'Heavy-duty cleaning for a large warehouse facility.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Industrial',
  },
  {
    id: 6,
    title: 'Retail Store Maintenance',
    description: 'Daily cleaning and floor maintenance for a retail chain.',
    imageUrl: '/images/brightway-commercial-cleaning-wiping.jpg',
    category: 'Retail',
  },
];

export default function GalleryPage() {
  return (
    <PageTemplate
      title="Our Work Gallery"
      description="Browse through our portfolio of commercial cleaning projects to see the quality and thoroughness of our services in action."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Gallery Grid Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 w-full">
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover"
                    placement="mid-page"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Features Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Cleaning Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Professional Team</h3>
              <p className="text-gray-600">
                Our cleaners are trained, insured, and background-checked professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We guarantee the quality of our work with a satisfaction guarantee on every job.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use environmentally safe cleaning products whenever possible.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your schedule to minimize disruption to your business.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Testimonial section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-6">
                &quot;Brightway Cleaning has been maintaining our office space for over 3 years, and
                the level of service has been consistently excellent. Their attention to detail makes
                our workspace shine!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Office Manager, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-6">
                &quot;As a medical facility, cleanliness is paramount. Brightway understands our
                specialized needs and delivers superior sanitization services that meet our strict
                standards.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-500">Director, HealthFirst Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote for your commercial cleaning needs.
            </p>
            <ButtonLink 
              href="/contact" 
              variant="primary"
              className="bg-white text-primary hover:bg-white/90"
              size="lg"
              rightIcon={<ChevronRight className="ml-1 h-4 w-4" />}
            >
              Request a Quote
            </ButtonLink>
          </div>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
