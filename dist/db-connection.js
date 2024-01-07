import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";
import { guild_settings } from "./schema/guildSettingsSchema";
import { imageGenerationResultsRelations, image_generation_results, } from "./schema/imageGenerationsResultsSchema";
import { imageGenerationRelations, image_generations, } from "./schema/imageGenerationsSchema";
import { permissions } from "./schema/permissionsSchema";
import { uploaded_images } from "./schema/uploadedImageSchema";
import { upscaled_images } from "./schema/upscaledImagesSchema";
import { userInformations } from "./schema/userInformations";
import { users } from "./schema/usersSchema";
dotenv.config();
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL not found in .env file");
}
const schema = {
    users,
    image_generations,
    image_generation_results,
    upscaled_images,
    guild_settings,
    uploaded_images,
    userInformations,
    imageGenerationRelations,
    imageGenerationResultsRelations,
    permissions,
};
export const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
