/**
 * Barrel file for section components
 * This allows for cleaner imports when using multiple section components
 *
 * Example usage:
 * import { ContactForm, ContactInfo, Hero, CTABanner } from '@/app/@components/sections';
 * import { ServiceList, ServiceDetails } from '@/app/@components/sections';
 */

// Main section components
export { default as Hero } from './Hero';
export { default as Contact } from './Contact';
export { default as CTABanner } from './CTABanner';
export { default as About } from './About';
export { default as Gallery } from './Gallery';
export { default as ServiceAreas } from './ServiceAreas';
export { default as Testimonials } from './Testimonials';
export { default as WhyChooseUs } from './WhyChooseUs';

// Contact section components
export * from './Contact/ContactForm';
export * from './Contact/ContactInfo';

// Services section components
export { default as Services } from './Services';
export { default as ServiceList } from './Services/ServiceList';
export { default as ServiceCard } from './Services/ServiceCard';
export { default as ServiceDetails } from './Services/ServiceDetails';
export { default as ServiceDetailsList } from './Services/ServiceDetailsList';

// Export FAQ components
export { default as FAQ } from './FAQ';
export { default as FAQStats } from './FAQ/FAQStats';
export { default as FAQCategoryIcon } from './FAQ/FAQCategoryIcon';

// Data imports - prefer importing directly from lib
// export { serviceItems } from '@/app/@lib/data/services';
