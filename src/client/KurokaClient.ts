import Eris from "eris"
import Cache from "../../Cache";
import CommandRunner from "../../runners/CommandRunner";
import { getEnv } from "../EnvUtil";
import ClientOptions from "./ClientOptions";

export = class KurokaClient extends Eris.Client {
    public cache: Cache;
    public prefix: string;
    public commands: CommandRunner;
    
    public constructor() {
        super(getEnv("token", "string"), ClientOptions);

        this.cache = new Cache();

        this.prefix = getEnv("prefix", "string");

        this.commands = new CommandRunner(this);
    }

    public async getRestMemberORCache(guild_id: string, id: string) {
        // If the objects recieve are from Rest, we can know
        let isRestMember: boolean = false;
        let isRestGuild: boolean = false;
        let guild = this.guilds.get(guild_id);

        if (!guild) {
            isRestGuild = true;
            guild = await this.getRESTGuild(guild_id);
        }

        let member = guild.members.get(id);

        if (!member) {
            isRestMember = true;
            member = await this.getRESTGuildMember(guild_id, id);
        }

        return { data: member, isRestMember, isRestGuild };
    }
}