import Eris, { Message } from "eris";
import KurokaClient from "./client/KurokaClient";

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

export type ExecFunction = (message: Eris.Message<Eris.GuildTextable & Eris.TextChannel>, ctx: ICommandCtx) => void;