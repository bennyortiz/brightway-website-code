import { ServiceItem } from './ServiceCard';

/**
 * Service Items Data
 * 
 * Contains all the service offerings data used in the Services section.
 * Each item includes an icon, title, description, and list of features.
 */
export const serviceItems: Omit<ServiceItem, 'icon'>[] = [
  {
    title: 'Office Cleaning',
    description: 'Comprehensive cleaning solutions for offices of all sizes, ensuring a clean and productive workspace.',
    features: ['Daily sanitization', 'Carpet cleaning', 'Glass & window cleaning', 'Restroom maintenance']
  },
  {
    title: 'Commercial Spaces',
    description: 'Specialized cleaning services for retail stores, restaurants, and other commercial establishments.',
    features: ['Storefront cleaning', 'Floor maintenance', 'Display dusting', 'High-traffic area focus']
  },
  {
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning solutions for warehouses, factories, and industrial facilities.',
    features: ['Equipment cleaning', 'Hazardous waste handling', 'Loading dock maintenance', 'Large space management']
  },
  {
    title: 'Sanitization Services',
    description: 'Professional disinfection and sanitization to maintain a healthy environment.',
    features: ['Hospital-grade disinfectants', 'Virus & bacteria elimination', 'Surface protection', 'Air quality improvement']
  },
  {
    title: 'Waste Management',
    description: 'Efficient waste collection and disposal services for commercial properties.',
    features: ['Trash collection', 'Recycling programs', 'Hazardous waste disposal', 'Compliance with regulations']
  },
  {
    title: 'Scheduled Maintenance',
    description: 'Regular cleaning schedules tailored to your business needs and operating hours.',
    features: ['Customized schedules', 'After-hours service', 'Regular inspections', 'Seasonal deep cleaning']
  }
]; 