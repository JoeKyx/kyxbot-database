import { ImageGenerationResultId } from "../schema/imageGenerationsResultsSchema";
import { NewUpscaledImage } from "../schema/upscaledImagesSchema";
export declare const getUpscaledImage: (imageId: ImageGenerationResultId) => Promise<{
    timestamp: Date;
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
} | null>;
export declare const createUpscaledImage: (upscaledImage: NewUpscaledImage) => Promise<void>;
declare const upscaleImageApi: {
    getUpscaledImage: (imageId: ImageGenerationResultId) => Promise<{
        timestamp: Date;
        image_url: string;
        variation_id: string;
        upscaled_by: string;
        original_image: string;
    } | null>;
    createUpscaledImage: (upscaledImage: NewUpscaledImage) => Promise<void>;
};
export default upscaleImageApi;
//# sourceMappingURL=upscaleImageApi.d.ts.map