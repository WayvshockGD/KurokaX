import Eris from "eris";
import KurokaClient from "../src/client/KurokaClient";

export interface ICommand {
    name: string;
    aliases: string[];
    dev: boolean;
    exec: ExecFunction;
}

export interface ICommandCtx {
    args: string[];
    client: KurokaClient;
}

export type ExecFunction = (message: Eris.Message<Eris.TextableChannel>, ctx: ICommandCtx) => void;