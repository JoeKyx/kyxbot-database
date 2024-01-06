import { DiscordId, User } from "../schema/usersSchema";
import "dotenv/config";
export declare const getUserByDiscordId: (discordId: DiscordId) => Promise<User | null>;
export declare const createNewUser: (discordId: DiscordId) => Promise<User>;
declare const usersApi: {
    getUserByDiscordId: (discordId: DiscordId) => Promise<User | null>;
    createNewUser: (discordId: DiscordId) => Promise<User>;
};
export default usersApi;
//# sourceMappingURL=usersApi.d.ts.map