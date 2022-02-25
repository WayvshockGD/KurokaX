let express = require("express");
const { default: Util } = require("../util/Util");
const DB = require("./Database");
let app = express();

let GiveawayRouter = require("./routes/Giveaways");

let routes = [{
    name: "/api/giveaways"
}]

app.use("/api/giveaways", GiveawayRouter);
app.use("/", (_, res) => res.status(200).json({
    context: "api_route_map",
    routes: routes.map((val) => val.name)
}));

DB.startDatabase();

module.exports = () => {
    app.listen(3000, () => console.log(Util.formatString("Listening on port {0}", "3000")));
};