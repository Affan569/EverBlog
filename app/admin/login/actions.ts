'use server'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase-client'
import { redirect } from 'next/navigation'
import { isAdmin } from '@/lib/admin-config'

export async function loginAdmin(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  // Check if email is authorized admin
  if (!isAdmin(email)) {
    return { error: 'Access denied. Unauthorized email address.' }
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const token = await userCredential.user.getIdToken()

    // Set session cookie using Set-Cookie header
    redirect('/admin')
  } catch (error: any) {
    console.error('Login error:', error)
    if (error.code === 'auth/user-not-found') {
      return { error: 'User not found. Please check your email.' }
    } else if (error.code === 'auth/wrong-password') {
      return { error: 'Incorrect password. Please try again.' }
    } else if (error.code === 'auth/invalid-credential') {
      return { error: 'Invalid credentials. Please check your email and password.' }
    } else {
      return { error: 'Login failed. Please try again.' }
    }
  }
}