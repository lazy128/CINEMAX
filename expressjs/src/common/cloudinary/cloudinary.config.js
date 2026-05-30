import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary using CLOUDINARY_URL or individual env variables
const cloudinaryUrl = process.env.CLOUDINARY_URL;

if (cloudinaryUrl) {
  // Parse CLOUDINARY_URL format: cloudinary://<api_key>:<api_secret>@<cloud_name>
  try {
    const urlParts = cloudinaryUrl.replace('cloudinary://', '').split('@');
    const credentials = urlParts[0].split(':');
    const cloudName = urlParts[1];

    cloudinary.config({
      cloud_name: cloudName,
      api_key: credentials[0],
      api_secret: credentials[1],
    });
  } catch (error) {
    console.error('Failed to parse CLOUDINARY_URL:', error.message);
    throw new Error('Invalid Cloudinary URL format');
  }
} else {
  // Use individual environment variables
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

export { cloudinary };
