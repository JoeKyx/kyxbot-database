import { NewImageGenerationResult } from "../schema/imageGenerationsResultsSchema.js";
import { DiscordId } from "../schema/usersSchema.js";
import { GuildId } from "../schema/guildSettingsSchema.js";
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
declare const generationResultsApi: {
    addGenerationResults: (generationResults: NewImageGenerationResult[]) => Promise<void>;
    getGenerationResultsFromUser: (discordId: DiscordId) => Promise<{
        prompt: string;
        timestamp: Date;
        generation_results: {
            image_url: string;
        }[];
    }[]>;
    getGenerationResultsFromUserPaginated: (discordId: DiscordId, page?: number, pageSize?: number) => Promise<{
        prompt: string;
        timestamp: Date;
        generation_results: {
            image_url: string;
        }[];
    }[]>;
    getGenerationResultsFromUserWithinGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
        prompt: string;
        timestamp: Date;
        generation_results: {
            image_url: string;
        }[];
    }[]>;
    getAmountOfPagesForUser: (discordId: DiscordId, pageSize: number) => Promise<number>;
};
export default generationResultsApi;
//# sourceMappingURL=generationResultsApi.d.ts.map