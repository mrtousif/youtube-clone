const { down } = require("docker-compose");
const { join } = require("path");

module.exports = async () => {
    // Check if running CI environment
    if (process.env.CI) {
        await down({
            commandOptions: ["--remove-orphans"],
            cwd: join(__dirname),
        });
    }
};