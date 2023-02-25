module.exports = {
    root: true,
    extends: ['custom'],
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
                        // The URL of the database:
                        databaseUrl: 'postgres://postgres:postgres@localhost:5432/my_database',
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
