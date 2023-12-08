import { and, desc, eq } from "drizzle-orm";
import { db } from "..";
import { userInformations, } from "../schema/userInformations";
import { createNewUser, getUserByDiscordId } from "./usersApi";
export const insertUserInformation = async (newUserInformation) => {
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
export const getUserInformation = async (discordId) => {
    console.log(`Getting user information for discord id: ${discordId}`);
    const userInformation = await db.query.userInformations.findMany({
        where: eq(userInformations.user, discordId),
        orderBy: desc(userInformations.timestamp),
        limit: 30,
    });
    return userInformation;
};
export const getUserInformationInGuild = async (discordId, guildId) => {
    console.log(`Getting user information for discord id: ${discordId}`);
    const userInformation = await db.query.userInformations.findMany({
        where: and(eq(userInformations.user, discordId), eq(userInformations.guild, guildId)),
        orderBy: desc(userInformations.timestamp),
        limit: 30,
    });
    return userInformation;
};
