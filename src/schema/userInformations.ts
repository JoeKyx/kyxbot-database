import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./usersSchema";
import { sql } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { varchar } from "drizzle-orm/pg-core";

export const userInformations = pgTable("user_informations", {
  id: serial("id").primaryKey(),
  user: varchar("user")
    .references(() => users.discordId)
    .notNull(),
  guild: varchar("guild").notNull(),
  information: varchar("information").notNull(),
  timestamp: timestamp("timestamp", { mode: "date" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const insertUserInformationSchema = createInsertSchema(
  userInformations
).omit({ timestamp: true });

export const onlyNecessaryUserInformationSchema = createInsertSchema(
  userInformations
).pick({ user: true, information: true, guild: true });

export const selectUserInformationSchema = createSelectSchema(userInformations);

export type UserInformation = Zod.infer<typeof selectUserInformationSchema>;
export type UserInformationId = Zod.infer<
  typeof selectUserInformationSchema
>["id"];
export type NewUserInformation = Zod.infer<typeof insertUserInformationSchema>;
