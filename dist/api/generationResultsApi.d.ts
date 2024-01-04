import { NewImageGenerationResult } from "../schema/imageGenerationsResultsSchema";
import { DiscordId } from "../schema/usersSchema";
import { GuildId } from "../schema/guildSettingsSchema";
export declare const addGenerationResults: (generationResults: NewImageGenerationResult[]) => Promise<void>;
export declare const getGenerationResultsFromUser: (discordId: DiscordId) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;
export declare const getGenerationResultsFromUserPaginated: (discordId: DiscordId, page?: number, pageSize?: number) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;
export declare const getGenerationResultsFromUserWithinGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
    prompt: string;
    timestamp: Date;
    generation_results: {
        image_url: string;
    }[];
}[]>;
export declare const getAmountOfPagesForUser: (discordId: DiscordId, pageSize: number) => Promise<number>;
