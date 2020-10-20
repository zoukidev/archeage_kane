import CommandModel from "./model";

export default class HelpCommand extends CommandModel {
    constructor() {
        super('help');
    }

    exec() {
        console.log(this.command + ' executed');
    }
}