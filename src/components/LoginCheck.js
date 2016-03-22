import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Loggedin from './Loggedin';

const LoginCheck = ({authState, authActions}) => {

  const resultLabel = authState.isValid ? (<Loggedin authActions={authActions} authState={authState} />) : (<Link to="/">Login</Link>);

  return (
    <div>
      {resultLabel}
    </div>
  );
};

LoginCheck.propTypes = {
  authActions: PropTypes.object.isRequired,
  authState: PropTypes.object.isRequired
};

export default LoginCheck;
