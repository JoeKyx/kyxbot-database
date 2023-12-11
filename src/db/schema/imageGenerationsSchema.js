import { pgTable, varchar, text } from "drizzle-orm/pg-core";
import { users } from "./usersSchema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { image_generation_results } from "./imageGenerationsResultsSchema";
import { relations } from "drizzle-orm";
export const image_generations = pgTable("image_generations", {
    generation_id: varchar("generation_id").primaryKey(),
    user: varchar("user")
        .references(() => users.discordId)
        .notNull(),
    guild: varchar("guild").notNull(),
    prompt: text("prompt").notNull(),
    interactionId: varchar("message_id").notNull(),
    status: varchar("status").notNull(),
});
export const insertImageGenerationSchema = createInsertSchema(image_generations).omit({ status: true });
export const selectImageGenerationSchema = createSelectSchema(image_generations);
export const imageGenerationRelations = relations(image_generations, ({ many }) => ({
    generation_results: many(image_generation_results),
}));