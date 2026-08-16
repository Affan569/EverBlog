import { db } from './firebase-client'
import { collection, addDoc, getDocs, query, where, orderBy, limit, Timestamp, getDoc, doc, updateDoc, deleteDoc, setDoc } from 'firebase/firestore'
import type { BlogPost, Category } from '@/types'

export async function subscribeToNewsletter(email: string) {
  try {
    const subscribersRef = collection(db, 'subscribers')
    await addDoc(subscribersRef, {
      email,
      subscribedAt: Timestamp.now(),
      active: true,
    })
    return { success: true }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, error: 'Failed to subscribe' }
  }
}

export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const contactRef = collection(db, 'contact_messages')
    await addDoc(contactRef, {
      ...data,
      createdAt: Timestamp.now(),
      read: false,
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit message' }
  }
}

// Blog Post Functions
export async function getPublishedPosts(limitCount = 10) {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(
      postsRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
  } catch (error) {
    console.error('Error fetching published posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(postsRef, where('slug', '==', slug), where('status', '==', 'published'))
    const snapshot = await getDocs(q)
    
    if (snapshot.empty) return null
    
    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    } as BlogPost
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}

export async function getPostsByCategory(categorySlug: string, limitCount = 10) {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(
      postsRef,
      where('category', '==', categorySlug),
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
  } catch (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }
}

export async function searchPosts(searchQuery: string, limitCount = 10) {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(
      postsRef,
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    )
    
    const snapshot = await getDocs(q)
    const allPosts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
    
    // Client-side filtering for search
    const searchLower = searchQuery.toLowerCase()
    return allPosts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  } catch (error) {
    console.error('Error searching posts:', error)
    return []
  }
}

export async function getRelatedPosts(currentPostId: string, category: string, limitCount = 3) {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(
      postsRef,
      where('category', '==', category),
      where('status', '==', 'published'),
      orderBy('createdAt', 'desc'),
      limit(limitCount + 1) // Get one extra to exclude current post
    )
    
    const snapshot = await getDocs(q)
    return snapshot.docs
      .filter(doc => doc.id !== currentPostId)
      .slice(0, limitCount)
      .map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
        updatedAt: doc.data().updatedAt?.toDate() || new Date(),
      })) as BlogPost[]
  } catch (error) {
    console.error('Error fetching related posts:', error)
    return []
  }
}

// Category Functions
export async function getAllCategories() {
  try {
    const categoriesRef = collection(db, 'categories')
    const snapshot = await getDocs(categoriesRef)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Category[]
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getPostById(id: string) {
  try {
    const postRef = doc(db, 'blogs', id)
    const snapshot = await getDoc(postRef)
    
    if (!snapshot.exists()) return null
    
    return {
      id: snapshot.id,
      ...snapshot.data(),
      createdAt: snapshot.data().createdAt?.toDate() || new Date(),
      updatedAt: snapshot.data().updatedAt?.toDate() || new Date(),
    } as BlogPost
  } catch (error) {
    console.error('Error fetching post by ID:', error)
    return null
  }
}

export async function getCategoryById(id: string) {
  try {
    const categoryRef = doc(db, 'categories', id)
    const snapshot = await getDoc(categoryRef)
    
    if (!snapshot.exists()) return null
    
    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as Category
  } catch (error) {
    console.error('Error fetching category by ID:', error)
    return null
  }
}

export async function getCategoryBySlug(slug: string) {
  try {
    const categoriesRef = collection(db, 'categories')
    const q = query(categoriesRef, where('slug', '==', slug))
    const snapshot = await getDocs(q)
    
    if (snapshot.empty) return null
    
    const doc = snapshot.docs[0]
    return {
      id: doc.id,
      ...doc.data(),
    } as Category
  } catch (error) {
    console.error('Error fetching category by slug:', error)
    return null
  }
}

// Admin Functions
export async function getAllPosts() {
  try {
    const postsRef = collection(db, 'blogs')
    const q = query(postsRef, orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
      updatedAt: doc.data().updatedAt?.toDate() || new Date(),
    })) as BlogPost[]
  } catch (error) {
    console.error('Error fetching all posts:', error)
    return []
  }
}

export async function createPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const postsRef = collection(db, 'blogs')
    const docRef = await addDoc(postsRef, {
      ...postData,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating post:', error)
    return { success: false, error: 'Failed to create post' }
  }
}

export async function updatePost(id: string, postData: Partial<BlogPost>) {
  try {
    const postRef = doc(db, 'blogs', id)
    await updateDoc(postRef, {
      ...postData,
      updatedAt: Timestamp.now(),
    })
    return { success: true }
  } catch (error) {
    console.error('Error updating post:', error)
    return { success: false, error: 'Failed to update post' }
  }
}

export async function deletePost(id: string) {
  try {
    await deleteDoc(doc(db, 'blogs', id))
    return { success: true }
  } catch (error) {
    console.error('Error deleting post:', error)
    return { success: false, error: 'Failed to delete post' }
  }
}

export async function togglePostStatus(id: string, currentStatus: 'draft' | 'published') {
  try {
    const postRef = doc(db, 'blogs', id)
    await updateDoc(postRef, {
      status: currentStatus === 'draft' ? 'published' : 'draft',
      updatedAt: Timestamp.now(),
    })
    return { success: true }
  } catch (error) {
    console.error('Error toggling post status:', error)
    return { success: false, error: 'Failed to toggle post status' }
  }
}

export async function createCategory(categoryData: Omit<Category, 'id'>) {
  try {
    const categoriesRef = collection(db, 'categories')
    const docRef = await addDoc(categoriesRef, categoryData)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error creating category:', error)
    return { success: false, error: 'Failed to create category' }
  }
}

export async function updateCategory(id: string, categoryData: Partial<Category>) {
  try {
    const categoryRef = doc(db, 'categories', id)
    await updateDoc(categoryRef, categoryData)
    return { success: true }
  } catch (error) {
    console.error('Error updating category:', error)
    return { success: false, error: 'Failed to update category' }
  }
}

export async function deleteCategory(id: string) {
  try {
    await deleteDoc(doc(db, 'categories', id))
    return { success: true }
  } catch (error) {
    console.error('Error deleting category:', error)
    return { success: false, error: 'Failed to delete category' }
  }
}

export async function getAllMessages() {
  try {
    const messagesRef = collection(db, 'contact_messages')
    const q = query(messagesRef, orderBy('createdAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date(),
    }))
  } catch (error) {
    console.error('Error fetching messages:', error)
    return []
  }
}

export async function markMessageAsRead(id: string) {
  try {
    const messageRef = doc(db, 'contact_messages', id)
    await updateDoc(messageRef, { read: true })
    return { success: true }
  } catch (error) {
    console.error('Error marking message as read:', error)
    return { success: false, error: 'Failed to mark message as read' }
  }
}

export async function getAllSubscribers() {
  try {
    const subscribersRef = collection(db, 'subscribers')
    const q = query(subscribersRef, orderBy('subscribedAt', 'desc'))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      subscribedAt: doc.data().subscribedAt?.toDate() || new Date(),
    }))
  } catch (error) {
    console.error('Error fetching subscribers:', error)
    return []
  }
}

export async function getStats() {
  try {
    const [postsSnapshot, categoriesSnapshot, messagesSnapshot, subscribersSnapshot] = await Promise.all([
      getDocs(collection(db, 'blogs')),
      getDocs(collection(db, 'categories')),
      getDocs(collection(db, 'contact_messages')),
      getDocs(collection(db, 'subscribers')),
    ])

    const publishedPosts = postsSnapshot.docs.filter(doc => doc.data().status === 'published').length
    const draftPosts = postsSnapshot.docs.filter(doc => doc.data().status === 'draft').length

    return {
      totalBlogs: postsSnapshot.size,
      publishedBlogs: publishedPosts,
      draftBlogs: draftPosts,
      totalCategories: categoriesSnapshot.size,
      totalMessages: messagesSnapshot.size,
      unreadMessages: messagesSnapshot.docs.filter(doc => !doc.data().read).length,
      totalSubscribers: subscribersSnapshot.size,
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return {
      totalBlogs: 0,
      publishedBlogs: 0,
      draftBlogs: 0,
      totalCategories: 0,
      totalMessages: 0,
      unreadMessages: 0,
      totalSubscribers: 0,
    }
  }
}

// Site Settings Functions
export async function getSiteSettings() {
  try {
    const settingsRef = doc(db, 'settings', 'site')
    const snapshot = await getDoc(settingsRef)
    
    if (snapshot.exists()) {
      return snapshot.data()
    }
    
    // Return default settings if none exist
    return {
      heroBanner: '',
      heroOpacity: 50,
    }
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return {
      heroBanner: '',
      heroOpacity: 50,
    }
  }
}

export async function updateSiteSettings(settings: any) {
  try {
    const settingsRef = doc(db, 'settings', 'site')
    await setDoc(settingsRef, settings, { merge: true })
    return { success: true }
  } catch (error) {
    console.error('Error updating site settings:', error)
    return { success: false, error: 'Failed to update site settings' }
  }
}