import { GuildId, NewGuildSettings } from "../schema/guildSettingsSchema";
export declare const createGuildSettings: (guildSettings: NewGuildSettings) => Promise<void>;
export declare const getGuildSettings: (guildId: GuildId) => Promise<{
    name: string | null;
    guild_id: string;
    personality: string | null;
    usingPermissions: boolean | null;
} | null>;
export declare const updateGuildSettings: (guildId: GuildId, guildSettings: Partial<NewGuildSettings>) => Promise<void>;
export declare const upsertGuildSettings: (guildId: GuildId, guildSettings: NewGuildSettings) => Promise<void>;
