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
 * Expanded to include a variety of clients from different industries.
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
      'We switched to Brightway after having issues with our previous cleaning service. The difference in quality and professionalism was immediate and remarkable.',
    author: 'Jason Williams',
    position: 'Building Manager',
    company: 'Highland Offices',
  },
  {
    quote:
      'As a restaurant owner, cleanliness is critical to our business. Brightway delivers exceptional service every time and our health inspections have never been better.',
    author: 'Maria Gonzalez',
    position: 'Owner',
    company: 'The Fresh Kitchen',
  },
  {
    quote:
      'Our school district requires special attention to safety and sanitization. Brightway has provided excellent service consistently across all of our facilities.',
    author: 'Robert Thompson',
    position: 'Facilities Director',
    company: 'Westview School District',
  },
  {
    quote:
      'The flexibility and responsiveness of the Brightway team has been exceptional. They adapted their services to our unique warehouse environment without missing a beat.',
    author: 'Linda Castro',
    position: 'Logistics Manager',
    company: 'Global Distribution Co.',
  },
  {
    quote:
      'Brightway\'s eco-friendly cleaning options were a perfect match for our sustainability goals. Great service with environmental responsibility.',
    author: 'David Park',
    position: 'Chief Sustainability Officer',
    company: 'Green Future Enterprises',
  },
  {
    quote:
      'The level of detail in their cleaning is impressive. They take care of spots other services would miss, and they\'re always on time and professional.',
    author: 'Amanda Wilson',
    position: 'Executive Assistant',
    company: 'Premier Financial Group',
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