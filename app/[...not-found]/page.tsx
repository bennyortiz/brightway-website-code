import { notFound } from 'next/navigation'

export default function CatchAllRoute() {
  // This triggers the not-found.tsx file
  notFound()
} 