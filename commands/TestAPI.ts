import BuildCommand from "../struct/BuildCommand";
import axios from "axios";
import Eris from "eris";

export = new BuildCommand({
    name: 'api',
    aliases: ['test-api'],
    dev: true,
    async exec({ channel }, { args }) {
        let arg: string | number;

        if (!/[1-9]?(s|m|h)+/g.test(args[0])) {
            arg = parseInt(args[0]);
        } else {
            arg = args[0];
        }
        
        let data = await axios({ 
            url: `${process.env.API_URL}/api/giveaways/start`,
            headers: {
                _channel: channel.id,
                _guild: channel.guild.id,
                _time: arg
            },
            method: "POST"
        }).catch((e) => channel.createMessage(`\`\`\`\n${e}\n\`\`\``));
        console.log(data instanceof Eris.Message ? "Eris Message" : data.data);
        channel.createMessage(data instanceof Eris.Message ? "Eris#Message" : data.data.message);
    }
});