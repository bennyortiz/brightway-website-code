/**
 * Testimonial Item Interface
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
];
