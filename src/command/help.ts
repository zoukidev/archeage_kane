import CommandModel from "./model";
import * as Discord from "discord.js";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help');
    }

    exec(message: Discord.Message) {
        super.exec(message);

        console.log(this.command + ' executed');
        message.channel.send('**Commandes**:\n**.help** - Description empty.\n');
    }
}