import type { ClientOptions } from "eris";

export default {
    intents: [
        "guilds",
        "guildMessages",
        "guildMembers",
        "guildPresences"
    ],
    rest: true,
    messageLimit: 60,
    allowedMentions: {
        everyone: true,
        roles: true
    },
    defaultImageSize: 4096,
    defaultImageFormat: "jpeg"
} as ClientOptions;