/**
 * Custom hook for responsive design media queries
 * Based on CSS breakpoints used in the project
 */

import { useState, useEffect } from 'react';

/**
 * Media query breakpoints
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

type BreakpointKey = keyof typeof breakpoints;

/**
 * Hook to check if the current viewport matches the specified media query
 *
 * @param query - CSS media query string or breakpoint key
 * @returns boolean indicating if the media query matches
 *
 * @example
 * // Using predefined breakpoint
 * const isDesktop = useMediaQuery('lg');
 *
 * @example
 * // Using custom media query
 * const isPortrait = useMediaQuery('(orientation: portrait)');
 */
export function useMediaQuery(query: BreakpointKey | string): boolean {
  // Check if we're on the client side (browser)
  const isClient = typeof window === 'object';

  // Format the query if it's a breakpoint key
  const mediaQuery = Object.keys(breakpoints).includes(query as BreakpointKey)
    ? `(min-width: ${breakpoints[query as BreakpointKey]})`
    : query;

  // Initialize state with the match value or false if on server
  const [matches, setMatches] = useState<boolean>(() => {
    if (!isClient) return false;
    return window.matchMedia(mediaQuery).matches;
  });

  // Effect to add listener and update state when matches change
  useEffect(() => {
    if (!isClient) return;

    const mediaQueryList = window.matchMedia(mediaQuery);

    // Handler function to update state
    const updateMatches = () => setMatches(mediaQueryList.matches);

    // Add listener
    mediaQueryList.addEventListener('change', updateMatches);

    // Clean up listener on unmount
    return () => {
      mediaQueryList.removeEventListener('change', updateMatches);
    };
  }, [mediaQuery, isClient]);

  return matches;
}
