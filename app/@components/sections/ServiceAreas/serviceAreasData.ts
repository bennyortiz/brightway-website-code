import { ServiceAreaItem, serviceAreas as libServiceAreas } from '@/app/@lib/data/service-areas';

/**
 * Re-exporting service areas from the central data store
 * This ensures consistency across the application
 */
export type { ServiceAreaItem };
export const serviceAreas = libServiceAreas;
