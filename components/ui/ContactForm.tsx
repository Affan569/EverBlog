'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/firebase-helpers'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    const result = await submitContactForm(formData)

    setIsSubmitting(false)

    if (result.success) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } else {
      setSubmitStatus('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <svg
            className="h-6 w-6 text-green-600 dark:text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-green-900 dark:text-green-100">
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-green-700 dark:text-green-300">
          Thank you for reaching out! We'll get back to you within 24-48 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="mt-4 text-sm font-medium text-green-700 underline dark:text-green-300"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-500 sm:text-sm ${
            errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-zinc-500'
          }`}
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-500 sm:text-sm ${
            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-zinc-500'
          }`}
          placeholder="john@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-500 sm:text-sm ${
            errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-zinc-500'
          }`}
          placeholder="How can we help you?"
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border px-3 py-2 text-zinc-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:ring-zinc-500 sm:text-sm ${
            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-zinc-300 focus:border-zinc-500'
          }`}
          placeholder="Tell us more about your inquiry..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-800 dark:text-red-200">
            Failed to send message. Please try again later.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}