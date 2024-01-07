import { pgEnum, pgTable, primaryKey, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import Zod from 'zod';
export const roleEnum = pgEnum('role', ['admin', 'manager', 'normal']);
export const permissions = pgTable('permissions', {
    guild_id: varchar('guild_id'),
    role: roleEnum('role'),
    group_id: varchar('group_id'),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.group_id, table.guild_id, table.role] }),
    };
});
export const selectPermissionsSchema = createSelectSchema(permissions);
export const insertPermissionsSchema = createInsertSchema(permissions);
export const roleSchema = Zod.enum(roleEnum.enumValues);
