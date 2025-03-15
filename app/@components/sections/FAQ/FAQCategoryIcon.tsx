import React from 'react';
import { 
  Calendar, 
  CreditCard, 
  ShieldCheck, 
  Wrench, 
  Truck, 
  HelpCircle
} from 'lucide-react';

/**
 * FAQCategoryIcon Component
 * 
 * Displays an appropriate icon based on the FAQ category title.
 * Falls back to a general help icon if no match is found.
 * 
 * @param {string} category - The category title to match an icon to
 * @param {string} className - Optional className for styling
 */
interface FAQCategoryIconProps {
  category: string;
  className?: string;
}

const FAQCategoryIcon: React.FC<FAQCategoryIconProps> = ({ category, className = '' }) => {
  // Map category names to icons
  const getIconForCategory = () => {
    const lowerCategory = category.toLowerCase();
    
    if (lowerCategory.includes('service') || lowerCategory.includes('scheduling')) {
      return <Calendar className={className} />;
    }
    
    if (lowerCategory.includes('price') || lowerCategory.includes('contract')) {
      return <CreditCard className={className} />;
    }
    
    if (lowerCategory.includes('quality') || lowerCategory.includes('safety')) {
      return <ShieldCheck className={className} />;
    }
    
    if (lowerCategory.includes('technical') || lowerCategory.includes('equipment')) {
      return <Wrench className={className} />;
    }
    
    if (lowerCategory.includes('delivery') || lowerCategory.includes('arrival')) {
      return <Truck className={className} />;
    }
    
    // Default icon for unmatched categories
    return <HelpCircle className={className} />;
  };

  return getIconForCategory();
};

export default FAQCategoryIcon; 