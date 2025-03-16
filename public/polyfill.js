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
    script.src = '/static/chunks/polyfills/core-js-bundle.min.js';
    script.async = false; // Changed to false to ensure it loads before other scripts
    script.defer = false; // Changed to false to ensure it loads before other scripts
    script.onload = function() {
      console.debug('Polyfills loaded successfully');
      // Force a refresh of the page if needed
      // window.location.reload();
    };
    script.onerror = function() {
      console.warn('Failed to load polyfills, but site functionality should not be affected');
    };
    
    // Add to head at the beginning for fastest loading
    var head = document.getElementsByTagName('head')[0];
    if (head.firstChild) {
      head.insertBefore(script, head.firstChild);
    } else {
      head.appendChild(script);
    }
  } else {
    console.debug('Modern browser detected, skipping polyfills');
  }
})(); 