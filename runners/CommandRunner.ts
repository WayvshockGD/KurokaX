import Eris, { Message } from "eris";
import KurokaClient from "../src/client/KurokaClient";
import BaseRunner from "./BaseRunner";

export default class CommandRunner extends BaseRunner {
    public commandMessages = new Map<string, CommandMessageData>();

    public constructor(public client: KurokaClient) {
        super();

        super.init(this.constructor.name);
    }

    public start(message: Eris.Message) {
        if (message.channel.type !== Eris.Constants.ChannelTypes.GUILD_TEXT) {
            return;
        }
        
        if (message.author.bot || message.webhookID) {
            return;
        }

        message.channel
        
        let args = message.content.slice(this.client.prefix.length).trim().split(" ");
        let command = this.client.cache.commands.get(args[0]);

        if (typeof command !== "undefined") {
            this.commandMessages.set(message.author.id, { argsUsed: args.join(" "), command: args[0] });

            command.exec(message as any, { args: args.slice(1), client: this.client });
        }
    }
}

interface CommandMessageData {
    command: string;
    argsUsed: string;
}