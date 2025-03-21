'use client';

import { ReactNode, useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { ScrollProgressBar } from '../animations/scroll-progress';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // Add state to track if we're in a mobile viewport
  const [isMobile, setIsMobile] = useState(false);
  // Get current pathname to check if we're on the home page
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  // Create a ref for the main content
  const mainRef = useRef<HTMLDivElement>(null);

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
      <ScrollProgressBar containerRef={mainRef} />
      <Navigation />
      {/* Add padding-top to account for fixed header, except on the home page */}
      <main
        ref={mainRef}
        className={`flex-grow ${!isHomePage ? (isMobile ? 'pt-20' : 'pt-24') : ''}`}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
