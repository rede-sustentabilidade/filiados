import React, { PropTypes } from 'react'

import '../styles/Form.css'
import { RaisedButton } from 'material-ui'


const Form = (props) => {

  const {
    children,
    handleSubmit,
    submitting,
    submitLabel,
    cancelLabel,
    error,
    reset,
    ...otherProps
  } = props

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
      <div>
        {cancelLabel && reset && <RaisedButton className="Button" label={cancelLabel} disabled={submitting} onClick={reset} />}
        <RaisedButton className="Button" primary={true} label={submitLabel} type="submit" disabled={submitting} />
        {error && <strong>{error}</strong>}
      </div>
    </form>
  )
}

Form.propTypes = {
  submitLabel: PropTypes.string.isRequired,
  cancelLabel: PropTypes.string,
  // Injected by redux-form
  submitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  reset: PropTypes.func,
}

Form.defaultProps = {
  submitting: false
}

export default Form
