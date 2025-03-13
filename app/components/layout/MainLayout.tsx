'use client';

import { ReactNode, useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { ScrollProgressBar } from '../ui/animations/scroll-progress';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // Add state to track if we're in a mobile viewport
  const [isMobile, setIsMobile] = useState(false);

  // Use effect to detect viewport size and set appropriate padding
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <Navigation />
      {/* Add padding-top to account for fixed header, with different values for mobile and desktop */}
      <main className={`flex-grow ${isMobile ? 'pt-20' : 'pt-24'}`}>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
