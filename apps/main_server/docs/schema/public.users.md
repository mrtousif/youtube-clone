# public.users

## Description

Users table is channels table. The user_id and channel_id is synonyms. A user cannot have multiple channels

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| id | uuid | gen_random_uuid() | false | [public.videos](public.videos.md) [public.watch_history](public.watch_history.md) [public.play_list_names](public.play_list_names.md) [public.feelings](public.feelings.md) [public.channel_subscriptions](public.channel_subscriptions.md) |  |  |
| email | citext |  | false |  |  |  |
| phone | varchar |  | true |  |  |  |
| name | varchar |  | false |  |  |  |
| channel_name | varchar |  | false |  |  |  |
| description | text |  | true |  |  |  |
| subscriber_count | integer | 0 | true |  |  |  |
| created_at | timestamp with time zone | now() | false |  |  |  |
| updated_at | timestamp with time zone |  | true |  |  |  |

## Constraints

| Name | Type | Definition |
| ---- | ---- | ---------- |
| count_nonnegative | CHECK | CHECK ((subscriber_count >= 0)) |
| users_id_pk | PRIMARY KEY | PRIMARY KEY (id) |
| users_email_key | UNIQUE | UNIQUE (email) |
| users_channel_name_key | UNIQUE | UNIQUE (channel_name) |

## Indexes

| Name | Definition |
| ---- | ---------- |
| users_id_pk | CREATE UNIQUE INDEX users_id_pk ON public.users USING btree (id) |
| users_email_key | CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email) |
| users_channel_name_key | CREATE UNIQUE INDEX users_channel_name_key ON public.users USING btree (channel_name) |

## Triggers

| Name | Definition |
| ---- | ---------- |
| set_updated_at | CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_at_timestamp() |

## Relations

![er](public.users.svg)

---

> Generated by [tbls](https://github.com/k1LoW/tbls)