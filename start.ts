import { readdirSync } from "fs";
import { ICommand } from "./src/Command";
import KurokaClient from "./src/client/KurokaClient"
import Util from "./util/Util";

let client = new KurokaClient();

async function init() {
    await client.connect();
}

for (let file of readdirSync("./commands/")) {
    let command: ICommand = require(Util.formatString("./comands/{0}", file));
    client.cache.commands.set(command.name, command);

    if (command.aliases.length) {
        for (let a of command.aliases) {
            client.cache.commands.set(a, command);
        }
    }
}