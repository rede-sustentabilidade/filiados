import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadUserInfo } from '../actions'


class App extends Component {

  componentDidUpdate() {
    const { credentials, loadUserInfo } = this.props
    loadUserInfo(credentials)
  }

  render() {
    const { user } = this.props
    return (
      <p>User email: {user.email}</p>
    )
  }

}

const mapStateToProps = (getState) => {
  return {
    loading: getState().auth.loading,
    user: getState().auth.user,
    credentials: getState().auth.credentials
  }
}

const mapActionToProps = { loadUserInfo }

export default connect(mapStateToProps, mapActionToProps)(App)
