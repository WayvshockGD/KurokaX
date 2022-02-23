import { readdirSync } from "fs";
import { ICommand } from "./src/Command";
import KurokaClient from "./src/client/KurokaClient"
import Util from "./util/Util";

let client = new KurokaClient();

async function init() {
    await client.connect();
    client.on("ready", () => {
        console.log("Ready to serve giveaways");
    });
    client.on("messageCreate", (message) => {
        if (client.guilds.get(message.guildID ?? "")?.channels.get(message.channel.id)) {
            client.commands.start(message as any);
        }
    });
}
init();

for (let file of readdirSync("./build/commands/")) {
    let command: ICommand = require(Util.formatString("./commands/{0}", file));
    client.cache.commands.set(command.name, command);

    if (command.aliases.length) {
        for (let a of command.aliases) {
            client.cache.commands.set(a, command);
        }
    }
}