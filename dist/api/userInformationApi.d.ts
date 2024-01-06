import { NewUserInformation } from "../schema/userInformations";
import { DiscordId } from "../schema/usersSchema";
import { GuildId } from "../schema/guildSettingsSchema";
export declare const insertUserInformation: (newUserInformation: NewUserInformation) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}>;
export declare const getUserInformation: (discordId: DiscordId) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}[]>;
export declare const getUserInformationInGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
    user: string;
    guild: string;
    timestamp: Date;
    id: number;
    information: string;
}[]>;
declare const userInformationApi: {
    insertUserInformation: (newUserInformation: NewUserInformation) => Promise<{
        user: string;
        guild: string;
        timestamp: Date;
        id: number;
        information: string;
    }>;
    getUserInformation: (discordId: DiscordId) => Promise<{
        user: string;
        guild: string;
        timestamp: Date;
        id: number;
        information: string;
    }[]>;
    getUserInformationInGuild: (discordId: DiscordId, guildId: GuildId) => Promise<{
        user: string;
        guild: string;
        timestamp: Date;
        id: number;
        information: string;
    }[]>;
};
export default userInformationApi;
//# sourceMappingURL=userInformationApi.d.ts.map