import { makeValidators, num, Static } from "nestjs-envalid";

export const validators = makeValidators({
    PORT: num({ default: 3000 }),
});

export type Config = Static<typeof validators>;
