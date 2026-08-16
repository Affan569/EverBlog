'use client'

import { useState, useEffect } from 'react'
import { getAllMessages, markMessageAsRead } from '@/lib/firebase-helpers'

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<any | null>(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const messagesData = await getAllMessages()
      setMessages(messagesData)
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleViewMessage = async (message: any) => {
    setSelectedMessage(message)
    if (!message.read) {
      try {
        await markMessageAsRead(message.id)
        setMessages(messages.map(m => 
          m.id === message.id ? { ...m, read: true } : m
        ))
      } catch (error) {
        console.error('Error marking message as read:', error)
      }
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Contact Messages
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          View and manage contact form submissions
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
        </div>
      ) : messages.length === 0 ? (
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
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <h3 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            No messages yet
          </h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Contact form submissions will appear here
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Messages List */}
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                onClick={() => handleViewMessage(message)}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedMessage?.id === message.id
                    ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-50 dark:bg-zinc-800'
                    : message.read
                    ? 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'
                    : 'border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-zinc-900 dark:text-zinc-50 truncate">
                        {message.name}
                      </p>
                      {!message.read && (
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                      {message.subject}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                      {formatDate(message.createdAt)}
                    </p>
                  </div>
                  <svg
                    className="h-5 w-5 text-zinc-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Message Detail */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
            {selectedMessage ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                    {selectedMessage.subject}
                  </h2>
                  <div className="mt-4 space-y-2">
                    <div>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        From:
                      </p>
                      <p className="text-zinc-900 dark:text-zinc-50">
                        {selectedMessage.name} ({selectedMessage.email})
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Date:
                      </p>
                      <p className="text-zinc-900 dark:text-zinc-50">
                        {formatDate(selectedMessage.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Message:
                  </p>
                  <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <p className="text-zinc-900 dark:text-zinc-50 whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
                  >
                    Reply via Email
                  </a>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
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
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Select a message to view details
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}