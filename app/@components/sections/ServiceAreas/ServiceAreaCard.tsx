'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronDown } from 'lucide-react';
import { DFWMapRegion } from '@/app/@lib/data/dfwMapData';

interface ServiceAreaCardProps {
  area: DFWMapRegion;
  onClick: () => void;
}

/**
 * Service Area Card Component
 * 
 * Displays a preview of a service area with key information
 * including coverage level, response time, and key areas
 */
const ServiceAreaCard = ({ area, onClick }: ServiceAreaCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 group h-full"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`h-2 ${getCoverageLevelColor(area.coverageLevel)}`} />
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{area.name}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <div className={`w-2 h-2 rounded-full ${getCoverageLevelColor(area.coverageLevel)} mr-2`}></div>
            <span>{getCoverageLevelText(area.coverageLevel)} coverage</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 text-primary mr-1.5" />
            <span>{area.responseTime}</span>
          </div>
        </div>
        
        <div className="flex-grow">
          {area.keyLocations && area.keyLocations.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">Key areas served:</p>
              <p className="text-sm text-gray-700 line-clamp-1">
                {area.keyLocations.join(', ')}
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex justify-end">
          <div className="text-primary font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
            View details
            <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Helper functions for coverage level styling
export const getCoverageLevelColor = (level: string): string => {
  switch (level) {
    case 'full':
      return 'bg-green-500';
    case 'partial':
      return 'bg-yellow-500';
    case 'limited':
      return 'bg-orange-500';
    default:
      return 'bg-gray-300';
  }
};

export const getCoverageLevelText = (level: string): string => {
  switch (level) {
    case 'full':
      return 'Full';
    case 'partial':
      return 'Partial';
    case 'limited':
      return 'Limited';
    default:
      return 'Standard';
  }
};

export default ServiceAreaCard; 