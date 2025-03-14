'use client';

import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Service item type definition
 */
export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

/**
 * ServiceCard Component
 *
 * Displays information about a single service offering with animations.
 * Updated with a more sleek, modern design aesthetic.
 */
const ServiceCard = ({ icon, title, description, features }: ServiceItem) => {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Service Icon */}
        <div className="mb-5 p-3 bg-primary/5 rounded-lg w-fit">
          {icon}
        </div>
        
        {/* Service Title & Description */}
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features List */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <ul className="space-y-3">
            {features.slice(0, 3).map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2.5 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer Link */}
      <div className="mt-auto bg-gray-50 py-3 px-6 flex justify-between items-center border-t border-gray-100">
        <span className="text-sm font-medium text-gray-500">Learn more</span>
        <motion.span 
          className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary"
          whileHover={{ 
            backgroundColor: 'rgba(0, 112, 243, 0.2)', 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
