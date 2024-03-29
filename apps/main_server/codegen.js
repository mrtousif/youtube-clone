// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config({path: '.env.development.local' });

const {
  HASURA_GRAPHQL_API_ENDPOINT: endpoint,
  HASURA_GRAPHQL_ADMIN_SECRET: secret,
} = process.env;

const COMMON_SCALAR_MAPPING = {
  ulid: 'string',
  uuid: 'string',
  date: 'string',
  jsonb: 'Record<string, any>',
  timestamptz: 'string',
  timestamp: 'string',
  citext: 'string',
  numeric: 'number',
};

const codeGenConfig = {
  generates: {
    'src/sdk/sdk.ts': {
      documents: ['src/**/*.service.ts'],
      schema: [
        {
          [endpoint]: {
            headers: {
              'x-hasura-admin-secret': secret,
            },
          },
        },
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        gqlImport: 'graphql-request#gql',
        avoidOptionals: {
          object: true,
          field: true,
          inputValue: false,
        },
        scalars: COMMON_SCALAR_MAPPING,
      },
    },
  },
};

module.exports = codeGenConfig;
