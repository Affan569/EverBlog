'use client'

import Link from 'next/link'
import { useState } from 'react'
import Container from './Container'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Global">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                <span className="text-xl font-bold">E</span>
              </div>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                EverBlog
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin"
              className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/admin"
                className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}