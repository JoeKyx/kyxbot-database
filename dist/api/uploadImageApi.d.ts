import { NewUploadedImage } from "../schema/uploadedImageSchema";
import { DiscordId } from "../schema/usersSchema";
export declare const insertUploadedImage: (uploadedImage: NewUploadedImage) => Promise<void>;
export declare const getUploadedImages: (userId: DiscordId) => Promise<{
    image_id: string;
    user: string;
    timestamp: Date;
    image_url: string;
    image_name: string;
}[]>;
export declare const getUploadedImageByName: (userId: DiscordId, name: string) => Promise<{
    image_id: string;
    user: string;
    timestamp: Date;
    image_url: string;
    image_name: string;
} | undefined>;
declare const uploadImageApi: {
    insertUploadedImage: (uploadedImage: NewUploadedImage) => Promise<void>;
    getUploadedImages: (userId: DiscordId) => Promise<{
        image_id: string;
        user: string;
        timestamp: Date;
        image_url: string;
        image_name: string;
    }[]>;
    getUploadedImageByName: (userId: DiscordId, name: string) => Promise<{
        image_id: string;
        user: string;
        timestamp: Date;
        image_url: string;
        image_name: string;
    } | undefined>;
};
export default uploadImageApi;
//# sourceMappingURL=uploadImageApi.d.ts.map