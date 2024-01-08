import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import dotenv from "dotenv";
import { NewGuildSettings, guild_settings } from "./schema/guildSettingsSchema.js";
import {
  imageGenerationResultsRelations,
  image_generation_results,
} from "./schema/imageGenerationsResultsSchema.js";
import {
  imageGenerationRelations,
  image_generations,
} from "./schema/imageGenerationsSchema.js";
import { permissions } from "./schema/permissionsSchema.js";
import { uploaded_images } from "./schema/uploadedImageSchema.js";
import { upscaled_images } from "./schema/upscaledImagesSchema.js";
import { userInformations } from "./schema/userInformations.js";
import { users } from "./schema/usersSchema.js";

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
