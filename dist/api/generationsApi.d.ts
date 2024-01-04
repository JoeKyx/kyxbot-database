import { ImageGenerationId, ImageGenerationStatus, NewImageGeneration } from "../schema/imageGenerationsSchema";
export declare const addGeneration: (generation: NewImageGeneration) => Promise<void>;
export declare const updateGenerationStatus: (generationId: ImageGenerationId, generationStatus: ImageGenerationStatus) => Promise<void>;
