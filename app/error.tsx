'use client'

import { useEffect } from 'react'
import Container from '@/components/layout/Container'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 py-20 text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Something went wrong!
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            We apologize for the inconvenience. An error has occurred.
          </p>
          <button
            onClick={reset}
            className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Try again
          </button>
        </div>
      </Container>
    </div>
  )
}