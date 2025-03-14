import { ServiceItem } from './ServiceCard';
import { serviceItems as libServiceItems } from '@/app/@lib/data/services';

/**
 * Re-exporting service items from the central data store
 * This ensures consistency across the application
 */
export const serviceItems = libServiceItems;
