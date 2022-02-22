import Eris from "eris"
import Cache from "../../Cache";
import { getEnv } from "../EnvUtil";
import ClientOptions from "./ClientOptions";

export = class KurokaClient extends Eris.Client {
    public cache: Cache;
    public constructor() {
        super(getEnv("token", "string"), ClientOptions);

        this.cache = new Cache();
    }
}