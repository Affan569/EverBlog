'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getSiteSettings, updateSiteSettings } from '@/lib/firebase-helpers'

export default function SettingsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  
  const [settings, setSettings] = useState({
    heroBanner: '',
    heroOpacity: 50,
  })

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    setLoading(true)
    try {
      const settingsData = await getSiteSettings()
      setSettings({
        heroBanner: settingsData.heroBanner || '',
        heroOpacity: settingsData.heroOpacity || 50,
      })
    } catch (error) {
      console.error('Error fetching settings:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSettings(prev => ({ ...prev, heroBanner: data.url }))
      } else {
        alert('Failed to upload image')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const result = await updateSiteSettings(settings)
      if (result.success) {
        alert('Settings saved successfully!')
      } else {
        alert('Failed to save settings')
      }
    } catch (error) {
      console.error('Error saving settings:', error)
      alert('Failed to save settings')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-50" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Site Settings
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Manage your website appearance
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Hero Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Hero Banner
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="heroBanner" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Banner Image
              </label>
              <input
                type="file"
                id="heroBanner"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:focus:border-zinc-600 dark:focus:ring-zinc-600/20 disabled:opacity-50"
              />
              {uploading && <p className="mt-1 text-sm text-zinc-600">Uploading...</p>}
            </div>

            {settings.heroBanner && (
              <div>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                  Current Banner:
                </p>
                <div className="relative h-48 w-full rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <img
                    src={settings.heroBanner}
                    alt="Hero Banner"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSettings(prev => ({ ...prev, heroBanner: '' }))}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors"
                    title="Remove banner"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Opacity */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Hero Opacity
          </h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="heroOpacity" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                Opacity: {settings.heroOpacity}%
              </label>
              <input
                type="range"
                id="heroOpacity"
                min="0"
                max="100"
                value={settings.heroOpacity}
                onChange={(e) => setSettings(prev => ({ ...prev, heroOpacity: parseInt(e.target.value) }))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"
              />
              <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                <span>0% (Transparent)</span>
                <span>50%</span>
                <span>100% (Opaque)</span>
              </div>
            </div>

            {/* Preview */}
            <div className="relative h-32 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800">
              {settings.heroBanner ? (
                <img
                  src={settings.heroBanner}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  style={{ opacity: settings.heroOpacity / 100 }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-400 dark:text-zinc-600">
                  No banner set
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/50 text-white px-3 py-1 rounded text-sm">
                  Preview: {settings.heroOpacity}% opacity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-colors"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}