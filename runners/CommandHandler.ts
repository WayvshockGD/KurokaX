import Eris from "eris";
import KurokaClient from "../src/client/KurokaClient";

export default class CommandHandler {
    public commandMessages = new Map<string, CommandMessageData>();

    public constructor(public client: KurokaClient) {}

    public run(message: Eris.Message) {
        if (message.channel.type !== Eris.Constants.ChannelTypes.GUILD_TEXT) {
            return;
        }
        
        if (message.author.bot || message.webhookID) {
            return;
        }
        
        let args = message.content.slice(this.client.prefix.length).trim().split(" ");
        let command = this.client.cache.commands.get(args[0]);

        message.channel

        if (typeof command !== "undefined") {
            this.commandMessages.set(message.author.id, { argsUsed: args[0] });
            command.exec(message, { args, client: this.client });
        }
    }
}

interface CommandMessageData {
    command: string;
    argsUsed: string;
}