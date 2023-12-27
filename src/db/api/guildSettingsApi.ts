import { eq } from "drizzle-orm";
import { db } from "..";
import {
  GuildId,
  NewGuildSettings,
  guild_settings,
} from "../schema/guildSettingsSchema";

export const createGuildSettings = async (guildSettings: NewGuildSettings) => {
  console.log(`Inserting guild settings with id: ${guildSettings.guild_id}`);
  await db.insert(guild_settings).values(guildSettings);
};

export const getGuildSettings = async (guildId: GuildId) => {
  const result = await db.query.guild_settings.findFirst({
    where: eq(guild_settings.guild_id, guildId),
  });
  if (!result) {
    return null;
  }
  return result;
};

export const updateGuildSettings = async (
  guildId: GuildId,
  guildSettings: Partial<NewGuildSettings>
) => {
  console.log(`Updating guild settings with id: ${guildId}`);
  await db
    .update(guild_settings)
    .set(guildSettings)
    .where(eq(guild_settings.guild_id, guildId));
};

export const upsertGuildSettings = async (  guildId: GuildId, guildSettings: NewGuildSettings) => {
  // Check if guild settings already exist
  const existingGuildSettings = await getGuildSettings(guildId);
  if (existingGuildSettings) {
    await updateGuildSettings(guildId, guildSettings);
  } else {
    await createGuildSettings(guildSettings);
  }
}

