import React, { PropTypes } from 'react'


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
      {error && <strong>{error}</strong>}
      <div>
        <button type="submit" disabled={submitting}>{submitLabel}</button>
        {cancelLabel && reset && <button type="button" disabled={submitting} onClick={reset}>{cancelLabel}</button>}
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
