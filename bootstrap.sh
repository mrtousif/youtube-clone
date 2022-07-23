#!/bin/bash
set -e
export PGPASSWORD="$POSTGRES_PASSWORD";

psql -v ON_ERROR_STOP=1 -h localhost  --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS citext;

EOSQL