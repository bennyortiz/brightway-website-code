'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Benefit Item Interface
 */
export interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Animation variants
const iconVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.2,
    rotate: 5,
    transition: { type: 'spring', stiffness: 400, damping: 10 } 
  }
};

/**
 * BenefitItem Component
 *
 * Displays a single benefit with an icon, title, and description.
 * Used in the Why Choose Us section to highlight company advantages.
 * Enhanced with interactive animations for better engagement.
 *
 * @param {BenefitItemProps} props - The benefit data
 */
const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {
  return (
    <motion.div 
      className="group relative flex flex-col items-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ 
        y: -5,
        transition: { type: 'spring', stiffness: 300 }
      }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <motion.div 
          className="p-4 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl mb-6 group-hover:from-primary/20 transition-colors duration-300"
          variants={iconVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-xl font-semibold mb-3 text-center bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default BenefitItem;
