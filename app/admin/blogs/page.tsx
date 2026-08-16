'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts, deletePost, togglePostStatus } from '@/lib/firebase-helpers'
import type { BlogPost } from '@/types'

export default function BlogManagement() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const postsData = await getAllPosts()
      setPosts(postsData)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      await deletePost(id)
      setPosts(posts.filter(post => post.id !== id))
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Failed to delete post')
    }
  }

  const handleToggleStatus = async (id: string, currentStatus: 'draft' | 'published') => {
    try {
      await togglePostStatus(id, currentStatus)
      setPosts(posts.map(post => 
        post.id === id 
          ? { ...post, status: currentStatus === 'draft' ? 'published' : 'draft' }
          : post
      ))
    } catch (error) {
      console.error('Error toggling post status:', error)
      alert('Failed to toggle post status')
    }
  }

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true
    return post.status === filter
  })

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Blog Posts
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Manage your blog content
          </p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
        >
          New Post
        </Link>
      </div>

      {/* Filter */}
      <div className="mb-6 flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
              : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
          }`}
        >
          All ({posts.length})
        </button>
        <button
          onClick={() => setFilter('published')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'published'
              ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
              : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
          }`}
        >
          Published ({posts.filter(p => p.status === 'published').length})
        </button>
        <button
          onClick={() => setFilter('draft')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filter === 'draft'
              ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
              : 'bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
          }`}
        >
          Drafts ({posts.filter(p => p.status === 'draft').length})
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        </div>
      ) : filteredPosts.length === 0 ? (
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
            No posts yet
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Create your first blog post to get started
          </p>
          <Link
            href="/admin/blogs/new"
            className="mt-4 inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
          >
            Create Post →
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post.id} className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      {post.coverImage && (
                        <div className="h-12 w-12 rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <Link
                          href={`/admin/blogs/edit/${post.id}`}
                          className="font-medium text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300"
                        >
                          {post.title}
                        </Link>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                          {post.slug}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {post.category}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        post.status === 'published'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleToggleStatus(post.id, post.status)}
                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                      >
                        {post.status === 'published' ? '🔒' : '🌐'}
                      </button>
                      <Link
                        href={`/admin/blogs/edit/${post.id}`}
                        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                        title="Edit"
                      >
                        ✏️
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-sm text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}