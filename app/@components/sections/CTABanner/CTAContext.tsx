import React, { createContext, useContext, ReactNode } from 'react';

// Define the types of backgrounds we support
export type BackgroundColor = 'white' | 'gray-50' | 'blue-50';

// Create a context to keep track of the current and next background color
interface CTAContextType {
  currentBackground: BackgroundColor;
  setNextBackground: (background: BackgroundColor) => void;
}

const CTAContext = createContext<CTAContextType | undefined>(undefined);

interface CTAContextProviderProps {
  children: ReactNode;
  initialBackground?: BackgroundColor;
}

/**
 * CTAContextProvider
 * 
 * This provider keeps track of the current background color of sections
 * and allows CTA banners and other components to adapt their styling accordingly.
 * 
 * Usage:
 * 1. Wrap your page content with this provider
 * 2. Use the useCtaBackground hook in section components to get/set the background color
 * 3. CTA banners can automatically adapt to the current background
 */
export const CTAContextProvider: React.FC<CTAContextProviderProps> = ({ 
  children, 
  initialBackground = 'white' 
}) => {
  const [currentBackground, setCurrentBackground] = React.useState<BackgroundColor>(initialBackground);
  
  const setNextBackground = (background: BackgroundColor) => {
    setCurrentBackground(background);
  };
  
  return (
    <CTAContext.Provider value={{ currentBackground, setNextBackground }}>
      {children}
    </CTAContext.Provider>
  );
};

/**
 * useCtaBackground hook
 * 
 * Use this hook in section components to:
 * 1. Get the current background color
 * 2. Set the next background color for the following component
 */
export const useCtaBackground = (): CTAContextType => {
  const context = useContext(CTAContext);
  if (context === undefined) {
    throw new Error('useCtaBackground must be used within a CTAContextProvider');
  }
  return context;
};

export default CTAContextProvider; 