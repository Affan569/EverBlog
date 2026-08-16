import type { Metadata } from 'next'

export function createMetadata(title: string, description: string, path?: string): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://everblog.com'
  const url = path ? `${baseUrl}${path}` : baseUrl

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'EverBlog',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}