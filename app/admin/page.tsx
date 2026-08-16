'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getStats } from '@/lib/firebase-helpers'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalCategories: 0,
    totalMessages: 0,
    unreadMessages: 0,
    totalSubscribers: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    setLoading(true)
    try {
      const statsData = await getStats()
      setStats(statsData)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      name: 'Total Blog Posts',
      value: stats.totalBlogs,
      href: '/admin/blogs',
      icon: '📝',
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300',
    },
    {
      name: 'Published',
      value: stats.publishedBlogs,
      href: '/admin/blogs',
      icon: '✅',
      color: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300',
    },
    {
      name: 'Drafts',
      value: stats.draftBlogs,
      href: '/admin/blogs',
      icon: '📄',
      color: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300',
    },
    {
      name: 'Categories',
      value: stats.totalCategories,
      href: '/admin/categories',
      icon: '📁',
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300',
    },
    {
      name: 'Messages',
      value: stats.totalMessages,
      href: '/admin/messages',
      icon: '✉️',
      color: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300',
      badge: stats.unreadMessages > 0 ? stats.unreadMessages : null,
    },
    {
      name: 'Subscribers',
      value: stats.totalSubscribers,
      href: '/admin/subscribers',
      icon: '👥',
      color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Welcome back! Here's what's happening with your blog.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statCards.map((stat) => (
              <Link
                key={stat.name}
                href={stat.href}
                className="relative group"
              >
                <div className={`${stat.color} rounded-lg p-6 transition-shadow hover:shadow-md`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-80">{stat.name}</p>
                      <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                    </div>
                    <span className="text-4xl">{stat.icon}</span>
                  </div>
                  {stat.badge && (
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {stat.badge}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Quick Actions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/admin/blogs/new"
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-lg">➕</span>
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">New Blog Post</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Create a new article</p>
                </div>
              </Link>
              <Link
                href="/admin/categories/new"
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-lg">📁</span>
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">New Category</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Add a category</p>
                </div>
              </Link>
              <Link
                href="/blog"
                target="_blank"
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-lg">👁️</span>
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">View Blog</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">See your website</p>
                </div>
              </Link>
              <Link
                href="/admin/messages"
                className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <span className="text-lg">✉️</span>
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">Messages</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {stats.unreadMessages} unread
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}