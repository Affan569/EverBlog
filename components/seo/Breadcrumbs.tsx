import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
      <Link
        href="/"
        className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <span className="text-zinc-400 dark:text-zinc-600">/</span>
          {index === items.length - 1 ? (
            <span className="text-zinc-900 dark:text-zinc-50 font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

export function BreadcrumbSchema({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://everblog.com'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}