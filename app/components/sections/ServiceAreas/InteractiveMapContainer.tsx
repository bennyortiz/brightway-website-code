'use client';

import React, { useState } from 'react';
import DFWMap from './DFWMap';
import MapControls from './MapControls';
import { useMapInteraction } from './hooks/useMapInteraction';
import { DFWMapRegion } from './dfwMapData';
import { Search } from 'lucide-react';

interface InteractiveMapContainerProps {
  className?: string;
}

/**
 * InteractiveMapContainer Component
 * 
 * Combines the DFW map with interactive controls and search functionality
 * Provides a complete interactive map experience for users
 */
const InteractiveMapContainer: React.FC<InteractiveMapContainerProps> = ({ className = '' }) => {
  const {
    zoom,
    posX,
    posY,
    containerRef,
    resetView,
    zoomIn,
    zoomOut,
  } = useMapInteraction({
    minZoom: 1,
    maxZoom: 3,
    zoomStep: 0.5,
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<DFWMapRegion | null>(null);

  // Handle region selection from the map
  const handleRegionSelect = (region: DFWMapRegion | null) => {
    setSelectedRegion(region);
  };

  // Transform style for zoom and pan
  const mapTransformStyle = {
    transform: `scale(${zoom}) translate(${posX}px, ${posY}px)`,
    transformOrigin: 'center center',
    transition: 'transform 0.1s',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Search bar for finding locations */}
      <div className="mb-4 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search for a city or zip code..."
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Map container with zoom and pan */}
      <div 
        ref={containerRef} 
        className="relative bg-gray-100 rounded-xl shadow-md overflow-hidden h-[400px] md:h-[500px]"
        style={{ touchAction: 'none' }} // Prevents mobile browser gestures
      >
        <div style={mapTransformStyle} className="h-full w-full">
          <DFWMap onSelectRegion={handleRegionSelect} initialRegionId={selectedRegion?.id} />
        </div>
        
        {/* Map controls positioned at the bottom left */}
        <MapControls
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
          onReset={resetView}
          zoom={zoom}
          minZoom={1}
          maxZoom={3}
          className="absolute bottom-4 left-4 z-10"
        />
      </div>

      {/* Usage instructions */}
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <span className="font-medium">How to use:</span> Click on any region to see service details. 
          Use the +/- controls to zoom, or drag to pan the map. Search for a specific city or zip code using the search box.
        </p>
      </div>
    </div>
  );
};

export default InteractiveMapContainer; 