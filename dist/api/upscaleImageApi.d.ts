import { ImageGenerationResultId } from "../schema/imageGenerationsResultsSchema.js";
import { NewUpscaledImage } from "../schema/upscaledImagesSchema.js";
export declare const getUpscaledImage: (imageId: ImageGenerationResultId) => Promise<{
    timestamp: Date;
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
} | null>;
export declare const createUpscaledImage: (upscaledImage: NewUpscaledImage) => Promise<void>;
