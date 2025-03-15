/**
 * Card Components Library
 *
 * A collection of reusable card components for displaying content in a
 * contained, visually consistent way.
 *
 * Usage:
 * ```tsx
 * import { Card, CardHeader, CardBody, CardFooter, CardTitle } from '@/app/@components/ui/cards';
 *
 * // Basic card
 * <Card>
 *   This is a simple card with content
 * </Card>
 *
 * // Card with header, body, and footer
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *   </CardHeader>
 *   <CardBody>
 *     Main content goes here...
 *   </CardBody>
 *   <CardFooter>
 *     Footer content
 *   </CardFooter>
 * </Card>
 *
 * // Interactive card
 * <Card
 *   hoverable
 *   clickable
 *   onClick={() => handleCardClick()}
 *   variant="elevated"
 * >
 *   Click me!
 * </Card>
 * ```
 */

export * from './Card';
