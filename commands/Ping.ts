import BuildCommand from "../struct/BuildCommand";

export = new BuildCommand({
    name: "ping",
    aliases: ["ms"],
    dev: false,
    exec(message) {}
});