import { and, desc, eq } from "drizzle-orm";
import { db } from "../kyxbot-database";
import {
  NewUserInformation,
  userInformations,
} from "../schema/userInformations";
import { DiscordId } from "../schema/usersSchema";
import { createNewUser, getUserByDiscordId } from "./usersApi";
import { GuildId } from "../schema/guildSettingsSchema";

export const insertUserInformation = async (
  newUserInformation: NewUserInformation
) => {
  const dbUser = await getUserByDiscordId(newUserInformation.user);
  if (!dbUser) {
    await createNewUser(newUserInformation.user);
  }
  console.log(`Inserting user information: ${newUserInformation}`);
  const userInformation = await db
    .insert(userInformations)
    .values(newUserInformation)
    .returning();
  return userInformation[0];
};

export const getUserInformation = async (discordId: DiscordId) => {
  console.log(`Getting user information for discord id: ${discordId}`);
  const userInformation = await db.query.userInformations.findMany({
    where: eq(userInformations.user, discordId),
    orderBy: desc(userInformations.timestamp),
    limit: 30,
  });

  return userInformation;
};

export const getUserInformationInGuild = async (
  discordId: DiscordId,
  guildId: GuildId
) => {
  console.log(`Getting user information for discord id: ${discordId}`);
  const userInformation = await db.query.userInformations.findMany({
    where: and(
      eq(userInformations.user, discordId),
      eq(userInformations.guild, guildId)
    ),
    orderBy: desc(userInformations.timestamp),
    limit: 30,
  });

  return userInformation;
};

const userInformationApi = {
  insertUserInformation,
  getUserInformation,
  getUserInformationInGuild,
};

export default userInformationApi;