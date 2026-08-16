// Admin configuration - only these emails can access the admin panel
export const ADMIN_EMAILS = process.env.ADMIN_EMAILS?.split(',') || [
  'admin@everblog.com',
  'admin123@everblog.com', // Default admin email
]

export function isAdmin(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase())
}