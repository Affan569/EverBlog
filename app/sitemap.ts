import { MetadataRoute } from 'next'
import { getPublishedPosts, getAllCategories } from '@/lib/firebase-helpers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://everblog.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic blog posts
  let blogPosts: MetadataRoute.Sitemap = []
  let categoryPages: MetadataRoute.Sitemap = []

  try {
    const [posts, categories] = await Promise.all([
      getPublishedPosts(100),
      getAllCategories(),
    ])

    // Add blog posts
    blogPosts = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    // Add category pages
    categoryPages = categories.map((category) => ({
      url: `${baseUrl}/blog/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching dynamic sitemap data:', error)
  }

  return [...staticPages, ...blogPosts, ...categoryPages]
}