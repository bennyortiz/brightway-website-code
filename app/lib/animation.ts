/**
 * Generates CSS keyframe animation with proper delay
 * @param name The animation name
 * @param delay Optional delay in milliseconds
 * @returns CSS animation string
 */
export function fadeAnimation(name: string, delay: number = 0): string {
  return `${name} 0.6s ease-out ${delay}ms forwards`;
}

/**
 * Calculates staggered animation delay based on index
 * @param index Element index in a collection
 * @param baseDelay Base delay before starting the sequence
 * @param staggerDelay Delay between each item
 * @returns Calculated delay in milliseconds
 */
export function staggeredDelay(index: number, baseDelay: number = 0, staggerDelay: number = 100): number {
  return baseDelay + (index * staggerDelay);
}

// Define proper types for animation properties
interface AnimationProps {
  initial: {
    opacity: number;
    x?: string | number;
    y?: string | number;
  };
  animate: {
    opacity: number;
    x: number;
    y: number;
  };
  transition: {
    duration: number;
    ease: string;
  };
}

/**
 * Utility to add slide-in animation from direction
 * @param direction The direction from which element slides in
 * @param distance The distance element moves (in pixels or other CSS units)
 * @returns CSS animation properties
 */
export function slideIn(direction: 'left' | 'right' | 'top' | 'bottom', distance: string = '20px'): AnimationProps {
  const directionMap = {
    left: { x: `-${distance}`, y: 0 },
    right: { x: distance, y: 0 },
    top: { x: 0, y: `-${distance}` },
    bottom: { x: 0, y: distance },
  };

  return {
    initial: {
      opacity: 0,
      ...directionMap[direction]
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0
    },
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  };
} 