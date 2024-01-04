import { NewUploadedImage } from "../schema/uploadedImageSchema";
import { DiscordId } from "../schema/usersSchema";
export declare const insertUploadedImage: (uploadedImage: NewUploadedImage) => Promise<void>;
export declare const getUploadedImages: (userId: DiscordId) => Promise<{
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
}[]>;
export declare const getUploadedImageByName: (userId: DiscordId, name: string) => Promise<{
    user: string;
    timestamp: Date;
    image_id: string;
    image_url: string;
    image_name: string;
} | undefined>;
