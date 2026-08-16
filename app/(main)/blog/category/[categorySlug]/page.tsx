'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import { getPostsByCategory, getCategoryBySlug, getAllCategories } from '@/lib/firebase-helpers'
import type { BlogPost, Category } from '@/types'

interface CategoryPageProps {
  params: { categorySlug: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [category, setCategory] = useState<Category | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [params.categorySlug])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [categoryData, postsData, categoriesData] = await Promise.all([
        getCategoryBySlug(params.categorySlug),
        getPostsByCategory(params.categorySlug, 20),
        getAllCategories(),
      ])

      setCategory(categoryData)
      setPosts(postsData)
      setCategories(categoriesData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="relative py-20 bg-white dark:bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent dark:from-zinc-800/20 dark:to-transparent" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/blog"
              className="mb-4 inline-flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Blog
            </Link>
            {loading ? (
              <div className="h-8" />
            ) : category ? (
              <>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                  {category.name}
                </h1>
                {category.description && (
                  <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    {category.description}
                  </p>
                )}
              </>
            ) : (
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                Category Not Found
              </h1>
            )}
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
        <Container>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            >
              All Categories
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cat.slug === params.categorySlug
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                    : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                {cat.name}
              </Link>
            ))}
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
          ) : !category ? (
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
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Category Not Found
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                This category doesn't exist or has been removed.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
              >
                View all articles →
              </Link>
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
                No posts in this category yet
              </h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Check back soon for {category.name} articles
              </p>
            </div>
          ) : (
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
          )}
        </Container>
      </section>
    </div>
  )
}