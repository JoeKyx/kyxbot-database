import { and, eq, inArray } from 'drizzle-orm';
import { db } from '..';
import { permissions } from '../schema/permissionsSchema';
export const createPermissions = async (newPermission) => {
    console.log(`Inserting permissions with id: ${permissions.guild_id}`);
    await db.insert(permissions).values(newPermission);
};
export const setModRole = async (guildId, roleId) => {
    await db
        .delete(permissions)
        .where(and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager')));
    await db
        .insert(permissions)
        .values({ guild_id: guildId, role: 'manager', group_id: roleId });
};
export const removeModRole = async (guildId) => {
    await db
        .delete(permissions)
        .where(and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager')));
};
export const addUserRole = async (guildId, roleId) => {
    await db
        .insert(permissions)
        .values({ guild_id: guildId, role: 'normal', group_id: roleId });
};
export const removeUserRole = async (guildId, roleId) => {
    await db
        .delete(permissions)
        .where(and(eq(permissions.guild_id, guildId), eq(permissions.group_id, roleId)));
};
export const getPermissionsForGuildAndGroup = async (guildId, groupId) => {
    const result = await db.query.permissions.findFirst({
        where: and(eq(permissions.guild_id, guildId), eq(permissions.group_id, groupId)),
    });
    if (!result) {
        return null;
    }
    return result;
};
export const findPermission = async (guildId, groupIds, role) => {
    const result = await db.query.permissions.findFirst({
        where: and(eq(permissions.guild_id, guildId), inArray(permissions.group_id, groupIds), eq(permissions.role, role)),
    });
    if (!result) {
        return false;
    }
    return true;
};
export const hasAccess = async (guildId, groupIds) => {
    const hasEntries = await db.query.permissions.findFirst({
        where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'normal')),
    });
    if (!hasEntries) {
        return true;
    }
    return await findPermission(guildId, groupIds, 'normal');
};
