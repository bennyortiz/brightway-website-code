import Link from 'next/link';
import { navigationItems } from '@/app/@lib/constants/navigationItems';

// Helper to determine which links should be prefetched
const shouldPrefetch = (href: string): boolean => {
  // Prefetch home and full page destinations, not anchor links
  return href === '/' || !href.startsWith('#');
};

interface DesktopMenuProps {
  scrolled: boolean;
  isOpen: boolean;
}

const DesktopMenu = ({ scrolled, isOpen }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {/* Navigation Links */}
      <div className="flex space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            prefetch={shouldPrefetch(item.href)}
            className={`font-medium transition-colors duration-150 ${
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
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 font-medium text-white shadow transition-colors duration-150 hover:bg-primary-dark"
      >
        Get a Quote
      </Link>
    </div>
  );
};

export default DesktopMenu; 