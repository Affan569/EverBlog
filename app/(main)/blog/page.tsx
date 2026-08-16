'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import Breadcrumbs, { BreadcrumbSchema } from '@/components/seo/Breadcrumbs'
import AdSlotHeader from '@/components/ads/AdSlotHeader'
import { getPublishedPosts, getAllCategories, searchPosts, getPostsByCategory } from '@/lib/firebase-helpers'
import type { BlogPost, Category } from '@/types'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchData()
  }, [selectedCategory, searchQuery])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [categoriesData, postsData] = await Promise.all([
        getAllCategories(),
        searchQuery 
          ? searchPosts(searchQuery)
          : selectedCategory === 'all'
            ? getPublishedPosts(20)
            : getPostsByCategory(selectedCategory, 20)
      ])

      setCategories(categoriesData)
      setPosts(postsData as BlogPost[])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchData()
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }]} />
      <div className="flex flex-col">
        {/* Header Ad Slot */}
        <AdSlotHeader />

        {/* Header Section */}
        <section className="relative py-20 bg-white dark:bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent dark:from-zinc-800/20 dark:to-transparent" />
          <Container className="relative z-10">
            <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
            <div className="mx-auto max-w-2xl text-center mt-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Explore our latest articles and insights
            </p>
          </div>
        </Container>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2 pl-10 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-600/20"
                />
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery('') }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => { setSelectedCategory(category.slug); setSearchQuery('') }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                      : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white dark:bg-zinc-900">
        <Container>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg
                className="h-16 w-16 text-zinc-300 dark:text-zinc-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                No blog posts yet
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Check back soon for amazing content
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800"
                  >
                    {post.coverImage && (
                      <div className="relative h-48 w-full">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                        <span className="rounded-full bg-zinc-100 px-2 py-1 font-medium dark:bg-zinc-700">
                          {post.category}
                        </span>
                        <time dateTime={post.createdAt.toISOString()}>
                          {formatDate(post.createdAt)}
                        </time>
                      </div>
                      <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-zinc-600 dark:hover:text-zinc-300">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mb-4 flex-1 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-zinc-500 dark:text-zinc-500"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
      </div>
    </>
  )
}