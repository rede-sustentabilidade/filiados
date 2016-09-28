import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../styles/LoginPage.css'

import { Loading } from '../components'
import { login } from '../actions'


class LoginPage extends Component {

  componentDidMount() {
    const { location: { query }, login } = this.props
    login(query.code)
  }

  render() {
    const { isLoading, error } = this.props

    return (
      <div className="LoginPage">
        {isLoading ? <Loading /> : (
          <p>Logged successfull <Link to="/">go to dashboard</Link></p>
        )}
        {error && <span>{error}</span>}
      </div>
    )
  }
}

PropTypes.propTypes = {
  // Injected by react-redux
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  login: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  error: state.auth.error,
  isLoading: state.auth.isLoading
})

const mapActionsToProps = { login }

export default connect(mapStateToProps, mapActionsToProps)(LoginPage)
