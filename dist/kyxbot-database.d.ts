import { UnknownKeysParam } from 'zod';
import { z } from 'zod';
import { default as Zod_2 } from 'zod';
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

export declare const createGuildSettings: (guildSettings: NewGuildSettings) => Promise<void>;

export declare const createNewUser: (discordId: DiscordId) => Promise<User>;

export declare const createPermissions: (newPermission: NewPermission) => Promise<void>;

export declare const createUpscaledImage: (upscaledImage: NewUpscaledImage) => Promise<void>;

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
    image_id: string;
    user: string;
    timestamp: Date;
    image_url: string;
    image_name: string;
} | undefined>;

export declare const getUploadedImages: (userId: DiscordId) => Promise<{
    image_id: string;
    user: string;
    timestamp: Date;
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
image_id: ZodString;
generation_id: ZodString;
image_url: ZodString;
upscaled_image_url: ZodOptional<ZodNullable<ZodString>>;
}, UnknownKeysParam, ZodTypeAny, {
image_id: string;
generation_id: string;
image_url: string;
upscaled_image_url?: string | null | undefined;
}, {
image_id: string;
generation_id: string;
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

declare const insertPermissionsSchema: Zod_2.ZodObject<{
    guild_id: Zod_2.ZodOptional<Zod_2.ZodNullable<Zod_2.ZodString>>;
    role: Zod_2.ZodOptional<Zod_2.ZodNullable<Zod_2.ZodEnum<["admin", "manager", "normal"]>>>;
    group_id: Zod_2.ZodOptional<Zod_2.ZodNullable<Zod_2.ZodString>>;
}, Zod_2.UnknownKeysParam, Zod_2.ZodTypeAny, {
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
image_id: ZodString;
user: ZodString;
timestamp: ZodOptional<ZodDate>;
image_url: ZodString;
image_name: ZodString;
}, "timestamp">, UnknownKeysParam, ZodTypeAny, {
image_id: string;
user: string;
image_url: string;
image_name: string;
}, {
image_id: string;
user: string;
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

export declare type NewPermission = Zod_2.infer<typeof insertPermissionsSchema>;

export declare type NewUploadedImage = Zod.infer<typeof insertUploadedImageSchema>;

export declare type NewUpscaledImage = Zod.infer<typeof insertUpscaledImageSchema>;

export declare type NewUserInformation = Zod.infer<typeof insertUserInformationSchema>;

export declare type Permission = Zod_2.infer<typeof selectPermissionsSchema>;

export declare const removeModRole: (guildId: GuildId) => Promise<void>;

export declare const removeUserRole: (guildId: GuildId, roleId: string) => Promise<void>;

export declare const resetPermissions: (guildId: string, modGroups: string[], userGroups: string[]) => Promise<void>;

export declare type Role = Zod_2.infer<typeof roleSchema>;

declare const roleSchema: Zod_2.ZodEnum<["admin", "manager", "normal"]>;

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

declare const selectPermissionsSchema: Zod_2.ZodObject<{
    guild_id: Zod_2.ZodNullable<Zod_2.ZodString>;
    role: Zod_2.ZodNullable<Zod_2.ZodEnum<["admin", "manager", "normal"]>>;
    group_id: Zod_2.ZodNullable<Zod_2.ZodString>;
}, Zod_2.UnknownKeysParam, Zod_2.ZodTypeAny, {
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
image_id: string;
user: string;
timestamp: Date;
image_url: string;
image_name: string;
}, {
image_id: string;
user: string;
timestamp: Date;
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
