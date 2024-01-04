import Zod from 'zod';
export declare const roleEnum: import("drizzle-orm/pg-core").PgEnum<["admin", "manager", "normal"]>;
export declare const permissions: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "permissions";
    schema: undefined;
    columns: {
        guild_id: import("drizzle-orm/pg-core").PgColumn<{
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
        role: import("drizzle-orm/pg-core").PgColumn<{
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
        group_id: import("drizzle-orm/pg-core").PgColumn<{
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
export declare const selectPermissionsSchema: Zod.ZodObject<{
    guild_id: Zod.ZodNullable<Zod.ZodString>;
    role: Zod.ZodNullable<Zod.ZodEnum<["admin", "manager", "normal"]>>;
    group_id: Zod.ZodNullable<Zod.ZodString>;
}, Zod.UnknownKeysParam, Zod.ZodTypeAny, {
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}, {
    guild_id: string | null;
    role: "admin" | "manager" | "normal" | null;
    group_id: string | null;
}>;
export declare const insertPermissionsSchema: Zod.ZodObject<{
    guild_id: Zod.ZodOptional<Zod.ZodNullable<Zod.ZodString>>;
    role: Zod.ZodOptional<Zod.ZodNullable<Zod.ZodEnum<["admin", "manager", "normal"]>>>;
    group_id: Zod.ZodOptional<Zod.ZodNullable<Zod.ZodString>>;
}, Zod.UnknownKeysParam, Zod.ZodTypeAny, {
    guild_id?: string | null | undefined;
    role?: "admin" | "manager" | "normal" | null | undefined;
    group_id?: string | null | undefined;
}, {
    guild_id?: string | null | undefined;
    role?: "admin" | "manager" | "normal" | null | undefined;
    group_id?: string | null | undefined;
}>;
export type NewPermission = Zod.infer<typeof insertPermissionsSchema>;
export type Permission = Zod.infer<typeof selectPermissionsSchema>;
export declare const roleSchema: Zod.ZodEnum<["admin", "manager", "normal"]>;
export type Role = Zod.infer<typeof roleSchema>;
