import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  discordId: varchar("discord_id").primaryKey(),
  money: integer("money").notNull().default(0),
});

export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const discordIdSchema = selectUserSchema.pick({ discordId: true });

export type User = z.infer<typeof selectUserSchema>;
export type DiscordId = z.infer<typeof discordIdSchema>["discordId"];

