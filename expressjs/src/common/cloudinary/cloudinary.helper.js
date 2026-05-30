import { cloudinary } from './cloudinary.config.js';

export const uploadToCloudinary = async (buffer, folder = 'images', publicId = null) => {
    return new Promise((resolve, reject) => {
        const uploadOptions = {
            resource_type: 'image',
            folder: folder,
            transformation: [{ width: 1000, crop: 'limit' }],
        };

        if (publicId) uploadOptions.public_id = publicId;

        const stream = cloudinary.uploader.upload_stream(
            uploadOptions,
            (error, result) => {
                if (error) reject(new Error(`Upload failed: ${error.message}`));
                else resolve(result);
            }
        );

        stream.end(buffer);
    });
};

export const deleteFromCloudinary = async (publicId) => {
    try {
        return await cloudinary.uploader.destroy(publicId);
    } catch (error) {
        throw new Error(`Delete failed: ${error.message}`);
    }
};

export const getCloudinaryUrl = (cloudinaryResult, transformation = null) => {
    if (!cloudinaryResult?.secure_url) return null;
    if (transformation) {
        return cloudinaryResult.secure_url.replace('/upload/', `/upload/${transformation}/`);
    }
    return cloudinaryResult.secure_url;
};