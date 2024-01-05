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

export {
  NewGuildSettings,
  GuildId,
} from './schema/guildSettingsSchema';

export {
  NewImageGeneration,
  ImageGenerationId,
} from './schema/imageGenerationsSchema';

export {
  ImageGenerationResultId,
  NewImageGenerationResult
} from './schema/imageGenerationsResultsSchema'


export {
  NewPermission,
  Permission,
  Role,
} from './schema/permissionsSchema';

export {
  NewUploadedImage,
  UploadedImageId,
  UploadedImage
} from './schema/uploadedImageSchema';

export {
  NewUpscaledImage,
  UpscaledImageId
} from './schema/upscaledImagesSchema';

export {
  NewUserInformation,
  UserInformationId,
  UserInformation
} from './schema/userInformations';

export {
  DiscordId,
  User
} from './schema/usersSchema';

export {
  addGenerationResults,
  getAmountOfPagesForUser,
  getGenerationResultsFromUser,
  getGenerationResultsFromUserPaginated,
  getGenerationResultsFromUserWithinGuild
} from './api/generationResultsApi';
export {
  addGeneration,
  updateGenerationStatus
} from './api/generationsApi';
export {createGuildSettings,getGuildSettings,updateGuildSettings,upsertGuildSettings} from './api/guildSettingsApi';
export {addUserRole,createPermissions,findPermission,getModRoles,getPermissionsForGuildAndGroup,getUserPrivileges,getUserRoles,hasAccess,removeModRole,removeUserRole,resetPermissions,setModRole} from './api/permissionsApi';
export {getUploadedImageByName,getUploadedImages,insertUploadedImage} from './api/uploadImageApi';
export {createUpscaledImage,getUpscaledImage} from './api/upscaleImageApi';
export {getUserInformation,getUserInformationInGuild,insertUserInformation} from './api/userInformationApi';
export {createNewUser,getUserByDiscordId} from './api/usersApi';
