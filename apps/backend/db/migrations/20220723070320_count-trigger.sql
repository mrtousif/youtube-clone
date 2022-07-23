-- migrate:up

CREATE OR REPLACE FUNCTION update_subscriber_count()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        UPDATE users 
        SET subscriber_count = subscriber_count - 1
        WHERE  users.id = OLD.channel_id;

    ELSE
        UPDATE users 
        SET subscriber_count = subscriber_count + 1
        WHERE  users.id = NEW.channel_id;
    END IF;

    RETURN NULL;
END;
$$ language 'plpgsql';


CREATE TRIGGER update_subscriber_count
AFTER INSERT OR UPDATE OR DELETE ON channel_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_subscriber_count();


-- CREATE OR REPLACE FUNCTION update_video_like_dislike_count()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     IF (TG_OP = 'DELETE') THEN
--         UPDATE videos 
--         SET likes_count = (SELECT COUNT(user_id) FROM feelings WHERE reaction = 'LIKED' AND video_id = OLD.video_id)
--         SET dislikes_count = (SELECT COUNT(user_id) FROM feelings WHERE reaction = 'DISLIKED' AND video_id = OLD.video_id)
--         WHERE  videos.id = OLD.video_id;

--     ELSE
--         UPDATE videos 
--         SET likes_count = (SELECT COUNT(user_id) FROM feelings WHERE reaction = 'LIKED' AND video_id = NEW.video_id)
--         SET dislikes_count = (SELECT COUNT(user_id) FROM feelings WHERE reaction = 'DISLIKED' AND video_id = NEW.video_id)
--         WHERE  videos.id = NEW.video_id;
--     END IF;
    
--     RETURN NULL;
-- END;
-- $$ language 'plpgsql';

-- CREATE TRIGGER update_video_like_dislike_count
-- AFTER INSERT OR UPDATE OR DELETE ON feelings
--     FOR EACH ROW EXECUTE FUNCTION update_video_like_dislike_count();


-- migrate:down

DROP TRIGGER update_subscriber_count ON channel_subscriptions;
DROP FUNCTION update_subscriber_count;

-- DROP TRIGGER update_video_like_dislike_count ON feelings;
-- DROP FUNCTION update_video_like_dislike_count;