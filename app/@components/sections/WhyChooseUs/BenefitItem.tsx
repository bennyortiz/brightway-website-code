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
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
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
      className="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100"
      whileHover={{
        y: -5,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        borderColor: 'rgba(0, 112, 243, 0.3)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.div
        className="p-3 bg-primary/10 rounded-full mb-4"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-xl font-semibold mb-3 text-center"
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
    </motion.div>
  );
};

export default BenefitItem;
