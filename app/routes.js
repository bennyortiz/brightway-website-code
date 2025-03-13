/**
 * Routes Definition File
 *
 * This file defines all application routes to help Next.js optimize
 * routing and provides better static generation capabilities.
 */

export const routes = {
  // Main pages
  home: "/",
  aboutUs: "/about-us",
  services: "/services",
  contact: "/contact",
  
  // Legal pages
  termsOfService: "/terms-of-service",
  privacyPolicy: "/privacy-policy",
  cookiePolicy: "/cookie-policy",
  
  // Service area pages
  serviceAreas: {
    root: "/service-areas",
    // Add specific service area routes here when created
  },
  
  // Direct anchor links
  anchors: {
    getQuote: "/#contact",
    exploreServices: "/#services",
    whyChooseUs: "/#why-choose-us",
    testimonials: "/#testimonials",
    faq: "/#faq"
  }
};

/**
 * Helper method to get a route by name
 */
export function getRoute(name) {
  return routes[name] || "/";
}

/**
 * Get an anchor link
 */
export function getAnchor(name) {
  return routes.anchors[name] || "/";
}

export default routes; 