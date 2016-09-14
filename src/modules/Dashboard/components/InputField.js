import React, { PropTypes } from 'react'

import { TextField } from 'material-ui'


const InputField = ({ input, label, type, meta: { touched, error } }) => (
  <TextField
    fullWidth={true}
    type={type}
    hintText={label}
    errorText={touched && error ? error : null}
    {...input}
  />
)

InputField.propTypes = {
  // Injected by redux-form Field
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  })
}

export default InputField
