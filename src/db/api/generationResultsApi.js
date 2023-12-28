import { and, desc, eq } from "drizzle-orm";
import { db } from "..";
import { image_generation_results, } from "../schema/imageGenerationsResultsSchema";
import { image_generations } from "../schema/imageGenerationsSchema";
export const addGenerationResults = async (generationResults) => {
    console.log(`Inserting generation results`);
    await db.insert(image_generation_results).values(generationResults);
};
export const getGenerationResultsFromUser = async (discordId) => {
    console.log(`Getting generation results for discord id: ${discordId}`);
    const generationResults = await db.query.image_generations.findMany({
        columns: {
            prompt: true,
        },
        with: {
            generation_results: {
                columns: {
                    image_url: true,
                },
            },
        },
        where: eq(image_generations.user, discordId),
    });
    return generationResults;
};
export const getGenerationResultsFromUserPaginated = async (discordId, page, pageSize) => {
    if (!page || !pageSize) {
        return getGenerationResultsFromUser(discordId);
    }
    console.log(`Getting generation results for discord id: ${discordId}`);
    const generationResults = await db.query.image_generations.findMany({
        columns: {
            prompt: true,
        },
        with: {
            generation_results: {
                columns: {
                    image_url: true,
                },
            },
        },
        where: eq(image_generations.user, discordId),
        orderBy: [desc(image_generations.timestamp)],
        limit: pageSize,
        offset: page * pageSize,
    });
    return generationResults;
};
export const getGenerationResultsFromUserWithinGuild = async (discordId, guildId) => {
    console.log(`Getting generation results for discord id: ${discordId} within guild: ${guildId}`);
    const generationResults = await db.query.image_generations.findMany({
        columns: {
            prompt: true,
        },
        with: {
            generation_results: {
                columns: {
                    image_url: true,
                },
            },
        },
        where: and(eq(image_generations.user, discordId), eq(image_generations.guild, guildId)),
    });
    return generationResults;
};
