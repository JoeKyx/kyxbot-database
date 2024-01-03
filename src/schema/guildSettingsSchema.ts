import { boolean } from "drizzle-orm/pg-core";
import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const guild_settings = pgTable("guild_settings", {
  guild_id: varchar("guild_id").primaryKey(),
  personality: varchar("personality"),
  usingPermissions: boolean("usingPermissions").default(false),
  name: varchar("name"),
});

export const insertGuildSettingsSchema = createInsertSchema(guild_settings);

export const selectGuildSettingsSchema = createSelectSchema(guild_settings);

export type NewGuildSettings = Zod.infer<typeof insertGuildSettingsSchema>;

export type GuildId = Zod.infer<typeof selectGuildSettingsSchema>["guild_id"];
