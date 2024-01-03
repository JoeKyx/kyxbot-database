import { ImageGenerationResultId } from "../schema/imageGenerationsResultsSchema.js";
import { db } from "../index.js";
import {
  NewUpscaledImage,
  upscaled_images,
} from "../schema/upscaledImagesSchema.js";
import { eq } from "drizzle-orm";

export const getUpscaledImage = async (imageId: ImageGenerationResultId) => {
  const result = await db.query.upscaled_images.findFirst({
    where: eq(upscaled_images.original_image, imageId),
  });
  if (!result) {
    return null;
  }
  return result;
};

export const createUpscaledImage = async (upscaledImage: NewUpscaledImage) => {
  console.log(
    `Inserting upscaled image with id: ${upscaledImage.original_image}`
  );
  await db.insert(upscaled_images).values(upscaledImage);
};
