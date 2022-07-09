#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER hasura WITH PASSWORD 'postgres';
    CREATE DATABASE hasura_metadata;
    GRANT ALL PRIVILEGES ON DATABASE hasura_metadata TO hasura;

    CREATE USER keycloak WITH PASSWORD 'password';
    CREATE DATABASE keycloak_db;
    GRANT ALL PRIVILEGES ON DATABASE keycloak_db TO keycloak;
EOSQL