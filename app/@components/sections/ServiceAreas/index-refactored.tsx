'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { dfwMapData, DFWMapRegion } from '@/app/@lib/data/dfwMapData';
import { Grid, Column } from '@/app/@components/ui/layout';
import { ListingPage } from '@/app/@components/ui/page';
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
const getCoverageLevelColor = (level: string) => {
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

const getCoverageLevelText = (level: string) => {
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

export default ServiceAreasPage; 