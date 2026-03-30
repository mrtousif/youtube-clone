-- migrate:up
CREATE EXTENSION IF NOT EXISTS pgmemento;

SELECT pgmemento.init(
  schemaname := 'public',                     -- default is 'public' 
  audit_id_column_name := 'pgmemento_audit_id',  -- default is 'pgmemento_audit_id'
  log_old_data := TRUE,                      -- default is true
  log_new_data := FALSE,                      -- default is false
  log_state := TRUE,                         -- default is false
  trigger_create_table := FALSE,               -- default is false
  except_tables  := ARRAY['schema_migrations', 'channel_subscriptions']       -- default is empty
);

-- migrate:down
DROP EXTENSION IF EXISTS pgmemento CASCADE;
