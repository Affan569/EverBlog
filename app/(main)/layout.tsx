import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata(
  'EverBlog - Professional Blog & Information Platform',
  'Discover insightful articles, expert opinions, and valuable content across technology, business, lifestyle, and more. Join our community of curious minds.',
  '/'
)

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}