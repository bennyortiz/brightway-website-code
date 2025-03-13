'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, CheckCircle, Clock, ArrowRight, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dfwMapData, DFWMapRegion } from '@/app/@lib/data/dfwMapData';

/**
 * ServiceAreas Component
 *
 * Displays a searchable, filterable grid of service area cards
 * Each card provides essential information about coverage areas
 * with the ability to view additional details
 */
const ServiceAreas = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<DFWMapRegion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverageFilter, setCoverageFilter] = useState<'all' | 'full' | 'partial'>('all');
  
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
  
  // Filter areas based on search query and coverage filter
  const filteredAreas = useMemo(() => {
    if (searchQuery || coverageFilter !== 'all') {
      // Apply filters when searching or filtering
      return dfwMapData.filter(area => {
        const matchesSearch = area.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (area.zipCodes && area.zipCodes.some(zip => zip.includes(searchQuery)));
        
        const matchesFilter = coverageFilter === 'all' || area.coverageLevel === coverageFilter;
        
        return matchesSearch && matchesFilter;
      });
    } else {
      // When not searching or filtering, show top cities
      return topCities;
    }
  }, [searchQuery, coverageFilter, topCities]);

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
    <section id="service-areas" className="w-full py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
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

        {/* Search and Filter Controls */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow">
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

            {/* Coverage Filter */}
            <div className="md:w-48">
              <select
                value={coverageFilter}
                onChange={(e) => setCoverageFilter(e.target.value as 'all' | 'full' | 'partial')}
                className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="all">All Coverage Levels</option>
                <option value="full">Full Coverage</option>
                <option value="partial">Partial Coverage</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredAreas.length} {filteredAreas.length === 1 ? 'area' : 'areas'} found
            {searchQuery && ` for "${searchQuery}"`}
            {coverageFilter !== 'all' && ` with ${coverageFilter} coverage`}
          </p>
        </div>

        {/* Service Areas Grid */}
        <div className="mb-12">
          {filteredAreas.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                <motion.div
                  key={area.id}
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
              ))}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10 bg-white rounded-lg shadow-sm"
            >
              <p className="text-gray-600 mb-2">No service areas found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setCoverageFilter('all');
                }}
                className="text-primary hover:text-primary/80 font-medium"
              >
                Reset filters
              </button>
            </motion.div>
          )}
        </div>

        {/* "Don't see your area?" Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
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
      </div>

      {/* Service Area Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedArea && (
          <ServiceAreaDetailsModal area={selectedArea} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
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
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 group"
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`h-2 ${area.coverageLevel === 'full' ? 'bg-primary' : 'bg-blue-400'}`} />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{area.name}</h3>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <div className={`w-2 h-2 rounded-full ${area.coverageLevel === 'full' ? 'bg-primary' : 'bg-blue-400'} mr-2`}></div>
            <span>{area.coverageLevel === 'full' ? 'Full' : 'Partial'} coverage</span>
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
 * Displays detailed information about a service area
 */
const ServiceAreaDetailsModal = ({ 
  area, 
  onClose 
}: { 
  area: DFWMapRegion, 
  onClose: () => void 
}) => {
  // Close modal when escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with area color */}
        <div className={`h-2 ${area.coverageLevel === 'full' ? 'bg-primary' : 'bg-blue-400'} w-full`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 transition-colors text-gray-500 z-10"
          aria-label="Close details"
        >
          <X className="h-5 w-5" />
        </button>
        
        {/* Modal Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-3">{area.name}</h2>
          
          <div className="flex flex-wrap gap-5 mb-7">
            <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">{area.coverageLevel === 'full' ? 'Full' : 'Partial'} coverage</span>
            </div>
            
            <div className="flex items-center text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium">{area.responseTime}</span>
            </div>
          </div>
          
          <div className="mb-7">
            <h3 className="text-lg font-semibold mb-3">About Our Service in {area.name}</h3>
            <p className="text-gray-700 leading-relaxed">{area.description}</p>
          </div>
          
          {area.keyLocations && area.keyLocations.length > 0 && (
            <div className="mb-7">
              <h3 className="text-lg font-semibold mb-3">Key Areas Served</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {area.keyLocations.map((location, idx) => (
                  <li key={idx} className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{location}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {area.zipCodes && area.zipCodes.length > 0 && (
            <div className="mb-7">
              <h3 className="text-lg font-semibold mb-3">Zip Codes Covered</h3>
              <div className="flex flex-wrap gap-2">
                {area.zipCodes.map((zip, idx) => (
                  <div key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium">
                    {zip}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-base font-medium text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
            >
              Request Service in {area.name}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceAreas; 