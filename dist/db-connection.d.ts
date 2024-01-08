import postgres from "postgres";
export declare const client: postgres.Sql<{}>;
export declare const db: import("drizzle-orm/postgres-js/driver.js").PostgresJsDatabase<{
    users: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "users";
        schema: undefined;
        columns: {
            discordId: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            money: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
    image_generations: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "image_generations";
        schema: undefined;
        columns: {
            generation_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "generation_id";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            user: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "user";
                tableName: "image_generations";
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
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            prompt: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "prompt";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            interactionId: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "message_id";
                tableName: "image_generations";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            status: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "status";
                tableName: "image_generations";
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
                tableName: "image_generations";
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
    image_generation_results: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "image_generation_results";
        schema: undefined;
        columns: {
            image_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_id";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            generation_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "generation_id";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_url";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            upscaled_image_url: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "upscaled_image_url";
                tableName: "image_generation_results";
                dataType: "string";
                columnType: "PgText";
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
    upscaled_images: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "upscaled_images";
        schema: undefined;
        columns: {
            variation_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "variation_id";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            upscaled_by: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "upscaled_by";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_url";
                tableName: "upscaled_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            original_image: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "original_image";
                tableName: "upscaled_images";
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
                tableName: "upscaled_images";
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
    guild_settings: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "guild_settings";
        schema: undefined;
        columns: {
            guild_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            personality: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            usingPermissions: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            name: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
    uploaded_images: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "uploaded_images";
        schema: undefined;
        columns: {
            image_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_id";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            user: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "user";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgVarchar";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_url: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_url";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            image_name: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "image_name";
                tableName: "uploaded_images";
                dataType: "string";
                columnType: "PgText";
                data: string;
                driverParam: string;
                notNull: true;
                hasDefault: false;
                enumValues: [string, ...string[]];
                baseColumn: never;
            }, {}, {}>;
            timestamp: import("drizzle-orm/pg-core/index.js").PgColumn<{
                name: "timestamp";
                tableName: "uploaded_images";
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
    userInformations: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
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
    imageGenerationRelations: import("drizzle-orm").Relations<"image_generations", {
        generation_results: import("drizzle-orm").Many<"image_generation_results">;
    }>;
    imageGenerationResultsRelations: import("drizzle-orm").Relations<"image_generation_results", {
        image_generation: import("drizzle-orm").One<"image_generations", true>;
    }>;
    permissions: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
        name: "permissions";
        schema: undefined;
        columns: {
            guild_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            role: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
            group_id: import("drizzle-orm/pg-core/index.js").PgColumn<{
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
}>;
//# sourceMappingURL=db-connection.d.ts.map