/**
 * Service-related type definitions
 */
import { ReactNode } from 'react';

/**
 * Service information
 * Centralized definition for all service-related types
 */
export interface Service {
  title: string;
  description: string;
  features: string[];
  icon?: ReactNode | string;
  image?: string;
  slug?: string;
}

/**
 * @deprecated Use Service interface instead
 */
export type ServiceItem = Service; 