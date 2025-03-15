/**
 * Card Components Library
 *
 * A collection of reusable card components for displaying content in a
 * contained, visually consistent way.
 *
 * Usage:
 * ```tsx
 * import { Card } from '@/app/@components/ui/cards';
 *
 * // Basic card
 * <Card 
 *   title="Card Title" 
 *   description="This is a card description"
 * >
 *   Additional content here
 * </Card>
 *
 * // Feature card with icon
 * <Card
 *   title="Feature Title"
 *   description="Feature description text"
 *   icon={<Icon className="w-10 h-10 text-primary" />}
 *   features={["Feature 1", "Feature 2", "Feature 3"]}
 *   featureIcon={<CheckIcon className="w-5 h-5 text-primary" />}
 * />
 *
 * // Link card
 * <Card
 *   title="Click Me"
 *   description="This card is clickable"
 *   href="/destination-page"
 *   animated={true}
 * />
 * ```
 *
 * // Using Card composition pattern
 * ```tsx
 * import { Card, CardHeader, CardTitle, CardBody, CardFooter } from '@/app/@components/ui/cards';
 * 
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     Content goes here
 *   </CardBody>
 *   <CardFooter>
 *     Footer content here
 *   </CardFooter>
 * </Card>
 * ```
 */

export { default as Card } from './Card';
export {
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter
} from './CardComponents';
