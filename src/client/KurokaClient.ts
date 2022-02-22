import Eris from "eris"
import Cache from "../../Cache";
import { getEnv } from "../EnvUtil";
import ClientOptions from "./ClientOptions";

export = class KurokaClient extends Eris.Client {
    public cache: Cache;
    public prefix: string;
    
    public constructor() {
        super(getEnv("token", "string"), ClientOptions);

        this.cache = new Cache();

        this.prefix = getEnv("prefix", "string");
    }
}