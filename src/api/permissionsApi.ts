import { and, eq, inArray } from 'drizzle-orm';
import { db } from '..';
import { GuildId } from '../schema/guildSettingsSchema';
import { NewPermission, Role, permissions, roleEnum } from '../schema/permissionsSchema';

export const createPermissions = async (newPermission: NewPermission) => {
  console.log(`Inserting permissions with id: ${permissions.guild_id}`);
  await db.insert(permissions).values(newPermission);
};

export const setModRole = async (guildId: GuildId, roleId: string) => {
  await db
    .delete(permissions)
    .where(
      and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager'))
    );
  await db
    .insert(permissions)
    .values({ guild_id: guildId, role: 'manager', group_id: roleId });
};

export const removeModRole = async (guildId: GuildId) => {
  await db
    .delete(permissions)
    .where(
      and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager'))
    );
};

export const addUserRole = async (guildId: GuildId, roleId: string) => {
  await db
    .insert(permissions)
    .values({ guild_id: guildId, role: 'normal', group_id: roleId });
};

export const removeUserRole = async (guildId: GuildId, roleId: string) => {
  await db
    .delete(permissions)
    .where(
      and(eq(permissions.guild_id, guildId), eq(permissions.group_id, roleId))
    );
};

export const getModRoles = async (guildId: GuildId) => {
  const result = await db.query.permissions.findMany({
    where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'manager')),
  });
  if (!result) {
    return null;
  }
  return result;
}

export const getUserRoles = async (guildId: GuildId) => {
  const result = await db.query.permissions.findMany({
    where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'normal')),
  });
  if (!result) {
    return null;
  }
  return result;
}

export const getPermissionsForGuildAndGroup = async (
  guildId: string,
  groupId: string
) => {
  const result = await db.query.permissions.findFirst({
    where: and(
      eq(permissions.guild_id, guildId),
      eq(permissions.group_id, groupId)
    ),
  });
  if (!result) {
    return null;
  }
  return result;
};

export const findPermission = async (
  guildId: string,
  groupIds: string[],
  role: Role
) => {
  const result = await db.query.permissions.findFirst({
    where: and(
      eq(permissions.guild_id, guildId),
      inArray(permissions.group_id, groupIds),
      eq(permissions.role, role)
    ),
  });
  if (!result) {
    return false;
  }
  return true;
};

export const hasAccess = async (guildId: string, groupIds: string[]) => {
  const hasEntries = await db.query.permissions.findFirst({
    where: and(eq(permissions.guild_id, guildId), eq(permissions.role, 'normal')),
  });

  if (!hasEntries) {
    return true;
  }
  return await findPermission(guildId, groupIds, 'normal');
};

export const getUserPrivileges = async (guildId: string, groupIds: string[]) => {
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
}

export const resetPermissions = async (guildId: string, modGroups: string[], userGroups: string[]) => {
  await db.delete(permissions).where(eq(permissions.guild_id, guildId));
  // insert a new record for each mod Group
  for (const group of modGroups) {
    await db.insert(permissions).values({ guild_id: guildId, role: 'manager', group_id: group });
  }
  // insert a new record for each user Group
  for (const group of userGroups) {
    await db.insert(permissions).values({ guild_id: guildId, role: 'normal', group_id: group });
  }
  
}

const permissionsApi = {
  createPermissions,
  setModRole,
  removeModRole,
  addUserRole,
  removeUserRole,
  getModRoles,
  getUserRoles,
  getPermissionsForGuildAndGroup,
  hasAccess,
  getUserPrivileges,
  resetPermissions,
};

export default permissionsApi;