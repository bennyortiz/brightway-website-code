/**
 * Service Area Item Interface
 *
 * Defines the structure for service area items displayed throughout the application
 */
export interface ServiceAreaItem {
  city: string;
  description: string;
  population?: string;
  keyLocations: string[];
  isFeatured?: boolean;
}

/**
 * Service Areas Data
 *
 * Contains all the areas serviced by Brightway Cleaning.
 * Each item includes the city name, a brief description, population info,
 * and key locations/neighborhoods within that area.
 */
export const serviceAreas: ServiceAreaItem[] = [
  {
    city: 'Los Angeles',
    description: 'Comprehensive cleaning services throughout the Los Angeles metropolitan area.',
    population: '3.9 million',
    keyLocations: ['Downtown LA', 'Santa Monica', 'Beverly Hills', 'Hollywood'],
    isFeatured: true,
  },
  {
    city: 'San Diego',
    description: 'Professional cleaning solutions for businesses across San Diego County.',
    population: '1.4 million',
    keyLocations: ['Downtown', 'La Jolla', 'Coronado', 'Mission Valley'],
    isFeatured: true,
  },
  {
    city: 'Orange County',
    description: 'Serving businesses and commercial properties throughout Orange County.',
    population: '3.2 million',
    keyLocations: ['Anaheim', 'Irvine', 'Newport Beach', 'Huntington Beach'],
    isFeatured: true,
  },
  {
    city: 'San Francisco',
    description: "Premier cleaning services for the Bay Area's demanding commercial market.",
    population: '815,000',
    keyLocations: ['Financial District', 'SoMa', 'Mission District', 'Embarcadero'],
  },
  {
    city: 'Sacramento',
    description: "Reliable cleaning solutions for California's capital city.",
    population: '525,000',
    keyLocations: ['Downtown', 'Midtown', 'Natomas', 'East Sacramento'],
  },
  {
    city: 'San Jose',
    description: "Specialized cleaning for Silicon Valley's tech offices and commercial spaces.",
    population: '1 million',
    keyLocations: ['Downtown', 'North San Jose', 'Willow Glen', 'Santana Row'],
  },
];
