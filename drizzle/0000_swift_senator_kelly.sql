DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('admin', 'manager', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "guild_settings" (
	"guild_id" varchar PRIMARY KEY NOT NULL,
	"personality" varchar,
	"usingPermissions" boolean DEFAULT false,
	"name" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "image_generation_results" (
	"image_id" varchar PRIMARY KEY NOT NULL,
	"generation_id" varchar NOT NULL,
	"image_url" text NOT NULL,
	"upscaled_image_url" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "image_generations" (
	"generation_id" varchar PRIMARY KEY NOT NULL,
	"user" varchar NOT NULL,
	"guild" varchar NOT NULL,
	"prompt" text NOT NULL,
	"message_id" varchar NOT NULL,
	"status" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "permissions" (
	"guild_id" varchar,
	"role" "role",
	"group_id" varchar,
	CONSTRAINT permissions_group_id_guild_id_role_pk PRIMARY KEY("group_id","guild_id","role")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "uploaded_images" (
	"image_id" varchar PRIMARY KEY NOT NULL,
	"user" varchar NOT NULL,
	"image_url" text NOT NULL,
	"image_name" text NOT NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "upscaled_images" (
	"variation_id" varchar PRIMARY KEY NOT NULL,
	"upscaled_by" varchar NOT NULL,
	"image_url" varchar NOT NULL,
	"original_image" varchar NOT NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_informations" (
	"id" serial PRIMARY KEY NOT NULL,
	"user" varchar NOT NULL,
	"guild" varchar NOT NULL,
	"information" varchar NOT NULL,
	"timestamp" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"discord_id" varchar PRIMARY KEY NOT NULL,
	"money" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "image_generation_results" ADD CONSTRAINT "image_generation_results_generation_id_image_generations_generation_id_fk" FOREIGN KEY ("generation_id") REFERENCES "image_generations"("generation_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "image_generations" ADD CONSTRAINT "image_generations_user_users_discord_id_fk" FOREIGN KEY ("user") REFERENCES "users"("discord_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "uploaded_images" ADD CONSTRAINT "uploaded_images_user_users_discord_id_fk" FOREIGN KEY ("user") REFERENCES "users"("discord_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upscaled_images" ADD CONSTRAINT "upscaled_images_upscaled_by_users_discord_id_fk" FOREIGN KEY ("upscaled_by") REFERENCES "users"("discord_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "upscaled_images" ADD CONSTRAINT "upscaled_images_original_image_image_generation_results_image_id_fk" FOREIGN KEY ("original_image") REFERENCES "image_generation_results"("image_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_informations" ADD CONSTRAINT "user_informations_user_users_discord_id_fk" FOREIGN KEY ("user") REFERENCES "users"("discord_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
