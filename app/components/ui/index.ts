/**
 * UI Components Barrel Export File
 * 
 * This file serves as a centralized export point for all UI components.
 * Using this pattern allows for cleaner imports in consuming components.
 * For example: import { Button, Card } from '@/components/ui'
 * instead of importing from individual files.
 */

// Button Components
export { default as Button } from './button';
export { Button as ButtonLink, PrimaryButton, OutlineButton, SecondaryButton } from './buttons';

// Layout Components
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from './card';
export { default as AnimatedSection } from './animated-section';
export { default as SectionHeader } from './section-header';

// Media Components
export { default as SafeImage } from './safe-image';

// Interactive Components
export { default as Counter } from './counter'; 