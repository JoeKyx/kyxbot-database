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
export const getModRoles = async (guildId) => {
    const result = await db.query.permissions.findMany({
        where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager')),
    });
    if (!result) {
        return null;
    }
    return result;
};
export const getUserRoles = async (guildId) => {
    const result = await db.query.permissions.findMany({
        where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'normal')),
    });
    if (!result) {
        return null;
    }
    return result;
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
export const getUserPrivileges = async (guildId, groupIds) => {
    const hasEntries = await db.query.permissions.findFirst({
        where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'normal')),
    });
    if (!hasEntries) {
        return 'normal';
    }
    const isManager = await findPermission(guildId, groupIds, 'manager');
    if (isManager) {
        return 'manager';
    }
    const isUser = await findPermission(guildId, groupIds, 'normal');
    if (isUser) {
        return 'normal';
    }
    return 'none';
};
export const resetPermissions = async (guildId, modGroups, userGroups) => {
    await db.delete(permissions).where(eq(permissions.guild_id, guildId));
    // insert a new record for each mod Group
    for (const group of modGroups) {
        await db.insert(permissions).values({ guild_id: guildId, role: 'manager', group_id: group });
    }
    // insert a new record for each user Group
    for (const group of userGroups) {
        await db.insert(permissions).values({ guild_id: guildId, role: 'normal', group_id: group });
    }
};
