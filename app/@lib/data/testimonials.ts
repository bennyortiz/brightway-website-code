/**
 * Testimonial Item Interface
 *
 * Defines the structure for testimonial items displayed throughout the application
 */
export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
}

/**
 * Testimonials Data
 *
 * Contains testimonial quotes from clients with their details.
 * Used in the Testimonials section to display client feedback.
 */
export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Brightway Cleaning has transformed our office space. Their attention to detail and consistent quality have made them an invaluable partner for our business.',
    author: 'Sarah Johnson',
    position: 'Office Manager',
    company: 'Tech Solutions Inc.',
  },
  {
    quote:
      "We've been using Brightway for our retail locations for over 5 years. Their reliability and professionalism are unmatched in the industry.",
    author: 'Michael Chen',
    position: 'Operations Director',
    company: 'Retail Group International',
  },
  {
    quote:
      'The team at Brightway understands our unique needs as a medical facility. Their thorough sanitization protocols give us peace of mind.',
    author: 'Dr. Emily Rodriguez',
    position: 'Clinic Director',
    company: 'Wellness Medical Center',
  },
  {
    quote:
      'Since switching to Brightway, our employee satisfaction with office cleanliness has increased by 95%. Their team is professional, thorough, and always goes the extra mile.',
    author: 'David Wilson',
    position: 'HR Director',
    company: 'Innovate Financial',
  },
  {
    quote:
      'As a property manager overseeing multiple buildings, I need reliable cleaning services. Brightway consistently delivers exceptional results across all our properties.',
    author: 'Jennifer Martinez',
    position: 'Property Manager',
    company: 'Urban Properties Group',
  },
  {
    quote:
      'Brightway adapted quickly to our sustainable cleaning requirements. They use eco-friendly products without compromising on quality, which aligns perfectly with our company values.',
    author: 'Robert Thompson',
    position: 'Sustainability Officer',
    company: 'GreenTech Enterprises',
  },
];

/**
 * Simulates fetching testimonials from an API
 * This is a server-side function that will be streamed with Suspense
 */
export async function getTestimonials(): Promise<TestimonialItem[]> {
  // Add artificial delay to simulate real API
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return testimonials;
}
