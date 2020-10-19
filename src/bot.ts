import DiscordBot from "./discord/bot";
import * as dotenv from 'dotenv';

dotenv.config();
export default class ArcheAgeBot {
    static start() {
        DiscordBot.init(process.env.DISCORD_BOT_TOKEN, process.env.CHANNEL_ID);
    }
}

(() => ArcheAgeBot.start())();