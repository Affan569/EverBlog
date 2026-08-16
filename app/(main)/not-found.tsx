import Link from 'next/link'
import Container from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 py-20 text-center">
          <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">404</h1>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            Page not found
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <Link
            href="/"
            className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Go back home
          </Link>
        </div>
      </Container>
    </div>
  )
}