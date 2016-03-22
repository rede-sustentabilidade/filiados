import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/authActions';
import LoginCheck from '../components/LoginCheck';

class LoginPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount () {
    let jwt_token = localStorage.getItem('jwt_token') || null;

    if (!jwt_token) {
      let { query } = this.props.location;
      this.props.actions.fetchAccessToken(query.code);
    } else {
      this.props.actions.loginUser(jwt_token);
    }
  }

  render() {
    return (
      <LoginCheck
        authActions={this.props.actions}
        authState={this.props.authState}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    authState: state.authAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
