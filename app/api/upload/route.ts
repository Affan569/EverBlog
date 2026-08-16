import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Cloudinary
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: 'image',
          folder: 'blog-images',
          transformation: [
            { quality: 'auto', fetch_format: 'auto' },
            { width: 1200, crop: 'limit' },
          ],
        },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
    })
  } catch (error) {
    console.error('Error uploading image:', error)
    return NextResponse.json(
      { error: 'Failed to upload image' },
      { status: 500 }
    )
  }
}