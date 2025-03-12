'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/app/lib/utils';
import { fadeAnimation, slideIn } from '@/app/lib/animation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
  threshold?: number;
  duration?: number;
  distance?: string;
  rootMargin?: string;
  once?: boolean;
}

export function AnimatedSection({
  children,
  className,
  direction = 'bottom',
  delay = 0,
  threshold = 0.1,
  duration = 700,
  distance = '20px',
  rootMargin = '0px',
  once = true,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [once, rootMargin, threshold]);

  // Map our direction prop to the slideIn utility's directions
  const mappedDirection =
    direction === 'top'
      ? 'top'
      : direction === 'bottom'
        ? 'bottom'
        : direction === 'left'
          ? 'left'
          : 'right';

  // Get animation styles from our utility
  const animationProps = slideIn(mappedDirection, distance);

  return (
    <div
      ref={sectionRef}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate(0, 0)'
          : `translate(${animationProps.initial.x || 0}px, ${animationProps.initial.y || 0}px)`,
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
