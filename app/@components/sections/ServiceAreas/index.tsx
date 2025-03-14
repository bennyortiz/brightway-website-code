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
        <Container>
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
                <motion.div 
                  className="w-full"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { 
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {filteredAreas.map((area) => (
                    <Column key={area.id}>
                      <motion.div
                        variants={{
                          hidden: { y: 20, opacity: 0 },
                          visible: { y: 0, opacity: 1 }
                        }}
                      >
                        <ServiceAreaCard 
                          area={area} 
                          onClick={() => handleSelectArea(area)} 
                        />
                      </motion.div>
                    </Column>
                  ))}
                </motion.div>
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

          {/* "Don't see your area?" Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-12">
            <div className="p-5 bg-white rounded-xl shadow-md flex items-center max-w-md">
              <div className="bg-blue-50 p-2 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="text-gray-700">
                <span className="font-medium">Don't see your area?</span> We likely service your location too!
                Contact us to confirm availability in your specific area.
              </p>
            </div>
            
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 group"
            >
              <span>Check Your Area</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Container>

        {/* Modal for area details */}
        <AnimatePresence>
          {isModalOpen && selectedArea && (
            <ServiceAreaDetailsModal area={selectedArea} onClose={closeModal} />
          )}
        </AnimatePresence>
      </Section>
    </div>
  );
};

/**
 * Service Area Card Component
 * 
 * Displays a preview of a service area with key information
 */
const ServiceAreaCard = ({ area, onClick }: { area: DFWMapRegion, onClick: () => void }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 group h-full"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`h-2 ${getCoverageLevelColor(area.coverageLevel)}`} />
      <div className="p-6">
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
        
        {area.keyLocations && area.keyLocations.length > 0 && (
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">Key areas served:</p>
            <p className="text-sm text-gray-700 line-clamp-1">
              {area.keyLocations.join(', ')}
            </p>
          </div>
        )}
        
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

/**
 * Service Area Details Modal Component
 * 
 * Displays detailed information about a selected service area
 */
const ServiceAreaDetailsModal = ({ 
  area, 
  onClose 
}: { 
  area: DFWMapRegion, 
  onClose: () => void 
}) => {
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
    case 'full': return 'bg-primary';
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