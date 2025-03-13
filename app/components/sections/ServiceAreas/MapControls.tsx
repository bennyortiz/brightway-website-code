import React from 'react';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  className?: string;
}

/**
 * MapControls Component
 * 
 * Provides user interface controls for map interactions:
 * - Zoom in/out buttons
 * - Reset view button
 * - Current zoom level indicator
 */
const MapControls: React.FC<MapControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
  zoom,
  minZoom,
  maxZoom,
  className = '',
}) => {
  // Format zoom level for display (e.g., 100%, 150%, etc.)
  const zoomPercentage = Math.round(zoom * 100);
  
  // Determine if buttons should be disabled
  const isZoomInDisabled = zoom >= maxZoom;
  const isZoomOutDisabled = zoom <= minZoom;
  
  return (
    <div className={`flex flex-col bg-white rounded-lg shadow-md p-2 ${className}`}>
      {/* Zoom In */}
      <button
        onClick={onZoomIn}
        disabled={isZoomInDisabled}
        className={`p-2 rounded hover:bg-gray-100 transition-colors ${
          isZoomInDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Zoom in"
        title="Zoom in"
      >
        <ZoomIn className="h-5 w-5 text-gray-700" />
      </button>
      
      {/* Zoom Level Indicator */}
      <div className="text-xs font-medium text-gray-500 text-center py-1">
        {zoomPercentage}%
      </div>
      
      {/* Zoom Out */}
      <button
        onClick={onZoomOut}
        disabled={isZoomOutDisabled}
        className={`p-2 rounded hover:bg-gray-100 transition-colors ${
          isZoomOutDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        aria-label="Zoom out"
        title="Zoom out"
      >
        <ZoomOut className="h-5 w-5 text-gray-700" />
      </button>
      
      {/* Divider */}
      <div className="my-1 h-px bg-gray-200"></div>
      
      {/* Reset View */}
      <button
        onClick={onReset}
        className="p-2 rounded hover:bg-gray-100 transition-colors"
        aria-label="Reset view"
        title="Reset view"
      >
        <RefreshCw className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

export default MapControls; 