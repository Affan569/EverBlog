'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase-client'
import { useRouter } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: '📊' },
    { name: 'Blog Posts', href: '/admin/blogs', icon: '📝' },
    { name: 'Categories', href: '/admin/categories', icon: '📁' },
    { name: 'Messages', href: '/admin/messages', icon: '✉️' },
    { name: 'Subscribers', href: '/admin/subscribers', icon: '👥' },
    { name: 'Settings', href: '/admin/settings', icon: '⚙️' },
  ]

  const handleLogout = async () => {
    try {
      await signOut(auth)
      document.cookie = 'admin-session=; path=/; max-age=0'
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${sidebarCollapsed ? 'lg:w-20' : 'lg:w-64'}`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 flex-shrink-0">
                <span className="text-sm font-bold">E</span>
              </div>
              {!sidebarCollapsed && (
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  EverBlog
                </span>
              )}
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="hidden lg:block text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  {sidebarCollapsed ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  )}
                </svg>
              </button>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
                      : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                  title={sidebarCollapsed ? item.name : undefined}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {!sidebarCollapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="px-4 py-4 border-t border-zinc-200 dark:border-zinc-800">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 transition-colors"
              title={sidebarCollapsed ? 'Logout' : undefined}
            >
              <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v3.75m0 0h-4.5m9 0v2.25A2.25 2.25 0 0015.75 16.5h-6a2.25 2.25 0 00-2.25-2.25v-2.25m9 0h4.5" />
              </svg>
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out lg:ml-0 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Top bar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {navigation.find(item => item.href === pathname)?.name || 'Admin'}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              View Site
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}