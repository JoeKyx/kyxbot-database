import { db } from "../index";
import { upscaled_images, } from "../schema/upscaledImagesSchema";
import { eq } from "drizzle-orm";
export const getUpscaledImage = async (imageId) => {
    const result = await db.query.upscaled_images.findFirst({
        where: eq(upscaled_images.original_image, imageId),
    });
    if (!result) {
        return null;
    }
    return result;
};
export const createUpscaledImage = async (upscaledImage) => {
    console.log(`Inserting upscaled image with id: ${upscaledImage.original_image}`);
    await db.insert(upscaled_images).values(upscaledImage);
};
const upscaleImageApi = {
    getUpscaledImage,
    createUpscaledImage,
};
export default upscaleImageApi;
