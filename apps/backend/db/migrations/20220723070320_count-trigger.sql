-- migrate:up

CREATE OR REPLACE FUNCTION update_subscriber_count()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        UPDATE users 
        SET subscriber_count = subscriber_count - 1
        WHERE  users.id = OLD.channel_id;

    ELSEIF (TG_OP = 'INSERT') THEN
        UPDATE users 
        SET subscriber_count = subscriber_count + 1
        WHERE  users.id = NEW.channel_id;
    END IF;

    RETURN NULL;
END;
$$ language 'plpgsql';


CREATE TRIGGER update_subscriber_count
AFTER INSERT OR DELETE ON channel_subscriptions
    FOR EACH ROW EXECUTE FUNCTION update_subscriber_count();


CREATE OR REPLACE FUNCTION update_video_like_dislike_count()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'INSERT') AND (NEW.reaction = 'LIKE') THEN
        UPDATE videos
        SET likes_count = likes_count + 1
        WHERE  videos.id = NEW.video_id;

    ELSEIF (TG_OP = 'INSERT') AND (NEW.reaction = 'DISLIKE') THEN
        UPDATE videos
        SET dislikes_count = dislikes_count + 1
        WHERE  videos.id = NEW.video_id;  

    ELSEIF (TG_OP = 'DELETE') AND (OLD.reaction = 'DISLIKE') THEN
        UPDATE videos
        SET dislikes_count = dislikes_count - 1
        WHERE  videos.id = OLD.video_id;

    ELSEIF (TG_OP = 'DELETE') AND (OLD.reaction = 'LIKE') THEN
        UPDATE videos
        SET likes_count = likes_count - 1
        WHERE  videos.id = OLD.video_id; 

    ELSEIF (TG_OP = 'UPDATE') AND (OLD.reaction = 'LIKE') AND (NEW.reaction = 'DISLIKE') THEN
        UPDATE videos
        SET likes_count = likes_count - 1, dislikes_count = dislikes_count + 1
        WHERE  videos.id = OLD.video_id;

    ELSEIF (TG_OP = 'UPDATE') AND (OLD.reaction = 'DISLIKE') AND (NEW.reaction = 'LIKE') THEN
        UPDATE videos
        SET likes_count = likes_count + 1, dislikes_count = dislikes_count - 1
        WHERE  videos.id = OLD.video_id;

    END IF;
    
    RETURN NULL;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_video_like_dislike_count
AFTER INSERT OR UPDATE OR DELETE ON feelings
    FOR EACH ROW EXECUTE FUNCTION update_video_like_dislike_count();


-- migrate:down

DROP TRIGGER update_subscriber_count ON channel_subscriptions;
DROP FUNCTION update_subscriber_count;

DROP TRIGGER update_video_like_dislike_count ON feelings;
DROP FUNCTION update_video_like_dislike_count;