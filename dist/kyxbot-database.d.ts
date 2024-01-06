import { default as default_2 } from 'zod';
import { Many } from 'drizzle-orm';
import { One } from 'drizzle-orm';
import { PgColumn } from 'drizzle-orm/pg-core';
import { PgTableWithColumns } from 'drizzle-orm/pg-core';
import postgres from 'postgres';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { Relations } from 'drizzle-orm';
import { UnknownKeysParam } from 'zod';
import { z } from 'zod';
import { ZodBoolean } from 'zod';
import { ZodDate } from 'zod';
import { ZodNullable } from 'zod';
import { ZodNumber } from 'zod';
import { ZodObject } from 'zod';
import { ZodOptional } from 'zod';
import { ZodString } from 'zod';
import { ZodTypeAny } from 'zod';

export declare const addGeneration: (generation: NewImageGeneration) => Promise<void>;

export declare const addGenerationResults: (generationResults: NewImageGenerationResult[]) => Promise<void>;

export declare const addUserRole: (guildId: GuildId, roleId: string) => Promise<void>;

export declare const client: postgres.Sql<{}>;

export declare const createGuildSettings: (guildSettings: NewGuildSettings) => Promise<void>;

export declare const createNewUser: (discordId: DiscordId) => Promise<User>;

export declare const createPermissions: (newPermission: NewPermission) => Promise<void>;

export declare const createUpscaledImage: (upscaledImage: NewUpscaledImage) => Promise<void>;

export declare const db: PostgresJsDatabase<    {
    users: PgTableWithColumns<    {
        name: "users";
        schema: undefined;
        columns: {
            discordId: PgColumn<    {
                name: "discord_id";
                tableName: "users";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            money: PgColumn<    {
                name: "money";
                tableName: "users";
                dataType: "number";
                columnType: "PgInteger";
                data: number;
                driverParam: string | number;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    image_generations: PgTableWithColumns<    {
        name: "image_generations";
        schema: undefined;
        columns: {
            generation_id: PgColumn<    {
                name: "generation_id";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            user: PgColumn<    {
                name: "user";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            guild: PgColumn<    {
                name: "guild";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            prompt: PgColumn<    {
                name: "prompt";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            interactionId: PgColumn<    {
                name: "message_id";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            status: PgColumn<    {
                name: "status";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            timestamp: PgColumn<    {
                name: "timestamp";
                tableName: "image_generations";
                dataType: "date";
                columnType: "PgTimestamp";
                data: Date;
                driverParam: string;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    image_generation_results: PgTableWithColumns<    {
        name: "image_generation_results";
        schema: undefined;
        columns: {
            image_id: PgColumn<    {
                name: "image_id";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            generation_id: PgColumn<    {
                name: "generation_id";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: PgColumn<    {
                name: "image_url";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            upscaled_image_url: PgColumn<    {
                name: "upscaled_image_url";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    upscaled_images: PgTableWithColumns<    {
        name: "upscaled_images";
        schema: undefined;
        columns: {
            variation_id: PgColumn<    {
                name: "variation_id";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            upscaled_by: PgColumn<    {
                name: "upscaled_by";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: PgColumn<    {
                name: "image_url";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            original_image: PgColumn<    {
                name: "original_image";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            timestamp: PgColumn<    {
                name: "timestamp";
                tableName: "upscaled_images";
                dataType: "date";
                columnType: "PgTimestamp";
                data: Date;
                driverParam: string;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    guild_settings: PgTableWithColumns<    {
        name: "guild_settings";
        schema: undefined;
        columns: {
            guild_id: PgColumn<    {
                name: "guild_id";
                tableName: "guild_settings";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            personality: PgColumn<    {
                name: "personality";
                tableName: "guild_settings";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            usingPermissions: PgColumn<    {
                name: "usingPermissions";
                tableName: "guild_settings";
                dataType: "boolean";
                columnType: "PgBoolean";
                data: boolean;
                driverParam: boolean;
                notNull: false;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
            name: PgColumn<    {
                name: "name";
                tableName: "guild_settings";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    uploaded_images: PgTableWithColumns<    {
        name: "uploaded_images";
        schema: undefined;
        columns: {
            image_id: PgColumn<    {
                name: "image_id";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            user: PgColumn<    {
                name: "user";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: PgColumn<    {
                name: "image_url";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_name: PgColumn<    {
                name: "image_name";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            timestamp: PgColumn<    {
                name: "timestamp";
                tableName: "uploaded_images";
                dataType: "date";
                columnType: "PgTimestamp";
                data: Date;
                driverParam: string;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    userInformations: PgTableWithColumns<    {
        name: "user_informations";
        schema: undefined;
        columns: {
            id: PgColumn<    {
                name: "id";
                tableName: "user_informations";
                dataType: "number";
                columnType: "PgSerial";
                data: number;
                driverParam: number;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
            user: PgColumn<    {
                name: "user";
                tableName: "user_informations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            guild: PgColumn<    {
                name: "guild";
                tableName: "user_informations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            information: PgColumn<    {
                name: "information";
                tableName: "user_informations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            timestamp: PgColumn<    {
                name: "timestamp";
                tableName: "user_informations";
                dataType: "date";
                columnType: "PgTimestamp";
                data: Date;
                driverParam: string;
                notNull: true;
                hasDefault: true;
                enumValues: undefined;
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
    imageGenerationRelations: Relations<"image_generations", {
        generation_results: Many<"image_generation_results">;
    }>;
    imageGenerationResultsRelations: Relations<"image_generation_results", {
        image_generation: One<"image_generations", true>;
    }>;
    permissions: PgTableWithColumns<    {
        name: "permissions";
        schema: undefined;
        columns: {
            guild_id: PgColumn<    {
                name: "guild_id";
                tableName: "permissions";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            role: PgColumn<    {
                name: "role";
                tableName: "permissions";
                dataType: "string";
                columnType: "PgEnumColumn";
                data: "admin" | "manager" | "normal";
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: ["admin", "manager", "normal"];
                baseColumn: never;
            }, {}, {}>;
            group_id: PgColumn<    {
                name: "group_id";
                tableName: "permissions";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: false;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
        };
        dialect: "pg";
    }>;
}>;

export declare type DiscordId = z.infer<typeof discordIdSchema>["discordId"];

declare const discordIdSchema: z.ZodObject<Pick<{
    discordId: z.ZodString;
    money: z.ZodNumber;
}, "discordId">, z.UnknownKeysParam, z.ZodTypeAny, {
    discordId: string;
}, {
    discordId: string;
}>;

export declare const findPermission: (guildId: string, groupIds: string[], role: Role) => Promise<boolean>;

export declare const getAmountOfPagesForUser: (discordId: DiscordId, pageSize: number) => Promise<number>;

export declare const getGenerationResultsFromUser: (discordId: DiscordId) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;

export declare const getGenerationResultsFromUserPaginated: (discordId: DiscordId, page?: number, pageSize?: number) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;

export declare const getGenerationResultsFromUserWithinGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;

export declare const getGuildSettings: (guildId: GuildId) => Promise<{
    name: string | null;
    guild_id: string;
    personality: string | null;
    usingPermissions: boolean | null;
} | null>;

export declare const getModRoles: (guildId: GuildId) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}[] | null>;

export declare const getPermissionsForGuildAndGroup: (guildId: string, groupId: string) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
} | null>;

export declare const getUploadedImageByName: (userId: DiscordId, name: string) => Promise<{
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
} | undefined>;

export declare const getUploadedImages: (userId: DiscordId) => Promise<{
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}[]>;

export declare const getUpscaledImage: (imageId: ImageGenerationResultId) => Promise<{
    timestamp: Date;
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
} | null>;

export declare const getUserByDiscordId: (discordId: DiscordId) => Promise<User | null>;

export declare const getUserInformation: (discordId: DiscordId) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}[]>;

export declare const getUserInformationInGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}[]>;

export declare const getUserPrivileges: (guildId: string, groupIds: string[]) => Promise<"manager" | "normal" | "none">;

export declare const getUserRoles: (guildId: GuildId) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}[] | null>;

export declare type GuildId = Zod.infer<typeof selectGuildSettingsSchema>["guild_id"];

export declare const hasAccess: (guildId: string, groupIds: string[]) => Promise<boolean>;

export declare type ImageGenerationId = Zod.infer<typeof selectImageGenerationSchema>["generation_id"];

export declare type ImageGenerationResultId = Zod.infer<typeof insertImageGenerationResultSchema>["image_id"];

declare type ImageGenerationStatus = Zod.infer<typeof selectImageGenerationSchema>["status"];

declare const insertGuildSettingsSchema: ZodObject<    {
    name: ZodOptional<ZodNullable<ZodString>>;
    guild_id: ZodString;
    personality: ZodOptional<ZodNullable<ZodString>>;
    usingPermissions: ZodOptional<ZodNullable<ZodBoolean>>;
}, UnknownKeysParam, ZodTypeAny, {
    guild_id: string;
    name?: string | null | undefined;
    personality?: string | null | undefined;
    usingPermissions?: boolean | null | undefined;
}, {
    guild_id: string;
    name?: string | null | undefined;
    personality?: string | null | undefined;
    usingPermissions?: boolean | null | undefined;
}>;

declare const insertImageGenerationResultSchema: ZodObject<    {
    generation_id: ZodString;
    image_id: ZodString;
    image_url: ZodString;
    upscaled_image_url: ZodOptional<ZodNullable<ZodString>>;
}, UnknownKeysParam, ZodTypeAny, {
    generation_id: string;
    image_id: string;
    image_url: string;
    upscaled_image_url?: string | null | undefined;
}, {
    generation_id: string;
    image_id: string;
    image_url: string;
    upscaled_image_url?: string | null | undefined;
}>;

declare const insertImageGenerationSchema: ZodObject<Omit<{
    generation_id: ZodString;
    user: ZodString;
    guild: ZodString;
    prompt: ZodString;
    interactionId: ZodString;
    status: ZodString;
    timestamp: ZodOptional<ZodDate>;
}, "status">, UnknownKeysParam, ZodTypeAny, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp?: Date | undefined;
}, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp?: Date | undefined;
}>;

declare const insertPermissionsSchema: default_2.ZodObject<{
    guild_id: default_2.ZodOptional<default_2.ZodNullable<default_2.ZodString>>;
    role: default_2.ZodOptional<default_2.ZodNullable<default_2.ZodEnum<["admin", "manager", "normal"]>>>;
    group_id: default_2.ZodOptional<default_2.ZodNullable<default_2.ZodString>>;
}, default_2.UnknownKeysParam, default_2.ZodTypeAny, {
    guild_id?: string | null | undefined;
    role?: "admin" | "manager" | "normal" | null | undefined;
    group_id?: string | null | undefined;
}, {
    guild_id?: string | null | undefined;
    role?: "admin" | "manager" | "normal" | null | undefined;
    group_id?: string | null | undefined;
}>;

export declare const insertUploadedImage: (uploadedImage: NewUploadedImage) => Promise<void>;

declare const insertUploadedImageSchema: ZodObject<Omit<{
    user: ZodString;
    timestamp: ZodOptional<ZodDate>;
    image_id: ZodString;
    image_url: ZodString;
    image_name: ZodString;
}, "timestamp">, UnknownKeysParam, ZodTypeAny, {
    user: string;
    image_id: string;
    image_url: string;
    image_name: string;
}, {
    user: string;
    image_id: string;
    image_url: string;
    image_name: string;
}>;

declare const insertUpscaledImageSchema: ZodObject<Omit<{
    timestamp: ZodOptional<ZodDate>;
    image_url: ZodString;
    variation_id: ZodString;
    upscaled_by: ZodString;
    original_image: ZodString;
}, "timestamp">, UnknownKeysParam, ZodTypeAny, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
}, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
}>;

export declare const insertUserInformation: (newUserInformation: NewUserInformation) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}>;

declare const insertUserInformationSchema: ZodObject<Omit<{
    user: ZodString;
    guild: ZodString;
    timestamp: ZodOptional<ZodDate>;
    id: ZodOptional<ZodNumber>;
    information: ZodString;
}, "timestamp">, UnknownKeysParam, ZodTypeAny, {
    user: string;
    guild: string;
    information: string;
    id?: number | undefined;
}, {
    user: string;
    guild: string;
    information: string;
    id?: number | undefined;
}>;

export declare type NewGuildSettings = Zod.infer<typeof insertGuildSettingsSchema>;

export declare type NewImageGeneration = Zod.infer<typeof insertImageGenerationSchema>;

export declare type NewImageGenerationResult = Zod.infer<typeof insertImageGenerationResultSchema>;

export declare type NewPermission = default_2.infer<typeof insertPermissionsSchema>;

export declare type NewUploadedImage = Zod.infer<typeof insertUploadedImageSchema>;

export declare type NewUpscaledImage = Zod.infer<typeof insertUpscaledImageSchema>;

export declare type NewUserInformation = Zod.infer<typeof insertUserInformationSchema>;

export declare type Permission = default_2.infer<typeof selectPermissionsSchema>;

export declare const removeModRole: (guildId: GuildId) => Promise<void>;

export declare const removeUserRole: (guildId: GuildId, roleId: string) => Promise<void>;

export declare const resetPermissions: (guildId: string, modGroups: string[], userGroups: string[]) => Promise<void>;

export declare type Role = default_2.infer<typeof roleSchema>;

declare const roleSchema: default_2.ZodEnum<["admin", "manager", "normal"]>;

declare const selectGuildSettingsSchema: ZodObject<    {
    guild_id: ZodString;
    personality: ZodNullable<ZodString>;
    usingPermissions: ZodNullable<ZodBoolean>;
    name: ZodNullable<ZodString>;
}, UnknownKeysParam, ZodTypeAny, {
    name: string | null;
    guild_id: string;
    personality: string | null;
    usingPermissions: boolean | null;
}, {
    name: string | null;
    guild_id: string;
    personality: string | null;
    usingPermissions: boolean | null;
}>;

declare const selectImageGenerationSchema: ZodObject<    {
    generation_id: ZodString;
    user: ZodString;
    guild: ZodString;
    prompt: ZodString;
    interactionId: ZodString;
    status: ZodString;
    timestamp: ZodDate;
}, UnknownKeysParam, ZodTypeAny, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    status: string;
    timestamp: Date;
}, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    status: string;
    timestamp: Date;
}>;

declare const selectPermissionsSchema: default_2.ZodObject<{
    guild_id: default_2.ZodNullable<default_2.ZodString>;
    role: default_2.ZodNullable<default_2.ZodEnum<["admin", "manager", "normal"]>>;
    group_id: default_2.ZodNullable<default_2.ZodString>;
}, default_2.UnknownKeysParam, default_2.ZodTypeAny, {
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}, {
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}>;

declare const selectUploadedImageSchema: ZodObject<    {
    image_id: ZodString;
    user: ZodString;
    image_url: ZodString;
    image_name: ZodString;
    timestamp: ZodDate;
}, UnknownKeysParam, ZodTypeAny, {
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}, {
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}>;

declare const selectUpscaledImageSchema: ZodObject<    {
    timestamp: ZodOptional<ZodDate>;
    image_url: ZodString;
    variation_id: ZodString;
    upscaled_by: ZodString;
    original_image: ZodString;
}, UnknownKeysParam, ZodTypeAny, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
    timestamp?: Date | undefined;
}, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
    timestamp?: Date | undefined;
}>;

declare const selectUserInformationSchema: ZodObject<    {
    id: ZodNumber;
    user: ZodString;
    guild: ZodString;
    information: ZodString;
    timestamp: ZodDate;
}, UnknownKeysParam, ZodTypeAny, {
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}, {
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}>;

declare const selectUserSchema: z.ZodObject<{
    discordId: z.ZodString;
    money: z.ZodNumber;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    discordId: string;
    money: number;
}, {
    discordId: string;
    money: number;
}>;

export declare const setModRole: (guildId: GuildId, roleId: string) => Promise<void>;

export declare const updateGenerationStatus: (generationId: ImageGenerationId, generationStatus: ImageGenerationStatus) => Promise<void>;

export declare const updateGuildSettings: (guildId: GuildId, guildSettings: Partial<NewGuildSettings>) => Promise<void>;

export declare type UploadedImage = Zod.infer<typeof selectUploadedImageSchema>;

export declare type UploadedImageId = Zod.infer<typeof selectUploadedImageSchema>["image_id"];

export declare type UpscaledImageId = Zod.infer<typeof selectUpscaledImageSchema>["variation_id"];

export declare const upsertGuildSettings: (guildId: GuildId, guildSettings: NewGuildSettings) => Promise<void>;

export declare type User = z.infer<typeof selectUserSchema>;

export declare type UserInformation = Zod.infer<typeof selectUserInformationSchema>;

export declare type UserInformationId = Zod.infer<typeof selectUserInformationSchema>["id"];

export { }
