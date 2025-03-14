'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
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

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + (i * 0.05),
      duration: 0.3
    }
  })
};

/**
 * ServiceCard Component
 *
 * Displays information about a single service offering with animations.
 * Includes an icon, title, description, and list of features.
 *
 * @param {ServiceItem} props - The service data to display
 */
const ServiceCard = ({ icon, title, description, features }: ServiceItem) => {
  return (
    <motion.div
      className="flex flex-col h-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div 
        className="mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <div className="font-semibold text-gray-800 mb-2">Key Features:</div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              custom={index}
              variants={featureVariants}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
              </motion.div>
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
