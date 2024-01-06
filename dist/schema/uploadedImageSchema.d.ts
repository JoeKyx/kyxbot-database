export declare const uploaded_images: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "uploaded_images";
    schema: undefined;
    columns: {
        image_id: import("drizzle-orm/pg-core").PgColumn<{
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
        user: import("drizzle-orm/pg-core").PgColumn<{
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
        image_url: import("drizzle-orm/pg-core").PgColumn<{
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
        image_name: import("drizzle-orm/pg-core").PgColumn<{
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
        timestamp: import("drizzle-orm/pg-core").PgColumn<{
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
export declare const selectUploadedImageSchema: import("zod").ZodObject<{
    image_id: import("zod").ZodString;
    user: import("zod").ZodString;
    image_url: import("zod").ZodString;
    image_name: import("zod").ZodString;
    timestamp: import("zod").ZodDate;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}, {
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}>;
export declare const insertUploadedImageSchema: import("zod").ZodObject<Omit<{
    user: import("zod").ZodString;
    timestamp: import("zod").ZodOptional<import("zod").ZodDate>;
    image_id: import("zod").ZodString;
    image_url: import("zod").ZodString;
    image_name: import("zod").ZodString;
}, "timestamp">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
    user: string;
    image_id: string;
    image_url: string;
    image_name: string;
}, {
    user: string;
    image_id: string;
    image_url: string;
    image_name: string;
}>;
export type NewUploadedImage = Zod.infer<typeof insertUploadedImageSchema>;
export type UploadedImageId = Zod.infer<typeof selectUploadedImageSchema>["image_id"];
export type UploadedImage = Zod.infer<typeof selectUploadedImageSchema>;
//# sourceMappingURL=uploadedImageSchema.d.ts.map