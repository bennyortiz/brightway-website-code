'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../../Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navigation style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav
        className={`w-full fixed top-0 z-50 transition-all duration-300 
        ${
          scrolled || isOpen
            ? 'bg-white border-b border-gray-200 py-4 md:py-4'
            : 'bg-transparent py-5 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Logo textSize="lg" />

            {/* Desktop Navigation */}
            <DesktopMenu scrolled={scrolled} isOpen={isOpen} />

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-primary p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation; 