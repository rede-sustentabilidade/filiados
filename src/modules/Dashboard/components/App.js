import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { logout } from '../../Auth/actions'


class App extends Component {

  render() {
    const { isLoggedIn, user, logout } = this.props

    return (
      <div>
        {isLoggedIn ? (
          <div>
            <p>Logged user with:</p>
            <code>{JSON.stringify(user)}</code>
            <hr />
            <button type="button" onClick={() => logout()}>Logout</button>
          </div>
        ) : <p>You isn't logged, <Link to="/login">go to login page</Link></p>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapStateToActions = { logout }

export default connect(mapStateToProps, mapStateToActions)(App)
