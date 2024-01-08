export declare const upscaled_images: import("drizzle-orm/pg-core/table.js").PgTableWithColumns<{
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
export declare const insertUpscaledImageSchema: import("zod").ZodObject<Omit<{
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
    image_url: import("zod").ZodString;
    variation_id: import("zod").ZodString;
    upscaled_by: import("zod").ZodString;
    original_image: import("zod").ZodString;
}, "timestamp">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
}, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
}>;
export declare const selectUpscaledImageSchema: import("zod").ZodObject<{
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
    image_url: import("zod").ZodString;
    variation_id: import("zod").ZodString;
    upscaled_by: import("zod").ZodString;
    original_image: import("zod").ZodString;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
    timestamp?: Date | undefined;
}, {
    image_url: string;
    variation_id: string;
    upscaled_by: string;
    original_image: string;
    timestamp?: Date | undefined;
}>;
export type NewUpscaledImage = Zod.infer<typeof insertUpscaledImageSchema>;
export type UpscaledImageId = Zod.infer<typeof selectUpscaledImageSchema>["variation_id"];
//# sourceMappingURL=upscaledImagesSchema.d.ts.map