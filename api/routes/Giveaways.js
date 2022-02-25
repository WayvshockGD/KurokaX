let express = require("express");
const ms = require("ms");
const { setTimeout } = require("timers/promises");
const Constants = require("../Constants");
const DB = require("../Database");

let router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ 
        context: "Welcome to the giveaway endpoints",
        endpoints: [
            { type: "POST", url: "/start" }
        ]
    });
});

router.post("/start", async (req, res) => {
    let started = new Date().toISOString();
    let end = req.headers["_time"];
    let guild = req.headers["_guild"];
    let channel = req.headers["_channel"];
    if (typeof end === "string") {
        end = ms(end);
    }
    console.log(started, end, guild, channel);
    console.log(req.headers)
    await DB.setGiveaway(res, guild, channel, { started, end });
    await setTimeout(5000);
    res.status(200).json({ message: Constants.SUCCESS });
});

module.exports = router;