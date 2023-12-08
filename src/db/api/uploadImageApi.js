import { and, eq } from "drizzle-orm";
import { db } from "..";
import { uploaded_images, } from "../schema/uploadedImageSchema";
export const insertUploadedImage = async (uploadedImage) => {
    console.log(`Inserting uploaded image with id: ${uploadedImage.image_id}`);
    await db.insert(uploaded_images).values(uploadedImage);
};
export const getUploadedImages = async (userId) => {
    console.log(`Getting uploaded image for user: ${userId}`);
    const uploadedImage = await db.query.uploaded_images.findMany({
        where: eq(uploaded_images.user, userId),
    });
    return uploadedImage;
};
export const getUploadedImageByName = async (userId, name) => {
    console.log(`Getting uploaded image for user: ${userId}`);
    const uploadedImage = await db.query.uploaded_images.findFirst({
        where: and(eq(uploaded_images.user, userId), eq(uploaded_images.image_name, name)),
    });
    return uploadedImage;
};
