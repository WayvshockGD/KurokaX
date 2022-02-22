import { ICommand } from "../src/Command";

export default class BuildCommand {
    public constructor(private data: ICommand) {}

    get name() {
        return this.data.name;
    }

    get aliases() {
        return this.data.aliases;
    }

    get dev() {
        return this.data.dev;
    }

    get exec() {
        return this.data.exec;
    }
}