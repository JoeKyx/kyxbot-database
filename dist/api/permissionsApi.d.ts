import { GuildId } from '../schema/guildSettingsSchema';
import { NewPermission, Role } from '../schema/permissionsSchema';
export declare const createPermissions: (newPermission: NewPermission) => Promise<void>;
export declare const setModRole: (guildId: GuildId, roleId: string) => Promise<void>;
export declare const removeModRole: (guildId: GuildId) => Promise<void>;
export declare const addUserRole: (guildId: GuildId, roleId: string) => Promise<void>;
export declare const removeUserRole: (guildId: GuildId, roleId: string) => Promise<void>;
export declare const getModRoles: (guildId: GuildId) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}[] | null>;
export declare const getUserRoles: (guildId: GuildId) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}[] | null>;
export declare const getPermissionsForGuildAndGroup: (guildId: string, groupId: string) => Promise<{
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
} | null>;
export declare const findPermission: (guildId: string, groupIds: string[], role: Role) => Promise<boolean>;
export declare const hasAccess: (guildId: string, groupIds: string[]) => Promise<boolean>;
export declare const getUserPrivileges: (guildId: string, groupIds: string[]) => Promise<"manager" | "normal" | "none">;
export declare const resetPermissions: (guildId: string, modGroups: string[], userGroups: string[]) => Promise<void>;
