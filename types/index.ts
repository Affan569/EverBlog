export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string // rich text/HTML
  excerpt: string
  coverImage?: string // Cloudinary URL
  category: string
  tags: string[]
  author: string
  status: 'draft' | 'published'
  createdAt: Date
  updatedAt: Date
  metaTitle?: string
  metaDescription?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface User {
  uid: string
  email: string
  displayName?: string
  photoURL?: string
  role: 'admin' | 'editor' | 'author'
  createdAt: Date
}

export interface NewsletterSubscriber {
  id: string
  email: string
  subscribedAt: Date
  active: boolean
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: Date
  read: boolean
}