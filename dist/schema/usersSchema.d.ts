import { z } from "zod";
export declare const users: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "users";
    schema: undefined;
    columns: {
        discordId: import("drizzle-orm/pg-core").PgColumn<{
            name: "discord_id";
            tableName: "users";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        money: import("drizzle-orm/pg-core").PgColumn<{
            name: "money";
            tableName: "users";
            dataType: "number";
            columnType: "PgInteger";
            data: number;
            driverParam: string | number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertUserSchema: z.ZodObject<{
    discordId: z.ZodString;
    money: z.ZodOptional<z.ZodNumber>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    discordId: string;
    money?: number | undefined;
}, {
    discordId: string;
    money?: number | undefined;
}>;
export declare const selectUserSchema: z.ZodObject<{
    discordId: z.ZodString;
    money: z.ZodNumber;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    discordId: string;
    money: number;
}, {
    discordId: string;
    money: number;
}>;
export declare const discordIdSchema: z.ZodObject<Pick<{
    discordId: z.ZodString;
    money: z.ZodNumber;
}, "discordId">, z.UnknownKeysParam, z.ZodTypeAny, {
    discordId: string;
}, {
    discordId: string;
}>;
export type User = z.infer<typeof selectUserSchema>;
export type DiscordId = z.infer<typeof discordIdSchema>["discordId"];
