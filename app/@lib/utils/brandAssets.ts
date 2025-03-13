/**
 * Brand Assets Generation System
 * 
 * This utility generates consistent brand assets that adapt based on
 * site configuration and styling variables. If the site is repurposed
 * for a different business, the assets will automatically adapt.
 */

import { siteConfig } from '../constants/siteConfig';

// Types for various brand assets
export interface BrandColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  secondaryLight: string;
  secondaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  text: string;
  background: string;
  success: string;
  error: string;
  warning: string;
  info: string;
}

export interface Typography {
  fontFamily: string;
  fontFamilyFallback: string;
  headingFontFamily: string;
  bodyFontFamily: string;
  fontWeights: {
    regular: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface BrandAssets {
  colors: BrandColors;
  typography: Typography;
  logoConfiguration: {
    text: string;
    tagline: string;
    showTagline: boolean;
    iconType: 'text' | 'icon' | 'mixed';
    accentColor: string;
  };
}

// Default brand colors from Tailwind config
const defaultBrandColors: BrandColors = {
  primary: '#0070f3',
  primaryLight: '#3291ff',
  primaryDark: '#0050a3',
  secondary: '#10b981',
  secondaryLight: '#36d6a5',
  secondaryDark: '#0b8b61',
  accent: '#f59e0b',
  accentLight: '#fabb51',
  accentDark: '#c47c08',
  text: '#374151',
  background: '#ffffff',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#eab308',
  info: '#3b82f6',
};

// Default typography settings
const defaultTypography: Typography = {
  fontFamily: 'Plus Jakarta Sans Variable',
  fontFamilyFallback: 'system-ui, sans-serif',
  headingFontFamily: 'Plus Jakarta Sans Variable, system-ui, sans-serif',
  bodyFontFamily: 'Plus Jakarta Sans Variable, system-ui, sans-serif',
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

/**
 * Get the brand configuration for asset generation
 */
export function getBrandAssetsConfig(): BrandAssets {
  return {
    colors: defaultBrandColors,
    typography: defaultTypography,
    logoConfiguration: {
      text: siteConfig.name,
      tagline: siteConfig.tagline,
      showTagline: true,
      iconType: 'text', // Default to text-based logo
      accentColor: defaultBrandColors.accent,
    },
  };
}

/**
 * Generate a CSS string with brand variables for use in the assets
 */
export function generateBrandCSS(): string {
  const brand = getBrandAssetsConfig();
  
  return `
    :root {
      --brand-primary: ${brand.colors.primary};
      --brand-primary-light: ${brand.colors.primaryLight};
      --brand-primary-dark: ${brand.colors.primaryDark};
      --brand-secondary: ${brand.colors.secondary};
      --brand-accent: ${brand.colors.accent};
      --brand-text: ${brand.colors.text};
      --brand-background: ${brand.colors.background};
      
      --brand-font-family: "${brand.typography.fontFamily}", ${brand.typography.fontFamilyFallback};
      --brand-heading-font-family: "${brand.typography.headingFontFamily}";
      --brand-font-weight-regular: ${brand.typography.fontWeights.regular};
      --brand-font-weight-medium: ${brand.typography.fontWeights.medium};
      --brand-font-weight-semibold: ${brand.typography.fontWeights.semibold};
      --brand-font-weight-bold: ${brand.typography.fontWeights.bold};
    }
  `;
}

/**
 * Generate SVG for square logo asset
 */
export function generateSquareLogo(size: number = 500): string {
  const brand = getBrandAssetsConfig();
  const businessName = brand.logoConfiguration.text;
  
  // Extract first letter for simple icon if no custom icon
  const initial = businessName.charAt(0).toUpperCase();
  
  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" fill="${brand.colors.primary}" />
    <text x="${size/2}" y="${size/2}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${size/3}" font-weight="${brand.typography.fontWeights.bold}" fill="white" text-anchor="middle" dominant-baseline="middle">${initial}</text>
  </svg>
  `;
}

/**
 * Generate SVG for horizontal logo asset
 */
export function generateHorizontalLogo(width: number = 800, height: number = 200): string {
  const brand = getBrandAssetsConfig();
  const businessName = brand.logoConfiguration.text;
  const tagline = brand.logoConfiguration.tagline;
  const showTagline = brand.logoConfiguration.showTagline;
  
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${height}" height="${height}" fill="${brand.colors.primary}" />
    <text x="${height + 20}" y="${height/2 - (showTagline ? 15 : 0)}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/3}" font-weight="${brand.typography.fontWeights.bold}" fill="${brand.colors.text}" text-anchor="start" dominant-baseline="middle">${businessName}</text>
    ${showTagline ? `<text x="${height + 20}" y="${height/2 + 30}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/8}" font-weight="${brand.typography.fontWeights.medium}" fill="${brand.colors.primary}" text-anchor="start" dominant-baseline="middle">${tagline}</text>` : ''}
    <text x="${height/2}" y="${height/2}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/3}" font-weight="${brand.typography.fontWeights.bold}" fill="white" text-anchor="middle" dominant-baseline="middle">${businessName.charAt(0)}</text>
  </svg>
  `;
}

/**
 * Generate SVG for business card front
 */
export function generateBusinessCardFront(width: number = 1050, height: number = 600): string {
  const brand = getBrandAssetsConfig();
  const businessName = brand.logoConfiguration.text;
  const tagline = brand.logoConfiguration.tagline;
  
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${brand.colors.background}" />
    <rect width="${width/4}" height="${height}" fill="${brand.colors.primary}" />
    <text x="${width/8}" y="${height/2}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/16}" font-weight="${brand.typography.fontWeights.bold}" fill="white" text-anchor="middle" dominant-baseline="middle">${businessName.charAt(0)}</text>
    <text x="${width/4 + 40}" y="${height/2 - 40}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/15}" font-weight="${brand.typography.fontWeights.bold}" fill="${brand.colors.text}" text-anchor="start" dominant-baseline="middle">${businessName}</text>
    <text x="${width/4 + 40}" y="${height/2 + 20}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/30}" font-weight="${brand.typography.fontWeights.medium}" fill="${brand.colors.primary}" text-anchor="start" dominant-baseline="middle">${tagline}</text>
  </svg>
  `;
}

/**
 * Generate SVG for business card back
 */
export function generateBusinessCardBack(width: number = 1050, height: number = 600): string {
  const brand = getBrandAssetsConfig();
  const businessName = brand.logoConfiguration.text;
  const email = siteConfig.contact.email;
  const phone = siteConfig.contact.phone.display;
  const address = siteConfig.contact.address.full;
  const website = siteConfig.url.replace(/^https?:\/\//, '');
  
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="${brand.colors.primary}" />
    <rect x="30" y="30" width="${width - 60}" height="${height - 60}" fill="white" rx="5" ry="5" />
    <text x="${width/2}" y="100" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/18}" font-weight="${brand.typography.fontWeights.bold}" fill="${brand.colors.text}" text-anchor="middle" dominant-baseline="middle">${businessName}</text>
    
    <g font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/35}" fill="${brand.colors.text}">
      <text x="80" y="200" dominant-baseline="middle">Phone:</text>
      <text x="220" y="200" dominant-baseline="middle">${phone}</text>
      
      <text x="80" y="260" dominant-baseline="middle">Email:</text>
      <text x="220" y="260" dominant-baseline="middle">${email}</text>
      
      <text x="80" y="320" dominant-baseline="middle">Address:</text>
      <text x="220" y="320" dominant-baseline="middle">${address}</text>
      
      <text x="80" y="380" dominant-baseline="middle">Web:</text>
      <text x="220" y="380" dominant-baseline="middle">${website}</text>
    </g>
    
    <rect x="50" y="${height - 100}" width="${width - 100}" height="2" fill="${brand.colors.primary}" />
    <text x="${width/2}" y="${height - 60}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${width/50}" fill="${brand.colors.primary}" text-anchor="middle" dominant-baseline="middle">Professional • Reliable • Trusted</text>
  </svg>
  `;
}

/**
 * Generate SVG for social media profile image
 */
export function generateSocialProfileImage(size: number = 500): string {
  return generateSquareLogo(size);
}

/**
 * Generate SVG for email signature
 */
export function generateEmailSignature(width: number = 600, height: number = 200): string {
  const brand = getBrandAssetsConfig();
  const businessName = brand.logoConfiguration.text;
  const tagline = brand.logoConfiguration.tagline;
  const email = siteConfig.contact.email;
  const phone = siteConfig.contact.phone.display;
  const website = siteConfig.url.replace(/^https?:\/\//, '');
  
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${100}" height="${height}" fill="${brand.colors.primary}" />
    <text x="${100/2}" y="${height/2}" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/3}" font-weight="${brand.typography.fontWeights.bold}" fill="white" text-anchor="middle" dominant-baseline="middle">${businessName.charAt(0)}</text>
    
    <text x="${100 + 20}" y="50" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/5}" font-weight="${brand.typography.fontWeights.bold}" fill="${brand.colors.text}" text-anchor="start" dominant-baseline="middle">${businessName}</text>
    <text x="${100 + 20}" y="85" font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/8}" font-weight="${brand.typography.fontWeights.medium}" fill="${brand.colors.primary}" text-anchor="start" dominant-baseline="middle">${tagline}</text>
    
    <g font-family="${brand.typography.fontFamily}, ${brand.typography.fontFamilyFallback}" font-size="${height/12}" fill="${brand.colors.text}">
      <text x="${100 + 20}" y="120" dominant-baseline="middle">Email: ${email}</text>
      <text x="${100 + 20}" y="150" dominant-baseline="middle">Phone: ${phone}</text>
      <text x="${100 + 20}" y="180" dominant-baseline="middle">Web: ${website}</text>
    </g>
  </svg>
  `;
} 