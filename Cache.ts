import { ICommand } from "./src/Command";

export default class Cache {
    public commands = new Map<string, ICommand>();
}