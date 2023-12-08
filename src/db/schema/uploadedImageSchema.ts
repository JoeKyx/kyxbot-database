import { date, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { users } from "./usersSchema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { sql } from "drizzle-orm";

export const uploaded_images = pgTable(
  "uploaded_images",
  {
    image_id: varchar("image_id").primaryKey(),
    user: varchar("user")
      .references(() => users.discordId)
      .notNull(),
    image_url: text("image_url").notNull(),
    image_name: text("image_name").notNull(),
    timestamp: timestamp("timestamp", { mode: "date" })
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (t) => ({
    unique: {
      user_image_name: {
        columns: [t.user, t.image_name],
      },
    },
  })
);

export const selectUploadedImageSchema = createSelectSchema(uploaded_images);

export const insertUploadedImageSchema = createInsertSchema(
  uploaded_images
).omit({ timestamp: true });

export type NewUploadedImage = Zod.infer<typeof insertUploadedImageSchema>;

export type UploadedImageId = Zod.infer<
  typeof selectUploadedImageSchema
>["image_id"];

export type UploadedImage = Zod.infer<typeof selectUploadedImageSchema>;
