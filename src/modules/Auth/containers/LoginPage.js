import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import '../styles/LoginPage.css'

import { UserInfo, Loading } from '../components'
import { login } from '../actions'


class LoginPage extends Component {

  componentDidMount() {
    const { location: { query }, login } = this.props
    login(query.code)
  }

  render() {
    const { isLoading, user, error } = this.props

    return (
      <div className="LoginPage">
        {isLoading ? <Loading /> : <UserInfo user={user} />}
        <span>{error}</span>
      </div>
    )
  }
}

PropTypes.propTypes = {
  // Injected by react-redux
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading,
  user: state.auth.user
})

const mapActionsToProps = { login }

export default connect(mapStateToProps, mapActionsToProps)(LoginPage)
