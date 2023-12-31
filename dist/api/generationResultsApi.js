import { and, count, desc, eq } from "drizzle-orm";
import { db } from "../db-connection.js";
import { image_generation_results, } from "../schema/imageGenerationsResultsSchema.js";
import { image_generations } from "../schema/imageGenerationsSchema.js";
export const addGenerationResults = async (generationResults) => {
    console.log(`Inserting generation results`);
    await db.insert(image_generation_results).values(generationResults);
};
export const getGenerationResultsFromUser = async (discordId) => {
    console.log(`Getting generation results for discord id: ${discordId}`);
    const generationResults = await db.query.image_generations.findMany({
        columns: {
            prompt: true,
            timestamp: true,
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
    console.log('Page: ', page);
    console.log('Page size: ', pageSize);
    if (page === null || page === undefined || !pageSize) {
        console.log('Missing page or pageSize');
        return getGenerationResultsFromUser(discordId);
    }
    console.log(`Getting generation results for discord id: ${discordId}`);
    const generationResults = await db.query.image_generations.findMany({
        columns: {
            prompt: true,
            timestamp: true,
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
            timestamp: true,
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
export const getAmountOfPagesForUser = async (discordId, pageSize) => {
    const results = await db.select({ value: count() }).from(image_generations).where(eq(image_generations.user, discordId)).limit(1);
    const amountOfImageGens = results[0].value ? results[0].value : 0;
    return Math.ceil(amountOfImageGens / pageSize);
};
const generationResultsApi = {
    addGenerationResults,
    getGenerationResultsFromUser,
    getGenerationResultsFromUserPaginated,
    getGenerationResultsFromUserWithinGuild,
    getAmountOfPagesForUser,
};
export default generationResultsApi;
