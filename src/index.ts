import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import dotenv from "dotenv";
import { NewGuildSettings, guild_settings } from "./schema/guildSettingsSchema";
import {
  imageGenerationResultsRelations,
  image_generation_results,
} from "./schema/imageGenerationsResultsSchema";
import {
  imageGenerationRelations,
  image_generations,
} from "./schema/imageGenerationsSchema";
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

export * from './schema/guildSettingsSchema';
export * from './schema/imageGenerationsResultsSchema';
export * from './schema/imageGenerationsSchema';
export * from './schema/permissionsSchema';
export * from './schema/uploadedImageSchema';
export * from './schema/upscaledImagesSchema';
export * from './schema/userInformations';
export * from './schema/usersSchema';
export * from './api/generationResultsApi';
export * from './api/generationsApi';
export * from './api/guildSettingsApi';
export * from './api/permissionsApi';
export * from './api/uploadImageApi';
export * from './api/upscaleImageApi';
export * from './api/userInformationApi';
export * from './api/usersApi';
