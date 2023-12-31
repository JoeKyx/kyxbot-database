import { and, count, desc, eq, sql } from "drizzle-orm";
import { db } from "../db-connection.js";
import {
  NewImageGenerationResult,
  image_generation_results,
} from "../schema/imageGenerationsResultsSchema.js";
import { image_generations } from "../schema/imageGenerationsSchema.js";
import { DiscordId } from "../schema/usersSchema.js";
import { GuildId } from "../schema/guildSettingsSchema.js";


export const addGenerationResults = async (
  generationResults: NewImageGenerationResult[]
) => {
  console.log(`Inserting generation results`);
  await db.insert(image_generation_results).values(generationResults);
};

export const getGenerationResultsFromUser = async (discordId: DiscordId) => {
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

export const getGenerationResultsFromUserPaginated = async (discordId: DiscordId, page?: number, pageSize?: number) => {
  console.log('Page: ', page)
  console.log('Page size: ', pageSize)
  if(page === null || page === undefined || !pageSize) {
    console.log('Missing page or pageSize')

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
}

export const getGenerationResultsFromUserWithinGuild = async (
  discordId: DiscordId,
  guildId: GuildId
) => {
  console.log(
    `Getting generation results for discord id: ${discordId} within guild: ${guildId}`
  );
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
    where: and(
      eq(image_generations.user, discordId),
      eq(image_generations.guild, guildId)
    ),
  });

  return generationResults;
};

export const getAmountOfPagesForUser = async (discordId: DiscordId, pageSize: number) => {
  const results = await db.select({ value: count() }).from(image_generations).where(eq(image_generations.user, discordId)).limit(1)

  const amountOfImageGens = results[0].value ? results[0].value : 0;
  return Math.ceil(amountOfImageGens / pageSize);
}

const generationResultsApi = {
  addGenerationResults,
  getGenerationResultsFromUser,
  getGenerationResultsFromUserPaginated,
  getGenerationResultsFromUserWithinGuild,
  getAmountOfPagesForUser,
}

export default generationResultsApi;