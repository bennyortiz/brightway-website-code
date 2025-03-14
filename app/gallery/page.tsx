import { Metadata } from 'next';
import Image from 'next/image';
import { MainLayout } from '@/app/@components/ui/layout';
import { Section, Container, Grid, Column } from '@/app/@components/ui/layout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Our Work Gallery | Brightway Cleaning',
  description: 'Browse through our gallery of completed commercial cleaning projects to see the quality of our services in action.',
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
    <MainLayout>
      {/* Hero Section */}
      <Section 
        spacing="xl" 
        background="bg-gradient-to-b from-blue-50 to-white"
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse through our portfolio of commercial cleaning projects to see the 
          quality and thoroughness of our services in action.
        </p>
      </Section>

      {/* Gallery Grid Section */}
      <Section spacing="lg">
        <Grid 
          columns={{ default: 1, sm: 2, lg: 3 }} 
          gap={8}
        >
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
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
        </Grid>
      </Section>

      {/* Features Section with custom grid layout */}
      <Section 
        spacing="xl" 
        background="bg-gray-50"
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-12">Why Choose Our Cleaning Services</h2>
        
        <Grid columns={{ default: 1, md: 2, lg: 4 }} gap={8}>
          <Column 
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Professional Team</h3>
            <p className="text-gray-600">Our cleaners are trained, insured, and background-checked professionals.</p>
          </Column>

          <Column 
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Quality Guaranteed</h3>
            <p className="text-gray-600">We guarantee the quality of our work with a satisfaction guarantee on every job.</p>
          </Column>

          <Column 
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Eco-Friendly</h3>
            <p className="text-gray-600">We use environmentally safe cleaning products whenever possible.</p>
          </Column>

          <Column 
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-primary">Flexible Scheduling</h3>
            <p className="text-gray-600">We work around your schedule to minimize disruption to your business.</p>
          </Column>
        </Grid>
      </Section>

      {/* Testimonial section with custom layout */}
      <Section spacing="xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        
        <Grid columns={{ default: 1, lg: 2 }} gap={8}>
          <Column className="bg-white p-8 rounded-xl shadow-md">
            <p className="italic text-gray-600 mb-6">
              "Brightway Cleaning has been maintaining our office space for over 3 years, and the level of service has been consistently excellent. Their attention to detail makes our workspace shine!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Office Manager, TechCorp</p>
              </div>
            </div>
          </Column>
          
          <Column className="bg-white p-8 rounded-xl shadow-md">
            <p className="italic text-gray-600 mb-6">
              "As a medical facility, cleanliness is paramount. Brightway understands our specialized needs and delivers superior sanitization services that meet our strict standards."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
              <div>
                <p className="font-semibold">Dr. Michael Chen</p>
                <p className="text-sm text-gray-500">Director, HealthFirst Clinic</p>
              </div>
            </div>
          </Column>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section 
        spacing="lg" 
        background="bg-primary"
        className="text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote for your commercial cleaning needs.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Request a Quote
        </a>
      </Section>
    </MainLayout>
  );
} 