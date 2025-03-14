'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, CheckCircle, Clock, ArrowRight, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dfwMapData, DFWMapRegion } from '@/app/@lib/data/dfwMapData';
import { Grid, Column, Section, Container } from '../../ui/layout';

/**
 * ServiceAreas Component
 *
 * Displays a searchable, filterable grid of service area cards
 * Each card provides essential information about coverage areas
 * with the ability to view additional details
 * 
 * Uses Grid and Column components for responsive layout
 */
const ServiceAreas = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<DFWMapRegion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Select the top cities to display (9 cities - divisible by 3 columns for larger screens)
  // This ensures we don't have incomplete columns
  const topCities = useMemo(() => {
    // Prioritize full coverage areas first, then sort alphabetically
    return [...dfwMapData]
      .sort((a, b) => {
        // First sort by coverage level (full first)
        if (a.coverageLevel === 'full' && b.coverageLevel !== 'full') return -1;
        if (a.coverageLevel !== 'full' && b.coverageLevel === 'full') return 1;
        // Then sort alphabetically by name
        return a.name.localeCompare(b.name);
      })
      .slice(0, 9); // Take only the first 9 cities
  }, []);
  
  // Filter areas based on search query
  const filteredAreas = useMemo(() => {
    if (searchQuery) {
      // Apply search filter
      return dfwMapData.filter(area => {
        const matchesSearch = area.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (area.zipCodes && area.zipCodes.some(zip => zip.includes(searchQuery)));
        
        return matchesSearch;
      });
    } else {
      // When not searching, show top cities
      return topCities;
    }
  }, [searchQuery, topCities]);

  // Handle selecting an area to view details
  const handleSelectArea = (area: DFWMapRegion) => {
    setSelectedArea(area);
    setIsModalOpen(true);
  };

  // Close the details modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="service-areas">
      <Section className="bg-blue-50">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">Areas We Service</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find your location below to learn more about our service coverage in your area.
            We provide professional cleaning services throughout the DFW metroplex.
          </p>
        </div>

        {/* Search Control */}
        <div className="mb-10">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by city or zip code..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredAreas.length} {filteredAreas.length === 1 ? 'area' : 'areas'} found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="mb-12">
          {filteredAreas.length > 0 ? (
            <Grid columns={{ default: 1, md: 2, lg: 3 }} gap={6}>
              {filteredAreas.map((area) => (
                <Column key={area.id}>
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => handleSelectArea(area)}
                  >
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className={`w-2 h-2 rounded-full ${getCoverageLevelColor(area.coverageLevel)} mb-2`} />
                          <h3 className="text-xl font-semibold">{area.name}</h3>
                        </div>
                        <div className={`text-xs font-medium px-2 py-1 rounded-full ${getCoverageLevelBadgeColor(area.coverageLevel)}`}>
                          {getCoverageLevelText(area.coverageLevel)}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-600 text-sm mb-4">
                          {area.description || `We provide cleaning services in ${area.name} and surrounding areas.`}
                        </p>
                      </div>
                      <button
                        className="mt-4 inline-flex items-center justify-center w-full py-2 px-4 border border-primary text-primary rounded hover:bg-primary/5 transition-colors"
                      >
                        View Details
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </Column>
              ))}
            </Grid>
          ) : (
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">No service areas match your search criteria.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-primary hover:text-primary/80 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* "View All" Button when not searching */}
        {!searchQuery && filteredAreas.length < dfwMapData.length && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setSearchQuery(' ')} // Set to space to trigger search but show all
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              View all service areas
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}

        {/* Modal for area details */}
        <AnimatePresence>
          {isModalOpen && selectedArea && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto"
              onClick={closeModal}
            >
              <div className="min-h-screen px-4 flex items-center justify-center">
                <div className="fixed inset-0 bg-black bg-opacity-30" />
                
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-3xl z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center p-6 border-b">
                    <h3 className="text-2xl font-bold">{selectedArea.name}</h3>
                    <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <Grid columns={{ default: 1, md: 2 }} gap={8}>
                      <Column>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">About This Area</h4>
                          <p className="text-gray-600">
                            {selectedArea.description || `${selectedArea.name} is one of our service areas in the DFW metroplex.`}
                          </p>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Coverage Details</h4>
                          <div className="flex items-center mb-2">
                            <div className={`w-3 h-3 rounded-full ${getCoverageLevelColor(selectedArea.coverageLevel)} mr-2`} />
                            <span className="font-medium">
                              {getCoverageLevelText(selectedArea.coverageLevel)} Coverage
                            </span>
                          </div>
                          <p className="text-gray-600">
                            {getCoverageDescription(selectedArea.coverageLevel)}
                          </p>
                        </div>
                      </Column>
                      
                      <Column>
                        {selectedArea.zipCodes && selectedArea.zipCodes.length > 0 && (
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-2">Service Zip Codes</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedArea.zipCodes.map((zip) => (
                                <span 
                                  key={zip} 
                                  className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                                >
                                  {zip}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-primary mr-2" />
                            <span className="text-gray-600">
                              {selectedArea.responseTime || 'Within 24-48 hours'}
                            </span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Available Services</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {(selectedArea.services || [
                              'Commercial Cleaning',
                              'Office Cleaning',
                              'Medical Facility Cleaning',
                            ]).map((service) => (
                              <div key={service} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-600">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Column>
                    </Grid>
                  </div>
                  
                  <div className="border-t p-6 bg-gray-50">
                    <button
                      onClick={closeModal}
                      className="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Close Details
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
};

// Helper functions for coverage level display
const getCoverageLevelText = (level: string): string => {
  switch (level) {
    case 'full': return 'Full';
    case 'partial': return 'Partial';
    case 'limited': return 'Limited';
    default: return 'Standard';
  }
};

const getCoverageLevelColor = (level: string): string => {
  switch (level) {
    case 'full': return 'bg-green-500';
    case 'partial': return 'bg-yellow-500';
    case 'limited': return 'bg-orange-500';
    default: return 'bg-blue-500';
  }
};

const getCoverageLevelBadgeColor = (level: string): string => {
  switch (level) {
    case 'full': return 'bg-green-100 text-green-800';
    case 'partial': return 'bg-yellow-100 text-yellow-800';
    case 'limited': return 'bg-orange-100 text-orange-800';
    default: return 'bg-blue-100 text-blue-800';
  }
};

const getCoverageDescription = (level: string): string => {
  switch (level) {
    case 'full':
      return 'We offer complete service coverage in this area with regular availability and priority scheduling.';
    case 'partial':
      return 'We serve most neighborhoods in this area with standard availability.';
    case 'limited':
      return 'We offer services in select parts of this area with limited scheduling availability.';
    default:
      return 'We provide standard service coverage in this area.';
  }
};

export default ServiceAreas; 