import { genURL } from "../Functions";
import BuildCommand from "../struct/BuildCommand";

export = new BuildCommand({
    name: "inv",
    aliases: ["invite"],
    dev: false,
    exec(message, { client }) {
        return message.channel.createMessage(genURL(client.user.id));
    }
});