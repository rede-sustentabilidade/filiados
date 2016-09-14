import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import '../styles/LoginPage.css'

import { Form, InputField } from '../../Dashboard/components'
import { isValidEmail } from '../../Dashboard/validators'
import { loginSubmit } from '../actions'


class LoginPage extends Component {

  render() {

    const { handleSubmit, submitting, error } = this.props

    return (
      <div className="LoginPage">
        <div className="LoginForm">
          <h2>This is login page</h2>
          <Form submitLabel="Enter" handleSubmit={handleSubmit(loginSubmit)} submitting={submitting} error={error}>
            <Field name="email" type="email" component={InputField} label="E-mail" />
            <Field name="password" type="password" component={InputField} label="Password" />
          </Form>
        </div>
      </div>
    )
  }
}

PropTypes.propTypes = {
  // Injected by react-form
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'E-mail invalid'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

export default reduxForm({ form: 'loginForm', validate })(LoginPage)
