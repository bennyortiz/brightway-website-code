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
 * Contains all regions of the DFW metroplex with SVG paths and service information
 */
export const dfwMapData: DFWMapRegion[] = [
  {
    id: 'north-dallas',
    name: 'North Dallas',
    coverageLevel: 'full',
    description: 'Premium commercial cleaning services for North Dallas businesses, including Addison, Richardson, and Plano.',
    keyLocations: ['Addison', 'Richardson', 'Plano', 'Far North Dallas'],
    responseTime: '24 hours',
    zipCodes: ['75023', '75024', '75025', '75074', '75075', '75080', '75081', '75082', '75093'],
    path: 'M113.2,111.2l-4.5-2.3l-6.9,3.2l-3.6,0.4l-9.9-8.3l-0.6-3.5l-2.1-1.7l-0.1-1.7l-3.7-2.6l-3.8,0.7 l-2.1,0.7l-0.3,2.9l-2.8,1.7v4.6l-0.9,1.2l-1.4-0.6l-2.2,1.7l-5-0.2l0.8-2.9l-0.9-1.1l-7.8,1l-3.3-1.5l-4.4,1l-9.2-2.2l-1.5,0.8 l-0.5,2.2v4l-2-2.2l-2.5,0.8l-0.6,1.9l0.7,2.4l-2.6,2.4l-2.9,4.3l-2.9,1.9l-2.9,0.5l-1.8,1.5l-5.7,2.1l-4.5,0.5l-1.9,2.1l0.4,2.1 l-2.1,1.2l0.2,2l-1.3,1.9l0.5,0.5l3.8,0.3l0.9,1.3l-0.3,1.8l1,0.3l-1.1,1.1l0.5,0.9l8.3-4l3.1-0.3l1.6,1.9l5.5,1.9l0.9,1.2l0.3,11.2 l1.3,2l3.9,3.6l13-1.3l13.9-4.3l24.2,0.5l23.1-14.5l-0.1-6.2l0.1-2.6l-1-3.3l0.2-5.5L113.2,111.2z'
  },
  {
    id: 'downtown-dallas',
    name: 'Downtown Dallas',
    coverageLevel: 'full',
    description: 'Premier cleaning services for Downtown Dallas high-rises, office buildings, and commercial spaces.',
    keyLocations: ['Downtown Business District', 'Deep Ellum', 'Uptown', 'Arts District'],
    responseTime: 'Same day',
    zipCodes: ['75201', '75202', '75204', '75226', '75215'],
    path: 'M70.9,139.2l-5.5-1.9l-1.6-1.9l-3.1,0.3l-8.3,4l-0.5-0.9l1.1-1.1l-1-0.3l0.3-1.8l-0.9-1.3l-3.8-0.3 l-0.5-0.5l1.3-1.9l-0.2-2l2.1-1.2l-0.4-2.1l1.9-2.1l4.5-0.5l5.7-2.1l1.8-1.5l2.9-0.5l2.9-1.9l2.9-4.3l2.6-2.4l-0.7-2.4l0.6-1.9l2.5-0.8 l2,2.2v-4l0.5-2.2l1.5-0.8l9.2,2.2l4.4-1l3.3,1.5l7.8-1l0.9,1.1l-0.8,2.9l5,0.2l2.2-1.7l1.4,0.6l0.9-1.2v-4.6l2.8-1.7l0.3-2.9l2.1-0.7 l3.8-0.7l3.7,2.6l0.1,1.7l2.1,1.7l0.6,3.5l9.9,8.3l3.6-0.4l6.9-3.2l4.5,2.3l0.8,1.5l-0.2,5.5l1,3.3l-0.1,2.6l0.1,6.2L97.2,138 l-24.2-0.5L71.7,141l-0.4,2.6l-9.3,12.7l1.5,3.8l-0.3,11.2l0.9,1.2l5.5,1.9l1.6,1.9l3.1-0.3l8.3-4l0.5,0.9l-1.1,1.1l1,0.3l-0.3,1.8 l-0.9,1.3l-3.8,0.3l-0.5,0.5l1.3,1.9l-0.2,2l2.1,1.2l-0.4,2.1l1.9,2.1l4.5,0.5l5.7,2.1l1.8,1.5l2.9,0.5l2.9,1.9l2.9,4.3l2.6,2.4l-0.7,2.4 l0.6,1.9l2.5,0.8l-1.2,2.6l-3.7,3.2l-10.4,3.8l-13.3,3.5l-22.2-13.7l-19.5-14.9l-4.4-2.5l-2.4-0.4l-4.1-3.1l-1.8-0.2l-3.8-3.1l-2.8-0.4 l-0.2-2l-3-1.2l-1.2-1.8l-2.5-0.4v-3.2l1.2-1.2l5.5-0.2l0.9-2.4l-1.1-2.6l7.8-0.9l0.7-1.2l-0.2-1.8l7.7-3.9l1.3,1.3l3.8-0.8l30.8-16.2 L70.9,139.2'
  },
  {
    id: 'east-dallas',
    name: 'East Dallas',
    coverageLevel: 'full',
    description: 'Comprehensive cleaning solutions for East Dallas businesses, including Lakewood, Casa Linda, and White Rock Lake areas.',
    keyLocations: ['Lakewood', 'Casa Linda', 'White Rock Lake', 'Garland'],
    responseTime: '24 hours',
    zipCodes: ['75214', '75218', '75223', '75228', '75040', '75041', '75042', '75043', '75044'],
    path: 'M178.4,139.2l-8.4-9.5l-9-4.8l-2.9-0.4l-8.1-9.4l-3.5-0.9h-4.8l-3.9-3l-3-3.2l-21.6-0.1l-0.8-1.5 l3.6-0.4l6.9-3.2l4.5,2.3l0.8,1.5l-0.2,5.5l1,3.3l-0.1,2.6l0.1,6.2l19.2,9.1l3.1,5.3l34.2-0.6v-7.8l12.2-0.6l0.7,7.2l6.1,0.1l4.7-3.6 l1.2,0.6l5.7-9.4l-0.4-2.8l-1.6-3.2l-3.1-1l-4.1-7.2l-3.5-3.4l-9.1-6.4l-4.6-0.3l-14.5-15.2l3.2-22.3l-0.7-4.8l-2.3-6.2l-4-5.6 l-0.6-5.7l-4.3-2.7L161,38l3-5.2l0.5-5.7l-3.5-3.4l-0.5-5.2l-7.1-8.6l-6.9-3.1l-7.3-1.4l-6.9,0.9l-8.1,4.5l-18.8,2.3l-18.1,0.7l-9.8-1.2 l-6.4,0.2l-12.6,3.8l-10,9.1l-2.2,7.1l-8.4,0.2l-3.9,1.7l-10.2,7.5l-3.2,12.1l-5,3.3l-3.9,8.2l2.2,7.8l2.1,0.5l3.4-2.1l4.5,2.2l7.9,10.9 h9.8l5.2-2.8l2.1,1.9l3.5-1.2l2.1-2.1l8,7.8l10.3,2.6l1.8-1l-0.4-1.5l5.4-2.1l8.3,5.4l-0.3,2.3l-7.8,1l-3.3-1.5l-4.4,1l-9.2-2.2 l-1.5,0.8l-0.5,2.2v4l-2-2.2l-2.5,0.8l-0.6,1.9l0.7,2.4l-2.6,2.4l-2.9,4.3l-2.9,1.9l-2.9,0.5l-1.8,1.5l-5.7,2.1l-4.5,0.5l-1.9,2.1 l0.4,2.1l-2.1,1.2l0.2,2l-1.3,1.9l0.5,0.5l3.8,0.3l0.9,1.3l-0.3,1.8l1,0.3l-1.1,1.1l0.5,0.9l8.3-4l3.1-0.3l1.6,1.9l5.5,1.9l0.9,1.2 l0.3,11.2l-1,2.4l2.6,1.8l1.4,3.6l6.2,5.5l-4.5,13l21.3,0.9l3.6,3.1l15.8-1.6l17.9,3.4l8.1-3.6l13.8-11.2l-2.6-2.2l19.2,3.6L178.4,139.2 z'
  },
  {
    id: 'garland-plano',
    name: 'Garland/Plano',
    coverageLevel: 'partial',
    description: 'Professional cleaning services for Garland, Plano and surrounding areas, ideal for office parks and retail spaces.',
    keyLocations: ['Central Plano', 'North Garland', 'Richardson', 'Murphy'],
    responseTime: '48 hours',
    zipCodes: ['75074', '75075', '75094', '75040', '75041', '75042', '75044', '75082'],
    path: 'M133.1,93.6l3,3.2l3.9,3h4.8l3.5,0.9l8.1,9.4l2.9,0.4l9,4.8l8.4,9.5l17.9-10.2l-19.2-3.6l2.6,2.2 l-13.8,11.2l-8.1,3.6l-17.9-3.4l-15.8,1.6l-3.6-3.1l-21.3-0.9l4.5-13l-6.2-5.5l-1.4-3.6l-2.6-1.8l1-2.4l-0.3-11.2l-0.9-1.2l-5.5-1.9 l-1.6-1.9l-3.1,0.3l-8.3,4l-0.5-0.9l1.1-1.1l-1-0.3l0.3-1.8l-0.9-1.3l-3.8-0.3l-0.5-0.5l1.3-1.9l-0.2-2l2.1-1.2l-0.4-2.1l1.9-2.1 l4.5-0.5l5.7-2.1l1.8-1.5l2.9-0.5l2.9-1.9l2.9-4.3l2.6-2.4l-0.7-2.4l0.6-1.9l2.5-0.8l2,2.2v-4l0.5-2.2l1.5-0.8l9.2,2.2l4.4-1l3.3,1.5 l7.8-1l0.3-2.3l-8.3-5.4l-5.4,2.1l0.4,1.5l-1.8,1l-10.3-2.6l-8-7.8l-2.1,2.1l-3.5,1.2l-2.1-1.9l-5.2,2.8h-9.8l-7.9-10.9l-4.5-2.2 l-3.4,2.1l-2.1-0.5l-2.2-7.8l3.9-8.2l5-3.3l3.2-12.1l10.2-7.5l3.9-1.7l8.4-0.2l2.2-7.1l10-9.1l12.6-3.8l6.4-0.2l9.8,1.2l18.1-0.7 l18.8-2.3l8.1-4.5l6.9-0.9l7.3,1.4l6.9,3.1l7.1,8.6l0.5,5.2l3.5,3.4l-0.5,5.7l-3,5.2l5.7,9.2l4.3,2.7l0.6,5.7l4,5.6l2.3,6.2l0.7,4.8 l-3.2,22.3l14.5,15.2l4.6,0.3l9.1,6.4l3.5,3.4l4.1,7.2l3.1,1l1.6,3.2l0.4,2.8l-5.7,9.4l-1.2-0.6l-4.7,3.6l-6.1-0.1l-0.7-7.2l-12.2,0.6 v7.8l-34.2,0.6l-3.1-5.3l-19.2-9.1l-0.1-6.2l0.1-2.6l-1-3.3l0.2-5.5l-0.8-1.5l-4.5-2.3l-6.9,3.2l-3.6,0.4l-0.8-1.5L111.5,93L133.1,93.6 z'
  },
  {
    id: 'irving',
    name: 'Irving',
    coverageLevel: 'full',
    description: 'Full-service commercial cleaning for Irving businesses, including Las Colinas and Irving Convention Center area.',
    keyLocations: ['Las Colinas', 'Valley Ranch', 'Irving Convention Center', 'DFW Airport Area'],
    responseTime: '24 hours',
    zipCodes: ['75038', '75039', '75061', '75062', '75063'],
    path: 'M48.8,30.8l-9.5,1.9l-6.9,8.8l-4.4,1.6l-1.3,2.7l3.2,6.9l4.9,5.5l1.1,5.4l-3.5,3.9H22.1l-10.4,5.7 l-2.1,5.7l-0.3,3.4l3.5,5.8l6.9,5.2l10.2,2.6l1.1,3.5l4.1,7l-2.1,2.5l1.5,2.1l-0.6,3.7L32,113.2l-4.1,11.4l-7.9,8.9l-4.8,8.1l2,2.7 l2.1,0.2l0.6-2.5l3.1-0.6l1.5,1.7l-3.7,3.6l0.2,3l4.4,4.6l8.3,0.6l6.2-5l3.1-0.6l30.8-16.2l1.3,2l9.3-12.7l0.4-2.6l1.3-2l-13,1.3 l-3.9-3.6l-1.3-2L54,111l-0.9-1.2l-5.5-1.9l-1.6-1.9l-3.1,0.3l-8.3,4l0.5,0.9l1.1,1.1l-1,0.3l0.3,1.8l0.9,1.3l3.8,0.3l0.5,0.5l-1.3,1.9 l0.2,2l-2.1,1.2l0.4,2.1l-1.9,2.1l-4.5,0.5l-5.7,2.1l-1.8,1.5l-2.9,0.5l-2.9,1.9l-2.9,4.3l-2.6,2.4l0.7,2.4l-0.6,1.9l-2.5,0.8l-2-2.2 v-4l-0.5-2.2l-1.5-0.8l-9.2,2.2l-4.4,1l-3.3-1.5l-7.8,1l-0.9-1.1l0.8-2.9l-5-0.2l-2.2,1.7l-1.4-0.6l-0.9,1.2v4.6l-2.8,1.7l-0.3,2.9 l-2.1,0.7l-3.8,0.7l-3.7-2.6l-0.1-1.7l-2.1-1.7l-0.6-3.5l-9.9-8.3l23.5-25.2l21.2-28.5l22.9-18.2l9.8-13.5L48.8,30.8z'
  },
  {
    id: 'arlington',
    name: 'Arlington',
    coverageLevel: 'partial',
    description: 'Specialized cleaning services for Arlington commercial spaces, including entertainment and shopping districts.',
    keyLocations: ['AT&T Stadium Area', 'UTA Area', 'Arlington Highlands', 'Entertainment District'],
    responseTime: '48 hours',
    zipCodes: ['76001', '76010', '76011', '76012', '76013', '76014', '76015', '76016', '76017', '76018', '76019'],
    path: 'M48.8,30.8l-9.5,1.9l-6.9,8.8l-4.4,1.6l-1.3,2.7l3.2,6.9l4.9,5.5l1.1,5.4l-3.5,3.9H22.1l-10.4,5.7 l-2.1,5.7l-0.3,3.4l3.5,5.8l6.9,5.2l10.2,2.6l1.1,3.5l4.1,7l-2.1,2.5l1.5,2.1l-0.6,3.7l-1.9-2l-4.1,11.4l-7.9,8.9l-4.8,8.1l2,2.7 l2.1,0.2l0.6-2.5l3.1-0.6l1.5,1.7l-3.7,3.6l0.2,3l4.4,4.6l8.3,0.6l6.2-5l3.1-0.6l30.8-16.2l1.3,2l9.3-12.7l0.4-2.6l1.3-2l-13,1.3 l-3.9-3.6l-1.3-2L54,111l-0.9-1.2l-5.5-1.9l-1.6-1.9l-3.1,0.3l-8.3,4l0.5,0.9l1.1,1.1l-1,0.3l0.3,1.8l0.9,1.3l3.8,0.3l0.5,0.5l-1.3,1.9 l0.2,2l-2.1,1.2l0.4,2.1l-1.9,2.1l-4.5,0.5l-5.7,2.1l-1.8,1.5l-2.9,0.5l-2.9,1.9l-2.9,4.3l-2.6,2.4l0.7,2.4l-0.6,1.9l-2.5,0.8l-2-2.2 v-4l-0.5-2.2l-1.5-0.8l-9.2,2.2l-4.4,1l-3.3-1.5l-7.8,1l-0.9-1.1l0.8-2.9l-5-0.2l-2.2,1.7l-1.4-0.6l-0.9,1.2v4.6l-2.8,1.7l-0.3,2.9 l-2.1,0.7l-3.8,0.7l-3.7-2.6l-0.1-1.7l-2.1-1.7l-0.6-3.5l-9.9-8.3l23.5-25.2l21.2-28.5l22.9-18.2l9.8-13.5L48.8,30.8z'
  }
]; 