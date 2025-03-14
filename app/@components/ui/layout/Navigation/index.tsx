'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Logo from '@/app/@components/ui/Logo';
import { Container } from '@/app/@components/ui/layout';

const Navigation = () => {
  // Initialize with default values that match the server-side rendering
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Add state to track if component is mounted to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true once the component is mounted to the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll event to change navigation style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Use a consistent class on first render to avoid hydration mismatch
  const headerClass = isMounted 
    ? `sticky top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-3 md:py-4'
      }`
    : 'sticky top-0 w-full z-40 transition-all duration-300 bg-white/90 py-3 md:py-4';

  return (
    <header className={headerClass}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Brightway Cleaning - Home" className="block">
              <Logo textSize="md" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <DesktopMenu scrolled={isScrolled} isOpen={isMobileMenuOpen} />
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2">
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navigation; 