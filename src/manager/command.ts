import * as Discord from 'discord.js';
import CommandModel from "../command/model";

export default class CommandManager {
    static commands: CommandModel[] = [];

    static register(command: CommandModel) {
        console.log(command.command + ' registered');
        CommandManager.commands.push(command);
    }

    static exec(message: Discord.Message) {
        if (message.author.username !== 'ArcheAge Kane') {
            let strCommand = message.content.split(' ')[0].substr(1);

            let command: CommandModel = (CommandManager.commands).filter((command: any) => command.command == strCommand)[0];
            if (command) {
                command.exec(message);
            } else {
                message.channel.send('command "' + strCommand + '" not found!');
                message.delete();
            }
        }
    }
}