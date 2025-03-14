'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Clock, X, ArrowRight } from 'lucide-react';
import { DFWMapRegion } from '@/app/@lib/data/dfwMapData';
import { getCoverageLevelColor, getCoverageLevelText } from './ServiceAreaCard';

interface ServiceAreaDetailsModalProps {
  area: DFWMapRegion;
  onClose: () => void;
}

/**
 * Service Area Details Modal Component
 * 
 * Displays detailed information about a selected service area
 * including key locations, response time, and zip codes
 */
const ServiceAreaDetailsModal = ({ area, onClose }: ServiceAreaDetailsModalProps) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
        className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-2 w-full ${getCoverageLevelColor(area.coverageLevel)}`} />
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold">{area.name}</h3>
              <div className="flex items-center mt-2">
                <div className={`flex-shrink-0 h-3 w-3 rounded-full ${getCoverageLevelColor(area.coverageLevel)} mr-2`}></div>
                <span className="text-gray-600">
                  {getCoverageLevelText(area.coverageLevel)} coverage
                </span>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{area.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-lg font-semibold mb-2 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span>Key Locations</span>
              </div>
              <ul className="ml-6 space-y-1">
                {area.keyLocations.map((location, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-primary mr-2">•</span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="text-lg font-semibold mb-2 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>Response Time</span>
              </div>
              <p className="ml-6 text-gray-700">{area.responseTime}</p>
              
              {area.zipCodes && area.zipCodes.length > 0 && (
                <>
                  <div className="text-lg font-semibold mb-2 mt-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Zip Codes Covered</span>
                  </div>
                  <div className="ml-6 flex flex-wrap gap-2">
                    {area.zipCodes.map((zip) => (
                      <span 
                        key={zip} 
                        className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <p className="text-gray-600">Need service in this area?</p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceAreaDetailsModal; 