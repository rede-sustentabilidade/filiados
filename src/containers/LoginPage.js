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

  componentWillMount () {
    let { query } = this.props.location;
    this.props.actions.requestCode(query.code);
  }

  render() {
    return (
      <LoginCheck
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
