import React from 'react'
import { List, Datagrid, TextField, ReferenceField } from 'admin-on-rest/lib/mui'


const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField label="id" source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField label="title" source="title" />
      <TextField label="body" source="body" />
    </Datagrid>
  </List>
)

export default PostList
