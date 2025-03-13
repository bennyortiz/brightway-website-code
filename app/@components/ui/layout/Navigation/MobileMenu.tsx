import Link from 'next/link';
import { navigationItems } from '@/app/@lib/constants/navigationItems';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden w-full fixed top-0 left-0 right-0 z-40 transition-all duration-150 ease-in-out ${
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
                className="text-gray-800 hover:text-primary py-2.5 font-medium text-lg transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA Button */}
            <div className="py-2">
              <Link
                href="#contact"
                className="inline-flex w-full h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white shadow transition-colors duration-150 hover:bg-primary-dark"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 