'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 py-4 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary relative z-20">
          Brightway Cleaning
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="#services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link 
            href="#contact" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow transition-colors hover:bg-primary-90"
          >
            Get a Quote
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 relative z-20" 
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right">
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden p-5">
              <div className="pt-12 pb-6 space-y-6">
                <div className="space-y-6">
                  <Link 
                    href="#services" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    href="#about" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="#testimonials" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link 
                    href="#contact" 
                    className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    href="#contact"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-90"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 