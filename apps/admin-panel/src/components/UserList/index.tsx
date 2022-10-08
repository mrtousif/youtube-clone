import { Datagrid, DateField, EmailField,NumberField, List, TextField } from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="channel_name" />
            <DateField source="created_at" />
            <TextField source="description" />
            <EmailField source="email" />
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <NumberField source="subscriber_count" />
            <DateField source="updated_at" />
        </Datagrid>
    </List>
);

export default UserList;