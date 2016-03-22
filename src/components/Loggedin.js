import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Loggedin = ({authState, authActions}) => {

  return (
    <div>
      {authState.user.name}
      <a href="javascript:void(0);" onClick={() => authActions.logoutUser()}>sair</a>
    </div>
  );
};

Loggedin.propTypes = {
  authState: PropTypes.object.isRequired,
  authActions: PropTypes.object.isRequired
};

export default Loggedin;
