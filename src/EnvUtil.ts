import dotenv from "dotenv";
dotenv.config();

export type EnvTypes = "string" | "boolean" | "number";

export function getEnv<T>(item: string, type: EnvTypes): T {
    let i = process.env[item.toUpperCase()];

    if (!i) {
        throw new Error(`Item ${item} not found in .env file`);
    }

    switch (type) {
        case "string":
            return i as any;
        case "boolean":
            return Boolean(i) as any;
        case "number":
            return parseInt(i) as any;
    }
} 