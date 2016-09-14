import { SubmissionError } from 'redux-form'


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
