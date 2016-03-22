import React, { Component, PropTypes } from 'react';

const LoginCheck = ({authState}) => {

  return (
    <div>
      checando login
    </div>
  );
};

LoginCheck.propTypes = {
  authState: PropTypes.object.isRequired
};

export default LoginCheck;
