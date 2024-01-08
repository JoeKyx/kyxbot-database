export declare const userInformations: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
    name: "user_informations";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core/index.js").PgColumn<{
            name: "id";
            tableName: "user_informations";
            dataType: "number";
            columnType: "PgSerial";
            data: number;
            driverParam: number;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
        user: import("drizzle-orm/pg-core/index.js").PgColumn<{
            name: "user";
            tableName: "user_informations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        guild: import("drizzle-orm/pg-core/index.js").PgColumn<{
            name: "guild";
            tableName: "user_informations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        information: import("drizzle-orm/pg-core/index.js").PgColumn<{
            name: "information";
            tableName: "user_informations";
            dataType: "string";
            columnType: "PgVarchar";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
        }, {}, {}>;
        timestamp: import("drizzle-orm/pg-core/index.js").PgColumn<{
            name: "timestamp";
            tableName: "user_informations";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            enumValues: undefined;
            baseColumn: never;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertUserInformationSchema: import("zod").ZodObject<Omit<{
    user: import("zod").ZodString;
    guild: import("zod").ZodString;
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
    id: import("zod").ZodOptional<import("zod").ZodNumber>;
    information: import("zod").ZodString;
}, "timestamp">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    user: string;
    guild: string;
    information: string;
    id?: number | undefined;
}, {
    user: string;
    guild: string;
    information: string;
    id?: number | undefined;
}>;
export declare const onlyNecessaryUserInformationSchema: import("zod").ZodObject<Pick<{
    user: import("zod").ZodString;
    guild: import("zod").ZodString;
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
    id: import("zod").ZodOptional<import("zod").ZodNumber>;
    information: import("zod").ZodString;
}, "user" | "guild" | "information">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    user: string;
    guild: string;
    information: string;
}, {
    user: string;
    guild: string;
    information: string;
}>;
export declare const selectUserInformationSchema: import("zod").ZodObject<{
    id: import("zod").ZodNumber;
    user: import("zod").ZodString;
    guild: import("zod").ZodString;
    information: import("zod").ZodString;
    timestamp: import("zod").ZodDate;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}, {
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}>;
export type UserInformation = Zod.infer<typeof selectUserInformationSchema>;
export type UserInformationId = Zod.infer<typeof selectUserInformationSchema>["id"];
export type NewUserInformation = Zod.infer<typeof insertUserInformationSchema>;
//# sourceMappingURL=userInformations.d.ts.map