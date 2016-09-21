import React from 'react'


const UserInfo = props => {

  const user = props.user || {}

  return (
    <ul className="UserInfo">
      {Object.keys(user).map(field => {
        return (
          <li>
            <strong>{field}</strong>
            <span>{user[field]}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default UserInfo
