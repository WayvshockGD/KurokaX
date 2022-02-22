import { ICommand } from "./data/Command";

export default class Cache {
    public commands = new Map<string, ICommand>();
}