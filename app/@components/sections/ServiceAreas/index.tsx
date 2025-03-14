'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dfwMapData, DFWMapRegion } from '@/app/@lib/data/dfwMapData';
import { Grid, Column, Section } from '@/app/@components/ui/layout';
import ServiceAreaCard, { getCoverageLevelColor, getCoverageLevelText } from './ServiceAreaCard';
import ServiceAreaDetailsModal from './ServiceAreaDetailsModal';

/**
 * ServiceAreas Component
 *
 * Displays a searchable, filterable grid of service area cards
 * using the standard Section component pattern for consistent layout
 * with other sections in the website.
 */
const ServiceAreas = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState<DFWMapRegion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Select the top cities to display (9 cities - divisible by 3 columns for larger screens)
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
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">Locations</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Service</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find your location below to learn more about our service coverage in your area. 
            We provide professional cleaning services throughout the DFW metroplex.
          </p>
        </div>

        {/* Search filter */}
        <div className="mb-10 max-w-2xl mx-auto">
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

        {/* Results count indicator */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredAreas.length} {filteredAreas.length === 1 ? 'area' : 'areas'} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Service Areas Grid */}
        {filteredAreas.length > 0 ? (
          <Grid columns={{ default: 1, md: 2, lg: 3 }} gap={6}>
            {filteredAreas.map((area, index) => (
              <Column key={area.id}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.05 * Math.min(index, 10) 
                  }}
                  className="h-full"
                >
                  <ServiceAreaCard 
                    area={area} 
                    onClick={() => handleSelectArea(area)} 
                  />
                </motion.div>
              </Column>
            ))}
          </Grid>
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
            <p className="text-gray-600">No service areas match your search criteria.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 text-primary hover:text-primary/80 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-12">
          {/* "View All" Button when not searching */}
          {!searchQuery && filteredAreas.length < dfwMapData.length && (
            <div className="text-center mb-8">
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mt-8">
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

export default ServiceAreas; 