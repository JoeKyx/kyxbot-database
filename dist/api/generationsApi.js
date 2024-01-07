import { eq } from "drizzle-orm";
import { db } from "../db-connection";
import { image_generations, } from "../schema/imageGenerationsSchema";
export const addGeneration = async (generation) => {
    console.log(`Inserting generation with id: ${generation.generation_id}`);
    await db.insert(image_generations).values({ ...generation, status: "done" });
};
export const updateGenerationStatus = async (generationId, generationStatus) => {
    console.log(`Updating generation status to ${generationStatus}`);
    await db
        .update(image_generations)
        .set({ status: generationStatus })
        .where(eq(image_generations.generation_id, generationId));
};
const generationsApi = {
    addGeneration,
    updateGenerationStatus,
};
export default generationsApi;
