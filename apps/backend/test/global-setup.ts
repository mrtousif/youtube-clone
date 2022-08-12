import { upAll, exec } from "docker-compose";
import { join } from "path";
import isPortReachable from 'is-port-reachable';

export default async () => {
    const isDBReachable = await isPortReachable(54321, {host: 'localhost'});
    if (!isDBReachable) {
        await upAll({
            cwd: join(__dirname),
            log: true,
        });
    
        await exec("database", ["sh", "-c", "until pg_isready ; do sleep 1; done"], {
            cwd: join(__dirname),
        });

        // run migration

        // run seeder
    }
    
};