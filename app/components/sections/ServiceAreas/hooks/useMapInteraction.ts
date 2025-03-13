'use client';

import { useState, useRef, useEffect, RefObject } from 'react';

interface MapInteractionOptions {
  minZoom?: number;
  maxZoom?: number;
  zoomStep?: number;
  enablePan?: boolean;
  enableZoom?: boolean;
  enableTouchZoom?: boolean;
}

interface MapInteractionState {
  zoom: number;
  posX: number;
  posY: number;
}

interface MapInteractionReturn extends MapInteractionState {
  containerRef: RefObject<HTMLDivElement>;
  resetView: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  isPanning: boolean;
}

/**
 * Custom hook for interactive map behaviors including:
 * - Zoom in/out functionality
 * - Pan/drag navigation
 * - Touch gestures support
 * - Reset view capability
 */
export const useMapInteraction = (options: MapInteractionOptions = {}): MapInteractionReturn => {
  const {
    minZoom = 1,
    maxZoom = 4,
    zoomStep = 0.5,
    enablePan = true,
    enableZoom = true,
    enableTouchZoom = true,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<MapInteractionState>({
    zoom: 1,
    posX: 0,
    posY: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);

  // Reset view to initial state
  const resetView = () => {
    setState({
      zoom: 1,
      posX: 0,
      posY: 0,
    });
  };

  // Zoom in by zoomStep
  const zoomIn = () => {
    if (!enableZoom) return;
    
    setState((prev) => ({
      ...prev,
      zoom: Math.min(prev.zoom + zoomStep, maxZoom),
    }));
  };

  // Zoom out by zoomStep
  const zoomOut = () => {
    if (!enableZoom) return;
    
    setState((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - zoomStep, minZoom),
    }));
  };

  // Handle mouse wheel zoom
  useEffect(() => {
    if (!enableZoom || !containerRef.current) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
      
      setState((prev) => ({
        ...prev,
        zoom: Math.min(Math.max(prev.zoom + delta, minZoom), maxZoom),
      }));
    };

    const element = containerRef.current;
    element.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      element.removeEventListener('wheel', handleWheel);
    };
  }, [enableZoom, minZoom, maxZoom, zoomStep]);

  // Handle mouse drag for panning
  useEffect(() => {
    if (!enablePan || !containerRef.current) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartPos({ x: e.clientX, y: e.clientY });
      setIsPanning(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;
      
      setState((prev) => ({
        ...prev,
        posX: prev.posX + deltaX,
        posY: prev.posY + deltaY,
      }));
      
      setStartPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsPanning(false);
    };

    const element = containerRef.current;
    element.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [enablePan, isDragging, startPos]);

  // Handle touch events for mobile
  useEffect(() => {
    if (!containerRef.current || !enableTouchZoom) return;

    let initialDistance = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Get initial pinch distance
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        initialDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
      } else if (e.touches.length === 1 && enablePan) {
        // Handle single touch for panning
        setIsDragging(true);
        setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setIsPanning(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Pinch-to-zoom
        e.preventDefault();
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const currentDistance = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
        
        if (initialDistance > 0) {
          const delta = (currentDistance - initialDistance) / 100;
          setState((prev) => ({
            ...prev,
            zoom: Math.min(Math.max(prev.zoom + delta, minZoom), maxZoom),
          }));
          initialDistance = currentDistance;
        }
      } else if (e.touches.length === 1 && isDragging && enablePan) {
        // Single touch panning
        const deltaX = e.touches[0].clientX - startPos.x;
        const deltaY = e.touches[0].clientY - startPos.y;
        
        setState((prev) => ({
          ...prev,
          posX: prev.posX + deltaX,
          posY: prev.posY + deltaY,
        }));
        
        setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const handleTouchEnd = () => {
      initialDistance = 0;
      setIsDragging(false);
      setIsPanning(false);
    };

    const element = containerRef.current;
    element.addEventListener('touchstart', handleTouchStart, { passive: true });
    element.addEventListener('touchmove', handleTouchMove, { passive: false });
    element.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('touchmove', handleTouchMove);
      element.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enableTouchZoom, enablePan, isDragging, startPos, minZoom, maxZoom]);

  return {
    ...state,
    containerRef,
    resetView,
    zoomIn,
    zoomOut,
    isPanning,
  };
}; 