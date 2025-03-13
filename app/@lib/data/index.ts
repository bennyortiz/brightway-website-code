/**
 * Data Exports
 * 
 * This file serves as a central export point for all data used throughout the application.
 * It allows for easier imports and better organization of data files.
 * 
 * Usage:
 * ```tsx
 * // Import specific data
 * import { faqData } from '@/app/@lib/data';
 * 
 * // Use in component
 * const FAQSection = () => {
 *   return (
 *     <div>
 *       {faqData.map(category => (
 *         <div key={category.title}>
 *           <h3>{category.title}</h3>
 *           {category.items.map(item => (
 *             <div key={item.question}>
 *               <h4>{item.question}</h4>
 *               <p>{item.answer}</p>
 *             </div>
 *           ))}
 *         </div>
 *       ))}
 *     </div>
 *   );
 * };
 * ```
 */

// Export all data
export * from './faq';
export * from './service-areas';
export * from './services';
export * from './testimonials';
export * from './benefits';
export * from './dfwMapData'; 