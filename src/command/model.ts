import * as Discord from 'discord.js';

export default class CommandModel {
    command: string;

    constructor(command: string) {
        this.command = command;
    }

    exec(message: Discord.Message) {}
}