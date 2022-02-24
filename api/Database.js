let { PrismaClient } = require("@prisma/client");
let client = new PrismaClient();

module.exports = class DB {
    /**
     * @param {import("express").Response} res 
     * @param {string} guild 
     * @param {string} channel 
     * @param {{ started: string, end: string }} times 
     */
    static async setGiveaway(res, guild, channel, times) {
        await client.$connect();

        let started = times.started;
        let time = times.end;

        if (await client.giveawayData.findFirst({ where: { guildID: guild } })) {
            return res.status(200).json({ 
                message: "A timed giveaway already exists for this guild" 
            });
        }

        try {
            await client.giveawayData.create({
                data: {
                    guildID: guild,
                    channel,
                    started,
                    time: time.toString()
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).json({ 
                message: "Could not create timed giveaway",
                err
            });
        }
    }
}