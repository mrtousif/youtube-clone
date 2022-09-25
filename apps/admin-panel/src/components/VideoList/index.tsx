import { BooleanField, Datagrid, DateField, List, NumberField, ReferenceField,UrlField, TextField } from 'react-admin';

export const VideoList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="category" />
            <ReferenceField source="channel_id" reference="users" />
            <DateField source="created_at" />
            <TextField source="description" />
            <NumberField source="dislikes_count" />
            <TextField source="duration" />
            <TextField source="id" />
            <BooleanField source="is_private" />
            <NumberField source="likes_count" />
            <UrlField source="stream_url" />
            <TextField source="thumbnail" />
            <TextField source="title" />
            <DateField source="updated_at" />
            <NumberField source="views_count" />
        </Datagrid>
    </List>
);

export default VideoList;