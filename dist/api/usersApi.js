import { db } from "../db-connection";
import { users } from "../schema/usersSchema";
import { eq } from "drizzle-orm";
import "dotenv/config";
export const getUserByDiscordId = async (discordId) => {
    console.log(`Getting user by discord id: ${discordId}`);
    const user = await db.query.users.findFirst({
        where: eq(users.discordId, discordId),
    });
    if (!user) {
        return null;
    }
    return user;
};
export const createNewUser = async (discordId) => {
    console.log(`Inserting user with discord id: ${discordId}`);
    const user = await db
        .insert(users)
        .values({ discordId, money: Number(process.env.STARTING_MONEY || 0) })
        .onConflictDoNothing()
        .returning();
    return user[0];
};
const usersApi = {
    getUserByDiscordId,
    createNewUser,
};
export default usersApi;
