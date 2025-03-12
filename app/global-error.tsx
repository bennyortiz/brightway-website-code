'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-5xl font-bold mb-4">Something went wrong!</h1>
          <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
            We apologize for the inconvenience. Please try again later.
          </p>
          <button
            onClick={reset}
            className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
} 