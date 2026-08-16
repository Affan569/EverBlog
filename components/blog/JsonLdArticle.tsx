interface JsonLdArticleProps {
  title: string
  description: string
  url: string
  imageUrl?: string
  author: string
  datePublished: string
  dateModified: string
}

export default function JsonLdArticle({
  title,
  description,
  url,
  imageUrl,
  author,
  datePublished,
  dateModified,
}: JsonLdArticleProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}