'use client';

import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Brightway Cleaning</h3>
            <p className="text-gray-400">
              Professional commercial cleaning services with a focus on quality and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <FiTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Industrial Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Sanitization
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Cleaning Street</p>
              <p>Business District, City 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@brightwaycleaning.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Brightway Cleaning. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 