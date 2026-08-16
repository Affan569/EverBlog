'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import { getSiteSettings } from '@/lib/firebase-helpers'

interface HeroSettings {
  heroBanner: string
  heroOpacity: number
}

export default function HomePage() {
  const [siteSettings, setSiteSettings] = useState<HeroSettings>({
    heroBanner: '',
    heroOpacity: 50,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const settings = await getSiteSettings()
      if (settings) {
        setSiteSettings({
          heroBanner: (settings as Partial<HeroSettings>).heroBanner || '',
          heroOpacity: (settings as Partial<HeroSettings>).heroOpacity ?? 50,
        })
      }
    } catch (error) {
      console.error('Error fetching site settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { name: 'Technology', slug: 'technology', icon: '💻', count: 12 },
    { name: 'Business', slug: 'business', icon: '📈', count: 8 },
    { name: 'Lifestyle', slug: 'lifestyle', icon: '🌿', count: 15 },
    { name: 'Health', slug: 'health', icon: '🏥', count: 6 },
    { name: 'Science', slug: 'science', icon: '🔬', count: 9 },
    { name: 'Education', slug: 'education', icon: '📚', count: 11 },
  ]

  const trustStats = [
    { value: '10K+', label: 'Monthly Readers' },
    { value: '500+', label: 'Published Articles' },
    { value: '50+', label: 'Expert Contributors' },
    { value: '4.9', label: 'Average Rating' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900 py-20 sm:py-32">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 z-0">
          {siteSettings.heroBanner ? (
            <Image
              src={siteSettings.heroBanner}
              alt="Hero Banner"
              fill
              className="object-cover"
              style={{ opacity: siteSettings.heroOpacity / 100 }}
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/50 to-zinc-200/50 dark:from-zinc-800/30 dark:to-zinc-900/30" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM5Y2EzYWYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 dark:opacity-10" />
            </>
          )}
        </div>

        <Container>
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl">
              Knowledge That
              <span className="block text-zinc-600 dark:text-zinc-400">
                Inspires Growth
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Explore expert insights, in-depth analysis, and thought-provoking content crafted by industry professionals. Join thousands of readers who trust EverBlog for reliable information.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/blog"
                className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Explore Articles
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Articles Section */}
      <section className="relative py-20 bg-white dark:bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-bl from-zinc-50/40 to-transparent dark:from-zinc-800/15 dark:to-transparent" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Discover our latest and most popular content
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
            {categories.slice(0, 4).map((category) => (
              <div key={category.slug} className="flex flex-col items-start">
                <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {category.count} articles available
                  </p>
                </div>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="mt-4 text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                >
                  Explore {category.name} →
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-bl from-zinc-100/50 to-zinc-50/30 dark:from-zinc-800/20 dark:to-zinc-900/10" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Find content that interests you
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group flex flex-col items-center p-6 rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {category.count} posts
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 bg-white dark:bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-50/40 to-transparent dark:from-zinc-800/15 dark:to-transparent" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Subscribe to our newsletter for the latest articles and insights delivered straight to your inbox.
            </p>
            <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-auto rounded-md border-0 bg-zinc-100 px-3.5 py-2.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-500"
              />
              <button
                type="submit"
                className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="relative py-20 bg-zinc-50 dark:bg-zinc-950">
        <div className="absolute inset-0 bg-gradient-to-tl from-zinc-100/30 to-transparent dark:from-zinc-800/15 dark:to-transparent" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Trusted by Thousands
            </h2>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Join our growing community of readers
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-none lg:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
