import { down } from "docker-compose";
import { join } from "path";

export default async () => {
    // Check if running CI environment
    if (process.env.CI) {
        await down({
            commandOptions: ["--remove-orphans"],
            cwd: join(__dirname),
        });
    }
};