import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./usersSchema.js";
import { image_generation_results } from "./imageGenerationsResultsSchema.js";
import { createInsertSchema } from "drizzle-zod";
import { sql } from "drizzle-orm";

export const upscaled_images = pgTable("upscaled_images", {
  variation_id: varchar("variation_id").primaryKey(),
  upscaled_by: varchar("upscaled_by")
    .references(() => users.discordId)
    .notNull(),
  image_url: varchar("image_url").notNull(),
  original_image: varchar("original_image")
    .references(() => image_generation_results.image_id)
    .notNull(),
  timestamp: timestamp("timestamp")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const insertUpscaledImageSchema = createInsertSchema(
  upscaled_images
).omit({ timestamp: true });

export const selectUpscaledImageSchema = createInsertSchema(upscaled_images);

export type NewUpscaledImage = Zod.infer<typeof insertUpscaledImageSchema>;

export type UpscaledImageId = Zod.infer<
  typeof selectUpscaledImageSchema
>["variation_id"];
