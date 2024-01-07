export declare const image_generation_results: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "image_generation_results";
    schema: undefined;
    columns: {
        image_id: import("drizzle-orm/pg-core").PgColumn<{
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
        generation_id: import("drizzle-orm/pg-core").PgColumn<{
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
        image_url: import("drizzle-orm/pg-core").PgColumn<{
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
        upscaled_image_url: import("drizzle-orm/pg-core").PgColumn<{
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
export declare const insertImageGenerationResultSchema: import("zod").ZodObject<{
    generation_id: import("zod").ZodString;
    image_id: import("zod").ZodString;
    image_url: import("zod").ZodString;
    upscaled_image_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    generation_id: string;
    image_id: string;
    image_url: string;
    upscaled_image_url?: string | null | undefined;
}, {
    generation_id: string;
    image_id: string;
    image_url: string;
    upscaled_image_url?: string | null | undefined;
}>;
export type NewImageGenerationResult = Zod.infer<typeof insertImageGenerationResultSchema>;
export type ImageGenerationResultId = Zod.infer<typeof insertImageGenerationResultSchema>["image_id"];
export declare const imageGenerationResultsRelations: import("drizzle-orm").Relations<"image_generation_results", {
    image_generation: import("drizzle-orm").One<"image_generations", true>;
}>;
//# sourceMappingURL=imageGenerationsResultsSchema.d.ts.map