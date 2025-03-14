'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals';

type MetricName = 'CLS' | 'FID' | 'LCP' | 'FCP' | 'TTFB';
type MetricValue = { name: MetricName; value: number; id: string };

/**
 * Send metrics to analytics or any endpoint
 * This function can be customized based on your analytics provider
 */
const sendMetric = (metric: MetricValue) => {
  // This is where you would send metrics to your analytics service
  // Examples:
  // - Google Analytics: gtag('event', name, { value, event_category: 'Web Vitals' })
  // - Custom endpoint: fetch('/api/vitals', { method: 'POST', body: JSON.stringify(metric) })
  
  // For development, just log to console
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Web Vitals] ${metric.name}: ${metric.value}`);
  }

  // Production reporting - uncomment and customize based on your needs
  /* 
  const url = '/api/vitals';
  const body = JSON.stringify(metric);
  
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
  } else {
    fetch(url, { body, method: 'POST', keepalive: true });
  }
  */
};

/**
 * WebVitals Component
 * 
 * This component monitors Core Web Vitals metrics and reports them.
 * It doesn't render anything visible but works in the background.
 * 
 * Place this component in your root layout or on specific pages
 * where you want to track performance.
 */
export default function WebVitals() {
  useEffect(() => {
    // Get URL path excluding query string
    const pathname = window.location.pathname;
    
    // Core Web Vitals
    onCLS((metric) => sendMetric({ name: 'CLS', value: metric.value, id: metric.id }));
    onFID((metric) => sendMetric({ name: 'FID', value: metric.value, id: metric.id }));
    onLCP((metric) => sendMetric({ name: 'LCP', value: metric.value, id: metric.id }));
    
    // Additional metrics
    onFCP((metric) => sendMetric({ name: 'FCP', value: metric.value, id: metric.id }));
    onTTFB((metric) => sendMetric({ name: 'TTFB', value: metric.value, id: metric.id }));
    
    // Report route change
    if (process.env.NODE_ENV === 'production') {
      console.log(`[Navigation] ${pathname}`);
    }
  }, []);

  // This component doesn't render anything
  return null;
} 