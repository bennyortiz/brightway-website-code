/**
 * DFW Map Region Interface
 * Defines a geographic region in the DFW metroplex with service information
 */
export interface DFWMapRegion {
  id: string;                                  // Unique identifier
  name: string;                                // Display name
  path: string;                                // SVG path for the region
  coverageLevel: 'full' | 'partial' | 'limited'; // Service coverage level
  description: string;                         // Area description
  keyLocations: string[];                      // Notable locations within the area
  responseTime: string;                        // Typical service response time
  zipCodes?: string[];                         // Optional zip codes covered
}

/**
 * DFW Map Data
 * Contains comprehensive information about service areas in the DFW metroplex
 * Includes SVG path data, service details, and coverage information
 */
export const dfwMapData: DFWMapRegion[] = [
  {
    id: 'dallas',
    name: 'Dallas',
    path: 'M120,100 L170,80 L190,120 L160,150 L120,140 Z',
    coverageLevel: 'full',
    description: "Comprehensive cleaning services throughout Dallas, covering downtown business districts, corporate offices, and commercial spaces.",
    keyLocations: [
      'Downtown Dallas',
      'Uptown',
      'Deep Ellum',
      'Design District',
    ],
    responseTime: 'Same day',
    zipCodes: ['75201', '75202', '75204', '75207'],
  },
  {
    id: 'fortWorth',
    name: 'Fort Worth',
    path: 'M60,110 L100,90 L110,130 L80,150 L50,140 Z',
    coverageLevel: 'full',
    description: "Complete cleaning solutions for Fort Worth businesses, from downtown to the cultural district and surrounding commercial areas.",
    keyLocations: [
      'Downtown Fort Worth',
      'Cultural District',
      'Stockyards',
      'South Main',
    ],
    responseTime: 'Same day',
    zipCodes: ['76102', '76104', '76107', '76111'],
  },
  {
    id: 'arlington',
    name: 'Arlington',
    path: 'M110,120 L140,110 L150,140 L120,160 L100,150 Z',
    coverageLevel: 'full',
    description: "Professional cleaning services for Arlington businesses, entertainment venues, and commercial properties.",
    keyLocations: [
      'Entertainment District',
      'Downtown Arlington',
      'University Area',
      'Highway 360 Corridor',
    ],
    responseTime: 'Same day',
    zipCodes: ['76010', '76011', '76012', '76013'],
  },
  {
    id: 'irving',
    name: 'Irving',
    path: 'M90,80 L120,70 L130,100 L110,110 L90,100 Z',
    coverageLevel: 'full',
    description: "Tailored cleaning solutions for Irving's Las Colinas business district and surrounding commercial areas.",
    keyLocations: [
      'Las Colinas',
      'Irving Convention Center',
      'DFW Airport Area',
      'Valley Ranch',
    ],
    responseTime: 'Same day',
    zipCodes: ['75038', '75039', '75062', '75063'],
  },
  {
    id: 'plano',
    name: 'Plano',
    path: 'M150,50 L180,40 L190,70 L160,80 L140,70 Z',
    coverageLevel: 'full',
    description: "Premium cleaning services for Plano's corporate headquarters, retail centers, and business parks.",
    keyLocations: [
      'Legacy Business Park',
      'Downtown Plano',
      'Shops at Legacy',
      'Granite Park',
    ],
    responseTime: 'Same day',
    zipCodes: ['75023', '75024', '75025', '75075'],
  },
  {
    id: 'frisco',
    name: 'Frisco',
    path: 'M160,20 L190,10 L200,40 L170,50 L150,40 Z',
    coverageLevel: 'full',
    description: "Expert cleaning solutions for Frisco's rapidly growing business community, sports venues, and retail spaces.",
    keyLocations: [
      'The Star',
      'Frisco Square',
      'Hall Park',
      'IKEA Area',
    ],
    responseTime: 'Same day',
    zipCodes: ['75033', '75034', '75035', '75036'],
  },
  {
    id: 'mckinney',
    name: 'McKinney',
    path: 'M190,30 L220,20 L230,50 L200,60 L180,50 Z',
    coverageLevel: 'full',
    description: "Reliable cleaning services for McKinney's historic downtown, new developments, and commercial properties.",
    keyLocations: [
      'Historic Downtown',
      'Craig Ranch',
      'Adriatica Village',
      'McKinney Corporate Center',
    ],
    responseTime: 'Same day',
    zipCodes: ['75069', '75070', '75071', '75072'],
  },
  {
    id: 'richardson',
    name: 'Richardson',
    path: 'M140,70 L170,60 L180,90 L150,100 L130,90 Z',
    coverageLevel: 'full',
    description: "Specialized cleaning for Richardson's Telecom Corridor and surrounding business centers.",
    keyLocations: [
      'Telecom Corridor',
      'CityLine',
      'Richardson Heights',
      'University of Texas at Dallas',
    ],
    responseTime: 'Same day',
    zipCodes: ['75080', '75081', '75082', '75083'],
  },
  {
    id: 'lewisville',
    name: 'Lewisville',
    path: 'M80,50 L110,40 L120,70 L90,80 L70,70 Z',
    coverageLevel: 'full',
    description: "Comprehensive cleaning services for Lewisville businesses, retail centers, and commercial properties.",
    keyLocations: [
      'Vista Ridge Mall area',
      'Old Town',
      'Business 121 corridor',
      'Lewisville Lake area',
    ],
    responseTime: 'Same day',
    zipCodes: ['75029', '75056', '75057', '75067'],
  },
  {
    id: 'carrollton',
    name: 'Carrollton',
    path: 'M110,60 L140,50 L150,80 L120,90 L100,80 Z',
    coverageLevel: 'full',
    description: "Professional cleaning for Carrollton's diverse business community and commercial centers.",
    keyLocations: [
      'Downtown Carrollton',
      'Trinity Mills area',
      'Carrollton Business Park',
      'Frankford corridor',
    ],
    responseTime: 'Same day',
    zipCodes: ['75006', '75007', '75010', '75011'],
  },
  {
    id: 'bedford',
    name: 'Bedford',
    path: 'M80,80 L100,70 L110,90 L90,100 L80,90 Z',
    coverageLevel: 'full',
    description: "Quality cleaning services throughout Bedford's business district and commercial properties.",
    keyLocations: [
      'Central Bedford',
      'Bedford Commons',
      'Hospital District',
      'HEB area',
    ],
    responseTime: 'Same day',
    zipCodes: ['76021', '76022', '76095'],
  },
  {
    id: 'grapevine',
    name: 'Grapevine',
    path: 'M70,60 L90,50 L100,70 L80,80 L60,70 Z',
    coverageLevel: 'full',
    description: "Exceptional cleaning solutions for Grapevine's historic downtown, wineries, and commercial spaces.",
    keyLocations: [
      'Historic Downtown',
      'Grapevine Mills area',
      'DFW Airport',
      'Grapevine Lake area',
    ],
    responseTime: 'Same day',
    zipCodes: ['76051', '76092', '76099'],
  },
  {
    id: 'garland',
    name: 'Garland',
    path: 'M170,80 L200,70 L210,100 L180,110 L160,100 Z',
    coverageLevel: 'partial',
    description: "Efficient cleaning services for Garland's industrial parks, business centers, and commercial properties.",
    keyLocations: [
      'Downtown Garland',
      'Firewheel area',
      'Industrial district',
      'South Garland',
    ],
    responseTime: 'Next day',
    zipCodes: ['75040', '75041', '75042', '75043'],
  },
  {
    id: 'mesquite',
    name: 'Mesquite',
    path: 'M180,110 L210,100 L220,130 L190,140 L170,130 Z',
    coverageLevel: 'partial',
    description: "Reliable cleaning solutions for Mesquite's retail corridors and business areas.",
    keyLocations: [
      'Town East Mall area',
      'Downtown Mesquite',
      'Industrial district',
      'Military Parkway corridor',
    ],
    responseTime: 'Next day',
    zipCodes: ['75149', '75150', '75181', '75182'],
  },
  {
    id: 'denton',
    name: 'Denton',
    path: 'M50,20 L80,10 L90,40 L60,50 L40,40 Z',
    coverageLevel: 'partial',
    description: "Professional cleaning for Denton's university areas, square, and commercial properties.",
    keyLocations: [
      'Downtown Square',
      'UNT area',
      'TWU area',
      'Denton Enterprise Airport area',
    ],
    responseTime: 'Next day',
    zipCodes: ['76201', '76203', '76205', '76207'],
  },
  {
    id: 'southlake',
    name: 'Southlake',
    path: 'M70,70 L90,65 L95,85 L75,90 L65,85 Z',
    coverageLevel: 'full',
    description: "Premium cleaning services for Southlake's upscale shopping districts and business centers.",
    keyLocations: [
      'Southlake Town Square',
      'Gateway Plaza',
      'Central Business District',
      'Bicentennial Park area',
    ],
    responseTime: 'Same day',
    zipCodes: ['76092'],
  },
  {
    id: 'allen',
    name: 'Allen',
    path: 'M160,40 L180,30 L190,50 L170,60 L160,50 Z',
    coverageLevel: 'partial',
    description: "Comprehensive cleaning solutions for Allen's retail centers and business parks.",
    keyLocations: [
      'Allen Premium Outlets',
      'The Village at Allen',
      'Watters Creek',
      'Allen Technology District',
    ],
    responseTime: 'Next day',
    zipCodes: ['75002', '75013'],
  },
];

/**
 * Map Viewbox Configuration
 * Defines the SVG viewbox parameters for properly displaying the map
 */
export const mapViewbox = {
  minX: 0,
  minY: 0,
  width: 250,
  height: 180,
  toString: () => `${0} ${0} ${250} ${180}`,
};

/**
 * Coverage Level Color Mapping
 * Defines colors for different coverage levels on the map
 */
export const coverageLevelColors = {
  full: '#0070f3',      // Primary blue for full coverage
  partial: '#38bdf8',   // Lighter blue for partial coverage
  limited: '#93c5fd',   // Very light blue for limited coverage
  selected: '#f97316',  // Accent orange for highlighting selected area
  hover: '#6366f1',     // Hover state color
}; 