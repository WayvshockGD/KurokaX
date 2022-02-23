import { setTimeout } from "timers/promises";
import BuildCommand from "../struct/BuildCommand";
import Util from "../util/Util";

export = new BuildCommand({
    name: "ping",
    aliases: ["ms"],
    dev: false,
    exec(message) {
        let now = Date.now();

        message.channel.createMessage("Ping...?").then(async (msg) => {
            let str = await setTimeout(30, "Pong! {0}");
            let diff = (Date.now() - now);
            msg.edit(Util.formatString(str, diff.toString()));
        })
    }
});