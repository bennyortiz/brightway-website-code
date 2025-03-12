'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/app/constants/siteConfig';
import { navigationItems } from '@/app/constants/navigationItems';

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
            <Link href="/" className="text-2xl font-bold text-primary">
              {siteConfig.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Navigation Links */}
              <div className="flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors ${
                      scrolled || isOpen
                        ? 'text-gray-800 hover:text-primary'
                        : 'text-gray-800 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-white shadow transition-colors hover:bg-primary-dark"
              >
                Get a Quote
              </Link>
            </div>

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

      {/* Mobile menu - Sliding down animation */}
      <div
        className={`md:hidden w-full fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{
          transform: isOpen ? 'translateY(64px)' : 'translateY(40px)',
          transitionProperty: 'transform, opacity, visibility',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-primary py-2.5 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <div className="py-2">
                <Link
                  href="#contact"
                  className="inline-flex w-full h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white shadow transition-colors hover:bg-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
