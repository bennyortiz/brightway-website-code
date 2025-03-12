'use client'

import React, { useState, useEffect, useRef } from 'react'
import { cn } from '@/app/lib/utils'

interface CounterProps {
  end: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function Counter({
  end,
  duration = 2000,
  delay = 0,
  className,
  prefix = '',
  suffix = '',
  decimals = 0,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const startAnimation = () => {
      // Start counting after the delay
      setTimeout(() => {
        startTimeRef.current = Date.now()
        countRef.current = 0
        setCount(0)
        
        const animate = () => {
          if (startTimeRef.current === null) return
          
          const now = Date.now()
          const elapsed = now - startTimeRef.current
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smoother animation
          const easedProgress = easeOutQuart(progress)
          
          const newCount = easedProgress * end
          countRef.current = newCount
          setCount(newCount)
          
          if (progress < 1) {
            frameRef.current = requestAnimationFrame(animate)
          }
        }
        
        frameRef.current = requestAnimationFrame(animate)
      }, delay)
    }
    
    startAnimation()
    
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [end, duration, delay])
  
  // Easing function for smoother progress
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4)
  }
  
  const formatNumber = (num: number): string => {
    return prefix + num.toFixed(decimals) + suffix
  }
  
  return (
    <span className={cn('font-bold', className)}>
      {formatNumber(count)}
    </span>
  )
}

export default Counter 