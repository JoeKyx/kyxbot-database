import { and, eq } from "drizzle-orm";
import { db } from "..";
import {
  NewUploadedImage,
  uploaded_images,
} from "../schema/uploadedImageSchema";
import { DiscordId } from "../schema/usersSchema";

export const insertUploadedImage = async (uploadedImage: NewUploadedImage) => {
  console.log(`Inserting uploaded image with id: ${uploadedImage.image_id}`);
  await db.insert(uploaded_images).values(uploadedImage);
};

export const getUploadedImages = async (userId: DiscordId) => {
  console.log(`Getting uploaded image for user: ${userId}`);
  const uploadedImage = await db.query.uploaded_images.findMany({
    where: eq(uploaded_images.user, userId),
  });
  return uploadedImage;
};

export const getUploadedImageByName = async (
  userId: DiscordId,
  name: string
) => {
  console.log(`Getting uploaded image for user: ${userId}`);
  const uploadedImage = await db.query.uploaded_images.findFirst({
    where: and(
      eq(uploaded_images.user, userId),
      eq(uploaded_images.image_name, name)
    ),
  });
  return uploadedImage;
};

const uploadImageApi = {
  insertUploadedImage,
  getUploadedImages,
  getUploadedImageByName,
};

export default uploadImageApi;