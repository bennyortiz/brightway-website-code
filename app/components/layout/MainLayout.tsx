'use client'

import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
} 