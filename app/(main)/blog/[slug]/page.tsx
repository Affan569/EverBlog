import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import JsonLdArticle from '@/components/blog/JsonLdArticle'
import SocialShare from '@/components/blog/SocialShare'
import Breadcrumbs, { BreadcrumbSchema } from '@/components/seo/Breadcrumbs'
import AdSlotInArticle from '@/components/ads/AdSlotInArticle'
import { getPostBySlug, getRelatedPosts } from '@/lib/firebase-helpers'
import type { BlogPost } from '@/types'
import { createMetadata } from '@/lib/metadata'
import '@/styles/blog-content.css'

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://everblog.com'
  const url = `${baseUrl}/blog/${post.slug}`

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url,
      type: 'article',
      publishedTime: post.createdAt.toISOString(),
      modifiedTime: post.updatedAt.toISOString(),
      authors: [post.author],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  const relatedPosts = post ? await getRelatedPosts(post.id, post.category) : []

  if (!post) {
    notFound()
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://everblog.com'
  const url = `${baseUrl}/blog/${post.slug}`

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <JsonLdArticle
        title={post.title}
        description={post.excerpt}
        url={url}
        imageUrl={post.coverImage}
        author={post.author}
        datePublished={post.createdAt.toISOString()}
        dateModified={post.updatedAt.toISOString()}
      />
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <div className="flex flex-col">
        {/* Header Section */}
        <article className="relative py-12 bg-white dark:bg-zinc-900">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 to-transparent dark:from-zinc-800/20 dark:to-transparent" />
          <Container className="relative z-10">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />

              {/* Category and Date */}
              <div className="mb-4 flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium dark:bg-zinc-800">
                  {post.category}
                </span>
                <time dateTime={post.createdAt.toISOString()}>
                  {formatDate(post.createdAt)}
                </time>
              </div>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    {post.author}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">Author</p>
                </div>
              </div>
            </div>
          </Container>
        </article>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-96 w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content Section */}
        <section className="py-12 bg-white dark:bg-zinc-900">
          <Container>
            <div className="mx-auto max-w-3xl">
              {/* Social Share Buttons */}
              <div className="mb-8 border-b border-zinc-200 pb-8 dark:border-zinc-800">
                <SocialShare title={post.title} url={url} />
              </div>

              {/* Blog Content */}
              <div 
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* In-Article Ad Slot */}
              <AdSlotInArticle />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-zinc-50 dark:bg-zinc-950">
            <Container>
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  Related Articles
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group flex flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-800"
                    >
                      {relatedPost.coverImage && (
                        <div className="relative h-32 w-full">
                          <Image
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-4">
                        <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-50 line-clamp-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                          {relatedPost.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}
      </div>
    </>
  )
}
