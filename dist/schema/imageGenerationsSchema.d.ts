export declare const image_generations: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
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
export declare const insertImageGenerationSchema: import("zod").ZodObject<Omit<{
    status: import("zod").ZodString;
    generation_id: import("zod").ZodString;
    user: import("zod").ZodString;
    guild: import("zod").ZodString;
    prompt: import("zod").ZodString;
    interactionId: import("zod").ZodString;
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
}, "status">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp?: Date | undefined;
}, {
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp?: Date | undefined;
}>;
export declare const selectImageGenerationSchema: import("zod").ZodObject<{
    generation_id: import("zod").ZodString;
    user: import("zod").ZodString;
    guild: import("zod").ZodString;
    prompt: import("zod").ZodString;
    interactionId: import("zod").ZodString;
    status: import("zod").ZodString;
    timestamp: import("zod").ZodDate;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    status: string;
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp: Date;
}, {
    status: string;
    generation_id: string;
    user: string;
    guild: string;
    prompt: string;
    interactionId: string;
    timestamp: Date;
}>;
export type NewImageGeneration = Zod.infer<typeof insertImageGenerationSchema>;
export type ImageGenerationStatus = Zod.infer<typeof selectImageGenerationSchema>["status"];
export type ImageGenerationId = Zod.infer<typeof selectImageGenerationSchema>["generation_id"];
export declare const imageGenerationRelations: import("drizzle-orm").Relations<"image_generations", {
    generation_results: import("drizzle-orm").Many<"image_generation_results">;
}>;
//# sourceMappingURL=imageGenerationsSchema.d.ts.map