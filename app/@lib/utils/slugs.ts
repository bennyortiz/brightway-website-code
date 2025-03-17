import { serviceAreas } from '../data/service-areas';
import { serviceItems } from '../data/services';

/**
 * Utility functions for generating and working with slugs for services and city pages
 */

/**
 * Create a URL-friendly slug from any string
 */
export function createSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Get a city name from a slug
 */
export function getCityNameFromSlug(slug: string): string | undefined {
  const city = serviceAreas.find(
    (area) => createSlug(area.city) === slug
  );
  return city?.city;
}

/**
 * Get city data from a slug
 */
export function getCityDataFromSlug(slug: string) {
  return serviceAreas.find(
    (area) => createSlug(area.city) === slug
  );
}

/**
 * Get service information from a slug
 */
export function getServiceFromSlug(slug: string) {
  return serviceItems.find(
    (service) => createSlug(service.title) === slug
  );
}

/**
 * Generate all city-service combinations for static paths
 */
export function getAllCityServicePaths(): { city: string; service: string }[] {
  const paths: { city: string; service: string }[] = [];
  
  serviceAreas.forEach((area) => {
    const citySlug = createSlug(area.city);
    
    serviceItems.forEach((service) => {
      const serviceSlug = createSlug(service.title);
      paths.push({
        city: citySlug,
        service: serviceSlug,
      });
    });
  });
  
  return paths;
}

/**
 * Generate all city paths for static paths
 */
export function getAllCityPaths(): { city: string }[] {
  return serviceAreas.map((area) => ({
    city: createSlug(area.city),
  }));
}

/**
 * Get a URL for a city's services page
 */
export function getCityServicesUrl(cityName: string): string {
  return `/services/${createSlug(cityName)}`;
}

/**
 * Get a URL for a specific service in a city
 */
export function getCityServiceUrl(cityName: string, serviceName: string): string {
  return `/services/${createSlug(cityName)}/${createSlug(serviceName)}`;
} 