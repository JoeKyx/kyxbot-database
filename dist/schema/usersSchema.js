import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
export const users = pgTable("users", {
    discordId: varchar("discord_id").primaryKey(),
    money: integer("money").notNull().default(0),
});
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export const discordIdSchema = selectUserSchema.pick({ discordId: true });
