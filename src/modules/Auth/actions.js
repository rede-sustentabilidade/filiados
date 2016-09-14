import { SubmissionError } from 'redux-form'

import { CALL_API } from '../../middleware/api'


// TODO: Change for action responsible by make request
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const loginSubmit = (values) => {
  return sleep(1000) // simulate latency
    .then(() => {
      if (![ 'john@localhost.br', 'paul@localhost.br', 'george@localhost.br', 'ringo@localhost.br' ].includes(values.email)) {
        throw new SubmissionError({ email: 'User does not exist', _error: 'Login failed!' })
      } else if (values.password !== 'redux-form') {
        throw new SubmissionError({ password: 'Wrong password', _error: 'Login failed!' })
      } else {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      }
    })
}


const REQUEST_ACCESS_TOKEN = 'Auth/REQUEST_ACCESS_TOKEN'
const SUCCESS_ACCESS_TOKEN = 'Auth/SUCCESS_ACCESS_TOKEN'
const FAILURE_ACCESS_TOKEN = 'Auth/FAILURE_ACCESS_TOKEN'

const fetchAccessToken = code => {
  if (!code) {
    // Change urls to variables environment
    window.location = 'https://passaporte.redesustentabilidade.org.br/dialog/authorize?state=5EIWSAp8MptZPkb8ABfLI1UjH3dwQqk5&response_type=code&approval_prompt=auto&client_id=6enqtMzu&redirect_uri=http://localhost:3000/'
  }

  return {
    [CALL_API]: {
      types: [REQUEST_ACCESS_TOKEN, SUCCESS_ACCESS_TOKEN, FAILURE_ACCESS_TOKEN],
      endpoint: '/oauth/token',
      config: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `code=${code}&client_secret=JHtpXlo7iRrJfm2dR32n&grant_type=authorization_code&client_id=6enqtMzu&redirect_uri=http://localhost:3000/`
      }
    }
  }
}

export const loadAccessToken = code => {
  return (dispatch, getState) => {
    const response = getState().auth.response
    if (response) {
      return null
    }

    return dispatch(fetchAccessToken(code))
  }
}
