module.exports = {
    root: true,
    extends: ['custom'],
    // plugins: ["@ts-safeql/eslint-plugin"],
    ignorePatterns: ['**/sdk.ts', '**/global-*.js'],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        '@ts-safeql/check-sql': [
            'error',
            {
                connections: [
                    {
                        connectionUrl: 'postgres://postgres:postgres_pass@localhost:5432/my_app_db',
                        // The name of the variable that holds the connection:
                        name: 'myDb',
                        // An array of operators that wraps the raw query:
                        operators: ['rawQuery'],
                        migrationsDir: './db/migrations',
                    },
                ],
            },
        ],
    },
};
