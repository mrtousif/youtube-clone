-- migrate:up
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE OR REPLACE FUNCTION update_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   IF row(NEW.*) IS DISTINCT FROM row(OLD.*) THEN
      NEW.modified = now(); 
      RETURN NEW;
   ELSE
      RETURN OLD;
   END IF;
END;
$$ language 'plpgsql';

CREATE TABLE users (
  id uuid DEFAULT uuid_generate_v4(),
  kc_id uuid,
  name varchar,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT users_id_pk PRIMARY KEY (id)
);

CREATE TABLE babies (
    id uuid DEFAULT uuid_generate_v4(),
    parent_id uuid NOT NULL,
    name VARCHAR NOT NULL,
    dob SMALLINT,
    CONSTRAINT babies_id_pk PRIMARY KEY (id),
    CONSTRAINT parent_id_fk FOREIGN KEY (parent_id) REFERENCES users(id)
)

-- migrate:down

DROP TABLE users;
DROP TABLE babies;
DROP FUNCTION update_at_timestamp;