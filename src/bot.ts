import DiscordBot from "./discord/bot";
import * as dotenv from 'dotenv';
import CommandManager from "./manager/command";
import HelpCommand from "./command/help";

dotenv.config();
class ArcheAgeBot {
    static loadCommands() {
        CommandManager.register(new HelpCommand());
    }

    static start() {
        ArcheAgeBot.loadCommands();

        DiscordBot.init(process.env.DISCORD_BOT_TOKEN, process.env.CHANNEL_ID);
    }
}

(() => ArcheAgeBot.start())();