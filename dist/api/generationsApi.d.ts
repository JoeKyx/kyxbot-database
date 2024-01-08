import { ImageGenerationId, ImageGenerationStatus, NewImageGeneration } from "../schema/imageGenerationsSchema.js";
export declare const addGeneration: (generation: NewImageGeneration) => Promise<void>;
export declare const updateGenerationStatus: (generationId: ImageGenerationId, generationStatus: ImageGenerationStatus) => Promise<void>;
declare const generationsApi: {
    addGeneration: (generation: NewImageGeneration) => Promise<void>;
    updateGenerationStatus: (generationId: ImageGenerationId, generationStatus: ImageGenerationStatus) => Promise<void>;
};
export default generationsApi;
//# sourceMappingURL=generationsApi.d.ts.map