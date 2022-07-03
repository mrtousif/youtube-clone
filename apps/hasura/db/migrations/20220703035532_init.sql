-- migrate:up
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

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "kc_id" uuid,
  "name" varchar,
  "created_at" timestamptz DEFAULT now(),
  "updated_at" timestamptz update_at_timestamp()
);

-- migrate:down

DROP TABLE users;
DROP FUNCTION update_at_timestamp;