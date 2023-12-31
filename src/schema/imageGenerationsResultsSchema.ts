import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { image_generations } from "./imageGenerationsSchema.js";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";

export const image_generation_results = pgTable("image_generation_results", {
  image_id: varchar("image_id").primaryKey(),
  generation_id: varchar("generation_id")
    .references(() => image_generations.generation_id)
    .notNull(),
  image_url: text("image_url").notNull(),
  upscaled_image_url: text("upscaled_image_url"),
});

export const insertImageGenerationResultSchema = createInsertSchema(
  image_generation_results
);

export type NewImageGenerationResult = Zod.infer<
  typeof insertImageGenerationResultSchema
>;

export type ImageGenerationResultId = Zod.infer<
  typeof insertImageGenerationResultSchema
>["image_id"];

export const imageGenerationResultsRelations = relations(
  image_generation_results,
  ({ one }) => ({
    image_generation: one(image_generations, {
      fields: [image_generation_results.generation_id],
      references: [image_generations.generation_id],
    }),
  })
);
