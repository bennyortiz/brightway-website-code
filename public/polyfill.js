/**
 * Modern browser feature detection and conditional polyfill loading
 * 
 * This script checks if the current browser needs polyfills and
 * only loads them if necessary, avoiding unnecessary JavaScript
 * for modern browsers.
 */

(function() {
  // Modern features to detect
  var hasRequiredFeatures = (
    'noModule' in HTMLScriptElement.prototype &&
    'fromEntries' in Object &&
    'flatMap' in Array.prototype &&
    'Promise' in window &&
    'finally' in Promise.prototype &&
    'matchAll' in String.prototype &&
    'entries' in Object &&
    'replaceAll' in String.prototype
  );

  // Only load polyfills for older browsers
  if (!hasRequiredFeatures) {
    console.debug('Legacy browser detected, loading polyfills');
    
    // Create and add the script element
    var script = document.createElement('script');
    // Use locally bundled version instead of CDN to avoid third-party request
    script.src = '/_next/static/chunks/polyfills/core-js-bundle.min.js';
    script.async = true;
    script.defer = true;
    script.onload = function() {
      console.debug('Polyfills loaded successfully');
    };
    script.onerror = function() {
      console.warn('Failed to load polyfills, but site functionality should not be affected');
    };
    
    document.head.appendChild(script);
  } else {
    console.debug('Modern browser detected, skipping polyfills');
  }
})(); 