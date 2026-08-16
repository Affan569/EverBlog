'use client'

import { useState, useEffect } from 'react'
import { getAllSubscribers } from '@/lib/firebase-helpers'

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    setLoading(true)
    try {
      const subscribersData = await getAllSubscribers()
      setSubscribers(subscribersData)
    } catch (error) {
      console.error('Error fetching subscribers:', error)
    } finally {
      setLoading(false)
    }
  }

  const exportToCSV = () => {
    const headers = ['Email', 'Subscribed Date', 'Status']
    const rows = subscribers.map(sub => [
      sub.email,
      new Date(sub.subscribedAt).toLocaleDateString(),
      sub.active ? 'Active' : 'Inactive'
    ])

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
            Newsletter Subscribers
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Manage your newsletter subscribers
          </p>
        </div>
        <button
          onClick={exportToCSV}
          disabled={subscribers.length === 0}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
        >
          Export CSV
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        </div>
      ) : subscribers.length === 0 ? (
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            No subscribers yet
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Newsletter signups will appear here
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Subscribed Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr key={subscriber.id} className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800">
                  <td className="px-4 py-4 font-medium text-zinc-900 dark:text-zinc-50">
                    {subscriber.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                    {formatDate(subscriber.subscribedAt)}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                        subscriber.active
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      }`}
                    >
                      {subscriber.active ? 'Active' : 'Inactive'}
                    </span>
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