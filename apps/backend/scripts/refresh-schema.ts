import got from "got";
import { config } from "dotenv";
import * as z from "zod";

config();

const hasuraSchema = z
    .object({
        HASURA_HOST_PORT: z.string().min(1),
        HASURA_GRAPHQL_ADMIN_SECRET: z.string().min(1),
    })
    .passthrough();

const hasuraConfig = hasuraSchema.parse(process.env);

const body = {
    type: "reload_remote_schema",
    args: {
        name: "nestjs",
    },
};

got.post(`http://localhost:${hasuraConfig.HASURA_HOST_PORT}/v1/query`, {
    method: "post",
    json: body,
    headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": hasuraConfig.HASURA_GRAPHQL_ADMIN_SECRET,
    },
})
    .json()
    .then((json) => console.log(json));
