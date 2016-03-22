import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/filiadoActions';

class ListPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    filiadoState: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  // componentDidMount () {
  //   let jwt_token = localStorage.getItem('jwt_token') || null;
  //
  //   if (!jwt_token) {
  //     let { query } = this.props.location;
  //     this.props.actions.fetchAccessToken(query.code);
  //   } else {
  //     this.props.actions.loginUser(jwt_token);
  //   }
  // }

  render() {
    return (
      <div>Listando os filiados</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filiadoState: state.filiadoAppState
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
)(ListPage);
