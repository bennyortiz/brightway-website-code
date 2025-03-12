import { Metadata } from 'next'
import Link from 'next/link'
import MainLayout from './components/layout/MainLayout'
import { siteConfig } from './constants/siteConfig'

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.name}`,
  description: `The page you're looking for could not be found. Return to ${siteConfig.name} homepage.`,
}

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          Return to Homepage
        </Link>
      </div>
    </MainLayout>
  )
} 