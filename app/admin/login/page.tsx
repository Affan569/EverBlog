'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase-client'
import { useRouter } from 'next/navigation'
import { isAdmin } from '@/lib/admin-config'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Convert username to email if no @ symbol is present
      let loginEmail = email
      if (!email.includes('@')) {
        loginEmail = `${email}@everblog.com`
      }

      // Check if email is authorized admin
      if (!isAdmin(loginEmail)) {
        setError('Access denied. Unauthorized username/email.')
        setLoading(false)
        return
      }

      // Sign in with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, password)
      const token = await userCredential.user.getIdToken()

      // Set session cookie
      document.cookie = `admin-session=${token}; path=/; max-age=3600; SameSite=Lax`

      // Redirect to dashboard
      router.push('/admin')
    } catch (error: any) {
      console.error('Login error:', error)
      if (error.code === 'auth/user-not-found') {
        setError('User not found. Please check your username.')
      } else if (error.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.')
      } else if (error.code === 'auth/invalid-credential') {
        setError('Invalid credentials. Please check your username and password.')
      } else {
        setError('Login failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Admin Login
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Sign in to access the admin panel
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
                <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Username or Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-600/20"
                placeholder="admin123"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-600/20"
                placeholder="•••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              ← Back to website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}