const { upAll, exec } = require("docker-compose");
const { join } = require("path");

module.exports = async () => {
    await upAll({
        cwd: join(__dirname),
        log: true,
    });

    await exec("database", ["sh", "-c", "until pg_isready ; do sleep 1; done"], {
        cwd: join(__dirname),
    });
};