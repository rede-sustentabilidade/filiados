import React, { Component, PropTypes } from 'react';

const LoginCheck = ({authState}) => {
  //requestJwtToken(authState.code);
  //if (authState.isValid)
  const resultLabel = authState.isValid ? authState.jwt_token : 'checando login';

  return (
    <div>
      {resultLabel}
    </div>
  );
};

LoginCheck.propTypes = {
  authState: PropTypes.object.isRequired
};

export default LoginCheck;
