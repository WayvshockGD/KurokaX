let { PrismaClient } = require("@prisma/client");
const Constants = require("./Constants");
let client = new PrismaClient();

module.exports = class DB {
    /**
     * @param {import("express").Response} res 
     * @param {string} guild 
     * @param {string} channel 
     * @param {{ started: string, end: string }} times 
     */
    static async setGiveaway(res, guild, channel, times) {
        let started = times.started;
        let time = times.end;

        if (await client.giveawayData.findFirst({ where: { guildID: guild } })) {
            return res.status(200).json({ 
                message: Constants.HAS_QUERY
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
                message: Constants.UNKNOWN_ERROR,
                err
            });
        }
    }

    static async startDatabase() {
        return await client.$connect();
    }
}