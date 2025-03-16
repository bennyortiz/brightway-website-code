import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import SafeImage from '@/app/@components/ui/safe-image';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { ChevronRight, Filter } from 'lucide-react';

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

// Get unique categories for filtering
const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

export default function GalleryPage() {
  return (
    <PageTemplate
      title="Our Work Gallery"
      description="Browse through our portfolio of commercial cleaning projects to see the quality and thoroughness of our services in action."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Category Filter */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
            <span className="text-sm font-medium text-gray-700 mr-2 flex items-center">
              <Filter className="h-4 w-4 mr-1"/> Filter by:
            </span>
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Gallery Grid Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="relative h-56 md:h-64 w-full overflow-hidden">
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    placement="mid-page"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Services Overview */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Cleaning Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of professional cleaning services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">Professional Team</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Our cleaners are trained, insured, and background-checked professionals.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We guarantee the quality of our work with a satisfaction guarantee on every job.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">Eco-Friendly</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We use environmentally safe cleaning products whenever possible.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm md:text-base">
                We work around your schedule to minimize disruption to your business.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8 md:py-12 px-4 md:px-8 rounded-xl bg-primary-dark/30 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Ready to Transform Your Space?</h2>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
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
