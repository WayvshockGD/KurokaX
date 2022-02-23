import Util from "../util/Util";

export default class BaseRunner {
    public log = console.log;

    public init(module: string) {
        this.log(Util.formatString("Started runner {0}", module));
    }
}