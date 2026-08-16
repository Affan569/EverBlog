import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export default cloudinary

export async function uploadImage(file: File | string, folder = 'blog-images') {
  try {
    const result = await cloudinary.uploader.upload(file as string, {
      folder,
      allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      transformation: [
        { quality: 'auto', fetch_format: 'auto' },
        { width: 1200, crop: 'limit' },
      ],
    })

    return {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
    }
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error)
    throw new Error('Failed to upload image')
  }
}

export async function deleteImage(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId)
    return { success: true }
  } catch (error) {
    console.error('Error deleting image from Cloudinary:', error)
    throw new Error('Failed to delete image')
  }
}