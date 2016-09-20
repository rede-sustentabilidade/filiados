import React from 'react'
import { List, Datagrid, EmailField, TextField } from 'admin-on-rest/lib/mui'

const UserList = (props) => (
    <List title="All users" {...props}>
        <Datagrid>
            <TextField label="id" source="id" />
            <TextField label="name" source="name" />
            <TextField label="username" source="username" />
            <EmailField label="email" source="email" />
        </Datagrid>
    </List>
)

export default UserList
