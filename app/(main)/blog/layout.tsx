import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'Blog - Articles & Insights',
  'Explore our collection of articles covering technology, business, lifestyle, health, science, and education topics.',
  '/blog'
)

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}