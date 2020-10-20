import * as Discord from 'discord.js';
import CommandManager from "../manager/command";

export default class DiscordBot {
    static instance: Discord.Client;
    static channel: any;

    static init(token: any, channel: any) {
        DiscordBot.channel = channel;
        DiscordBot.instance = new Discord.Client();

        DiscordBot.loadHandlers();
        DiscordBot.login(token);
    }

    static loadHandlers() {
        DiscordBot.instance.on('ready', () => {
            console.log('Bot ready');
        });

        DiscordBot.instance.on('message', (message: Discord.Message) => {
            if (message.channel.id == DiscordBot.channel) {
                CommandManager.exec(message);
                // console.log(`${message.author.username}: ${message.content}`);
                // message.delete();
            }
        });
    }

    static login(token: any) {
        DiscordBot.instance.login(token);
    }
}