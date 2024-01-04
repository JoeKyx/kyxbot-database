import { DiscordId, User } from "../schema/usersSchema.js";
import "dotenv/config";
export declare const getUserByDiscordId: (discordId: DiscordId) => Promise<User | null>;
export declare const createNewUser: (discordId: DiscordId) => Promise<User>;
