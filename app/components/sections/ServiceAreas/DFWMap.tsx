'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  dfwMapData, 
  DFWMapRegion, 
  mapViewbox, 
  coverageLevelColors 
} from './dfwMapData';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, CheckCircle, ChevronDown, ChevronUp, X } from 'lucide-react';

interface DFWMapProps {
  onSelectRegion?: (region: DFWMapRegion | null) => void;
  initialRegionId?: string | null;
}

/**
 * DFW Map Component
 * 
 * Interactive SVG map showing DFW metroplex service areas
 * Includes touch/click interactions, zoom capabilities, and region highlighting
 */
const DFWMap: React.FC<DFWMapProps> = ({ 
  onSelectRegion, 
  initialRegionId = null 
}) => {
  const [selectedRegion, setSelectedRegion] = useState<DFWMapRegion | null>(
    initialRegionId ? dfwMapData.find(r => r.id === initialRegionId) || null : null
  );
  const [hoverRegion, setHoverRegion] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle region selection
  const handleRegionClick = (region: DFWMapRegion) => {
    setSelectedRegion(region);
    setIsDetailOpen(true);
    
    // Call external handler if provided
    if (onSelectRegion) {
      onSelectRegion(region);
    }
  };

  // Handle closing the detail panel
  const handleCloseDetails = () => {
    setIsDetailOpen(false);
    setSelectedRegion(null);
    
    // Call external handler if provided
    if (onSelectRegion) {
      onSelectRegion(null);
    }
  };

  // Toggle detail panel visibility
  const toggleDetails = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  // Get fill color based on region state
  const getRegionFill = (region: DFWMapRegion) => {
    if (selectedRegion && region.id === selectedRegion.id) {
      return coverageLevelColors.selected;
    }
    
    if (hoverRegion === region.id) {
      return coverageLevelColors.hover;
    }
    
    return coverageLevelColors[region.coverageLevel];
  };

  return (
    <div className="relative w-full" ref={mapContainerRef}>
      {/* Main SVG Map */}
      <div className="relative bg-gray-50 rounded-xl shadow-md overflow-hidden">
        <svg
          viewBox={mapViewbox.toString()}
          className="w-full h-auto"
          aria-label="DFW Service Area Map"
          role="img"
        >
          {/* Background */}
          <rect
            x="0"
            y="0"
            width={mapViewbox.width}
            height={mapViewbox.height}
            fill="#EEF2F7"
          />
          
          {/* Map title */}
          <text
            x="125"
            y="15"
            textAnchor="middle"
            fill="#333"
            fontSize="10"
            fontWeight="bold"
          >
            DFW Metroplex Service Coverage
          </text>
          
          {/* Map regions */}
          {dfwMapData.map((region) => (
            <g key={region.id}>
              <path
                d={region.path}
                fill={getRegionFill(region)}
                stroke="#fff"
                strokeWidth="2"
                onClick={() => handleRegionClick(region)}
                onMouseEnter={() => setHoverRegion(region.id)}
                onMouseLeave={() => setHoverRegion(null)}
                style={{
                  cursor: 'pointer',
                  transition: 'fill 0.3s ease'
                }}
                aria-label={`${region.name} - ${region.coverageLevel} coverage`}
                role="button"
                tabIndex={0}
              />
              
              {/* Region label */}
              <text
                fontSize="6"
                fill="#fff"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="middle"
                pointerEvents="none"
                x={region.id === 'dallas' ? 150 : 
                   region.id === 'fortWorth' ? 80 :
                   region.id === 'arlington' ? 120 :
                   region.id === 'plano' ? 165 :
                   region.id === 'frisco' ? 175 :
                   parseInt(region.path.split(' ')[1].split(',')[0]) + 
                   parseInt(region.path.split(' ')[5].split(',')[0].slice(0, -1)) / 2}
                y={region.id === 'dallas' ? 120 :
                   region.id === 'fortWorth' ? 120 :
                   region.id === 'arlington' ? 135 :
                   region.id === 'plano' ? 60 :
                   region.id === 'frisco' ? 30 :
                   parseInt(region.path.split(' ')[1].split(',')[1]) + 
                   parseInt(region.path.split(' ')[5].split(',')[1].slice(0, -1)) / 2}
              >
                {region.name}
              </text>
            </g>
          ))}
          
          {/* Legend */}
          <g transform="translate(190, 150)">
            <rect width="60" height="30" fill="#fff" rx="3" />
            <text x="4" y="10" fontSize="5" fontWeight="bold" fill="#333">Coverage</text>
            
            {/* Full coverage */}
            <rect x="4" y="15" width="8" height="4" fill={coverageLevelColors.full} />
            <text x="15" y="18" fontSize="4" fill="#333">Full</text>
            
            {/* Partial coverage */}
            <rect x="30" y="15" width="8" height="4" fill={coverageLevelColors.partial} />
            <text x="41" y="18" fontSize="4" fill="#333">Partial</text>
          </g>
        </svg>
      </div>
      
      {/* Mobile Detail Panel (Slides up from bottom) */}
      {isMobile && (
        <div className="relative">
          <AnimatePresence>
            {selectedRegion && (
              <>
                {/* Pull tab when not expanded */}
                {!isDetailOpen && (
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: 0 }}
                    exit={{ y: 20 }}
                    className="absolute left-0 right-0 -bottom-10 flex justify-center"
                  >
                    <button
                      onClick={toggleDetails}
                      className="bg-white rounded-b-lg shadow-md px-4 py-2 flex items-center gap-2 text-sm font-medium text-gray-700"
                    >
                      <span>{selectedRegion.name} Details</span>
                      <ChevronUp className="h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              
                {/* Full detail panel when expanded */}
                {isDetailOpen && (
                  <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="absolute left-0 right-0 top-full bg-white rounded-t-xl shadow-lg z-10"
                  >
                    <div className="relative p-4 pt-10">
                      {/* Handle bar for sliding */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-200 rounded-full"></div>
                      
                      {/* Close button */}
                      <button
                        onClick={handleCloseDetails}
                        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-gray-700"
                        aria-label="Close details"
                      >
                        <X className="h-5 w-5" />
                      </button>
                      
                      {/* Region details */}
                      <MobileRegionDetail region={selectedRegion} />
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>
      )}
      
      {/* Desktop Detail Panel (Side panel) */}
      {!isMobile && (
        <div className="relative">
          <AnimatePresence>
            {selectedRegion && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute top-0 -right-4 w-80 bg-white rounded-xl shadow-lg transform translate-x-full p-6"
              >
                {/* Close button */}
                <button
                  onClick={handleCloseDetails}
                  className="absolute top-3 right-3 p-1 text-gray-500 hover:text-gray-700"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </button>
                
                {/* Region details */}
                <DesktopRegionDetail region={selectedRegion} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

// Mobile detail view component
const MobileRegionDetail = ({ region }: { region: DFWMapRegion }) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <div className={`w-3 h-3 rounded-full bg-${region.coverageLevel === 'full' ? 'primary' : 'blue-400'}`}></div>
      <h3 className="text-xl font-bold">{region.name}</h3>
    </div>
    
    <div className="flex items-center text-sm text-gray-600 space-x-4">
      <div className="flex items-center">
        <CheckCircle className="h-4 w-4 text-primary mr-1" />
        <span>{region.coverageLevel === 'full' ? 'Full' : 'Partial'} coverage</span>
      </div>
      
      <div className="flex items-center">
        <Clock className="h-4 w-4 text-primary mr-1" />
        <span>{region.responseTime}</span>
      </div>
    </div>
    
    <p className="text-gray-700 text-sm">{region.description}</p>
    
    <div>
      <h4 className="font-medium text-gray-800 mb-1 text-sm">Key Areas Served:</h4>
      <ul className="grid grid-cols-2 gap-1">
        {region.keyLocations.map((location, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <MapPin className="h-3 w-3 text-primary mr-1 flex-shrink-0" />
            <span>{location}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="pt-4">
      <a
        href="#contact"
        className="w-full inline-flex justify-center items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Request Service in {region.name}
      </a>
    </div>
  </div>
);

// Desktop detail view component
const DesktopRegionDetail = ({ region }: { region: DFWMapRegion }) => (
  <div className="space-y-4">
    <div>
      <div className="flex items-center space-x-2 mb-1">
        <div className={`w-3 h-3 rounded-full ${region.coverageLevel === 'full' ? 'bg-primary' : 'bg-blue-400'}`}></div>
        <h3 className="text-xl font-bold">{region.name}</h3>
      </div>
      
      <div className="flex items-center text-sm text-gray-600 space-x-4">
        <div className="flex items-center">
          <CheckCircle className="h-4 w-4 text-primary mr-1" />
          <span>{region.coverageLevel === 'full' ? 'Full' : 'Partial'} coverage</span>
        </div>
        
        <div className="flex items-center">
          <Clock className="h-4 w-4 text-primary mr-1" />
          <span>{region.responseTime}</span>
        </div>
      </div>
    </div>
    
    <p className="text-gray-700 text-sm">{region.description}</p>
    
    <div>
      <h4 className="font-medium text-gray-800 mb-2 text-sm">Key Areas Served:</h4>
      <ul className="space-y-1">
        {region.keyLocations.map((location, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <MapPin className="h-3 w-3 text-primary mr-1 flex-shrink-0" />
            <span>{location}</span>
          </li>
        ))}
      </ul>
    </div>
    
    {region.zipCodes && (
      <div>
        <h4 className="font-medium text-gray-800 mb-1 text-sm">Zip Codes:</h4>
        <p className="text-sm text-gray-600">{region.zipCodes.join(', ')}</p>
      </div>
    )}
    
    <div className="pt-2">
      <a
        href="#contact"
        className="w-full inline-flex justify-center items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Request Service in {region.name}
      </a>
    </div>
  </div>
);

export default DFWMap; 