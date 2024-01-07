import { GuildId, NewGuildSettings } from "../schema/guildSettingsSchema";
export declare const createGuildSettings: (guildSettings: NewGuildSettings) => Promise<void>;
export declare const getGuildSettings: (guildId: GuildId) => Promise<{
    guild_id: string;
    personality: string | null;
    name: string | null;
    usingPermissions: boolean | null;
} | null>;
export declare const updateGuildSettings: (guildId: GuildId, guildSettings: Partial<NewGuildSettings>) => Promise<void>;
export declare const upsertGuildSettings: (guildId: GuildId, guildSettings: NewGuildSettings) => Promise<void>;
declare const guildSettingsApi: {
    createGuildSettings: (guildSettings: NewGuildSettings) => Promise<void>;
    getGuildSettings: (guildId: GuildId) => Promise<{
        guild_id: string;
        personality: string | null;
        name: string | null;
        usingPermissions: boolean | null;
    } | null>;
    updateGuildSettings: (guildId: GuildId, guildSettings: Partial<NewGuildSettings>) => Promise<void>;
    upsertGuildSettings: (guildId: GuildId, guildSettings: NewGuildSettings) => Promise<void>;
};
export default guildSettingsApi;
//# sourceMappingURL=guildSettingsApi.d.ts.map