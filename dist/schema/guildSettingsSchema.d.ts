export declare const guild_settings: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "guild_settings";
    schema: undefined;
    columns: {
        guild_id: import("drizzle-orm/pg-core").PgColumn<{
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
        personality: import("drizzle-orm/pg-core").PgColumn<{
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
        usingPermissions: import("drizzle-orm/pg-core").PgColumn<{
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
        name: import("drizzle-orm/pg-core").PgColumn<{
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
export declare const insertGuildSettingsSchema: import("zod").ZodObject<{
    guild_id: import("zod").ZodString;
    personality: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    name: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    usingPermissions: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodBoolean>>;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    guild_id: string;
    personality?: string | null | undefined;
    name?: string | null | undefined;
    usingPermissions?: boolean | null | undefined;
}, {
    guild_id: string;
    personality?: string | null | undefined;
    name?: string | null | undefined;
    usingPermissions?: boolean | null | undefined;
}>;
export declare const selectGuildSettingsSchema: import("zod").ZodObject<{
    guild_id: import("zod").ZodString;
    personality: import("zod").ZodNullable<import("zod").ZodString>;
    usingPermissions: import("zod").ZodNullable<import("zod").ZodBoolean>;
    name: import("zod").ZodNullable<import("zod").ZodString>;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    guild_id: string;
    personality: string | null;
    name: string | null;
    usingPermissions: boolean | null;
}, {
    guild_id: string;
    personality: string | null;
    name: string | null;
    usingPermissions: boolean | null;
}>;
export type NewGuildSettings = Zod.infer<typeof insertGuildSettingsSchema>;
export type GuildId = Zod.infer<typeof selectGuildSettingsSchema>["guild_id"];
//# sourceMappingURL=guildSettingsSchema.d.ts.map