import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react'

import '../styles/LoginPage.css'

import { loadAccessToken } from '../actions'


class LoginPage extends Component {

  componentDidMount() {
    const { location: { query }, loadAccessToken } = this.props
    loadAccessToken(query.code)
  }

  render() {
    const { loading, user, credentials } = this.props

    const { token_type, access_token } = credentials || {}

    return (
      <div className="LoginPage">
        {loading ? (<span>Loading . . .</span>) : (
          <div className="TokenInfo">
            <label>Access Token</label>
            <p>{`${token_type} ${access_token}`}</p>
          </div>
        )}
        {credentials && <Link to="/">Go to dashboard</Link>}
      </div>
    )
  }
}

PropTypes.propTypes = {
  // Injected by react-redux
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  credentials: PropTypes.object,
  loadAccessToken: PropTypes.func.isRequired,
  user: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error,
  loading: state.auth.loading,
  credentials: state.auth.credentials,
  user: state.auth.user
})

const mapActionsToProps = { loadAccessToken }

export default connect(mapStateToProps, mapActionsToProps)(LoginPage)
