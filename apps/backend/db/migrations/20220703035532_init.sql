-- migrate:up

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;

CREATE OR REPLACE FUNCTION update_at_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   IF row(NEW.*) IS DISTINCT FROM row(OLD.*) THEN
      NEW.updated_at = now(); 
      RETURN NEW;
   ELSE
      RETURN OLD;
   END IF;
END;
$$ language 'plpgsql';


CREATE TABLE users (
  id uuid,
  email CITEXT UNIQUE NOT NULL,
  phone varchar,
  name varchar NOT NULL,
  channel_name varchar NOT NULL UNIQUE,
  description text,
  subscriber_count int DEFAULT 0 constraint count_nonnegative check (subscriber_count >= 0),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz,
  CONSTRAINT users_id_pk PRIMARY KEY (id)
);

COMMENT ON TABLE users IS 'Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels';

CREATE TYPE category_types AS ENUM (
  'UNCATEGORISED',
  'GAMING',
  'EDUCATION',
  'DOCUMENTARY',
  'MUSIC', 
  'NEWS',
  'MOVIES'
);

CREATE TABLE videos (
  id uuid DEFAULT gen_random_uuid(),
  title varchar NOT NULL constraint title_length check (char_length(title) <= 100),
  description text,
  category category_types DEFAULT 'UNCATEGORISED',
  views_count int DEFAULT 0 constraint views_nonnegative check (views_count >= 0),
  likes_count int DEFAULT 0 constraint likes_nonnegative check (likes_count >= 0),
  dislikes_count int DEFAULT 0 constraint dislikes_nonnegative check (dislikes_count >= 0),
  thumbnail varchar UNIQUE NOT NULL,
  stream_url varchar UNIQUE NOT NULL,
  channel_id uuid NOT NULL,
  duration float constraint duration_nonnegative check (duration > 0),
  is_private boolean DEFAULT FALSE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz,
  CONSTRAINT videos_id_pk PRIMARY KEY (id),
  CONSTRAINT channels_id_fk FOREIGN KEY (channel_id) REFERENCES users(id)
);

CREATE INDEX videos_channel_id_idx ON videos (channel_id);

CREATE TABLE watch_history (
  video_id uuid,
  user_id uuid,
  last_watchted_at TIME,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT watch_history_cs_pk PRIMARY KEY (video_id, user_id),
  CONSTRAINT users_id_fk FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT videos_id_fk FOREIGN KEY (video_id) REFERENCES videos(id)
);

CREATE TABLE play_list_names (
  id bigint GENERATED BY DEFAULT AS IDENTITY,
  name varchar NOT NULL,
  user_id uuid NOT NULL,
  video_count bigint DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT play_list_names_id_pk PRIMARY KEY (id),
  CONSTRAINT users_id_fk FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE play_lists (
  id uuid DEFAULT gen_random_uuid(),
  play_list_names_id bigint NOT NULL,
  video_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT play_lists_id_pk PRIMARY KEY (id),
  CONSTRAINT videos_id_fk FOREIGN KEY (video_id) REFERENCES videos(id),
  CONSTRAINT play_list_names_id_fk FOREIGN KEY (play_list_names_id) REFERENCES play_list_names(id) ON DELETE CASCADE
);

CREATE TYPE reaction_types AS ENUM (
  'LIKE',
  'DISLIKE'
);

CREATE TABLE feelings (
  user_id uuid NOT NULL,
  video_id uuid NOT NULL,
  reaction reaction_types NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT feelings_composite_pk PRIMARY KEY (user_id, video_id),
  CONSTRAINT users_id_fk FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT videos_id_fk FOREIGN KEY (video_id) REFERENCES videos(id)
);

CREATE TABLE channel_subscriptions (
  subscriber_id uuid NOT NULL,
  channel_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT channel_subscriptions_composite_pk PRIMARY KEY (subscriber_id, channel_id),
  CONSTRAINT subscriber_id_fk FOREIGN KEY (subscriber_id) REFERENCES users(id),
  CONSTRAINT channel_id_fk FOREIGN KEY (channel_id) REFERENCES users(id)
);

CREATE TRIGGER set_updated_at
BEFORE
UPDATE ON users
FOR EACH ROW
EXECUTE PROCEDURE update_at_timestamp();

CREATE TRIGGER set_updated_at
BEFORE
UPDATE ON videos
FOR EACH ROW
EXECUTE PROCEDURE update_at_timestamp();


-- migrate:down

DROP TABLE play_lists;
DROP TABLE play_list_names;
DROP TABLE feelings;
DROP TABLE channel_subscriptions;
DROP TABLE watch_history;
DROP TABLE videos;
DROP TABLE users;

DROP TYPE reaction_types;
DROP TYPE category_types;

DROP FUNCTION update_at_timestamp;