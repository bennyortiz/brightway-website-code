'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dfwMapData, DFWMapRegion } from '@/app/@lib/data/dfwMapData';
import { Grid, Column } from '@/app/@components/ui/layout';
import { ListingPage } from '@/app/@components/ui/page';
import ServiceAreaCard, { getCoverageLevelColor, getCoverageLevelText } from './ServiceAreaCard';
import ServiceAreaDetailsModal from './ServiceAreaDetailsModal';

/**
 * ServiceAreas Refactored Component
 *
 * Displays a searchable, filterable grid of service area cards
 * using the ListingPage component for consistent layout
 * 
 * This component demonstrates how to use page template components
 * to standardize layout while focusing on component-specific functionality
 */
const ServiceAreasPage = () => {
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

  // Search filter component
  const searchFilterComponent = (
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
  );

  // Listing header component
  const listingHeader = (
    <div className="mb-6">
      <p className="text-gray-600">
        {filteredAreas.length} {filteredAreas.length === 1 ? 'area' : 'areas'} found
        {searchQuery && ` for "${searchQuery}"`}
      </p>
    </div>
  );

  // Listing footer component
  const listingFooter = (
    <>
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
    </>
  );

  // Empty state when no areas match the search
  const emptyState = (
    <div className="text-center p-8 bg-white rounded-lg shadow-md">
      <p className="text-gray-600">No service areas match your search criteria.</p>
      <button
        onClick={() => setSearchQuery('')}
        className="mt-4 text-primary hover:text-primary/80 font-medium"
      >
        Clear search
      </button>
    </div>
  );

  // Service Areas Grid content
  const serviceAreasGrid = (
    <>
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

      {/* Modal for area details */}
      <AnimatePresence>
        {isModalOpen && selectedArea && (
          <ServiceAreaDetailsModal area={selectedArea} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );

  return (
    <ListingPage
      title="Areas We Service"
      description="Find your location below to learn more about our service coverage in your area. We provide professional cleaning services throughout the DFW metroplex."
      eyebrow="Locations"
      withGradient={false}
      heroClassName="bg-blue-50"
      filterComponent={searchFilterComponent}
      listingHeader={listingHeader}
      listingFooter={listingFooter}
      emptyState={emptyState}
      hasBreadcrumbs={false}
    >
      {filteredAreas.length > 0 ? serviceAreasGrid : null}
    </ListingPage>
  );
};

export default ServiceAreasPage; 