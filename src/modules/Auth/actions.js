import fetch from 'isomorphic-fetch'

const OAUTH_URL = 'https://passaporte.redesustentabilidade.org.br'
const REDIRECT_URI = 'http://filiados.redesustentabilidade.org.br/login'
const CLIENT_ID = '6enqtMzu'
const CLIENT_SECRET = 'JHtpXlo7iRrJfm2dR32n'

export const REQUEST_ACCESS_TOKEN = 'Auth/REQUEST_ACCESS_TOKEN'
export const SUCCESS_ACCESS_TOKEN = 'Auth/SUCCESS_ACCESS_TOKEN'
export const FAILURE_ACCESS_TOKEN = 'Auth/FAILURE_ACCESS_TOKEN'

export const REQUEST_USER_INFO = 'Auth/REQUEST_USER_INFO'
export const SUCCESS_USER_INFO = 'Auth/SUCCESS_USER_INFO'
export const FAILURE_USER_INFO = 'Auth/FAILURE_USER_INFO'

const failureAccessToken = error => ({
  type: FAILURE_ACCESS_TOKEN,
  error
})

const requestAccessToken = code => ({
  type: REQUEST_ACCESS_TOKEN,
  code
})

const successAccessToken = jwtToken => {
  return dispatch => {
    // If login was successful, set the token in local storage
    localStorage.setItem('jwt_token', jwtToken)

    dispatch({ type: SUCCESS_ACCESS_TOKEN, jwtToken: jwtToken })
  }
}

const requestUserInfo = jwtToken => ({
  type: REQUEST_USER_INFO,
  jwtToken
})

const failureUserInfo = error => ({
  type: FAILURE_USER_INFO,
  error
})

const loggedInSuccesfull = json => ({
  type: SUCCESS_USER_INFO,
  user: json,
})

const fetchUserInfo = (jwtToken) => {
  return dispatch => {

    dispatch(requestUserInfo(jwtToken))

    const config = {
      method: 'GET',
      mode: 'cors',
      credentials: "include",
      headers: {
        'Authorization': jwtToken
      },
    }

    fetch(`${OAUTH_URL}/api/userinfo`, config)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        // Save user in state
        dispatch(loggedInSuccesfull(json))

      }).catch(err => dispatch(failureUserInfo(err)))
  }
}

const fetchAccessToken = code => {
  if (!code) {
    // Change urls to variables environment
    window.location = `${OAUTH_URL}/dialog/authorize?response_type=code&scope=profile&approval_prompt=auto&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
  }

  return dispatch => {
    dispatch(requestAccessToken(code))

    const data = `code=${code}&client_secret=${CLIENT_SECRET}&grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: data
    }

    fetch(`${OAUTH_URL}/oauth/token`, config)
      .then(response =>
        response.json().then(json => ({ json, response }))
      ).then(({ json, response }) => {
        if (!response.ok) {
          if (response.status === 403) {
            dispatch(failureAccessToken(json.error_description))
          }
          return Promise.reject(json)
        }

        const jwtToken = `${json.token_type} ${json.access_token}`

        // Save token in state and load user info
        dispatch(successAccessToken(jwtToken))
        dispatch(fetchUserInfo(jwtToken))

      }).catch(err => console.log("Error: ", err))
  }
}

export const login = code => {
  return (dispatch, getState) => {
    const jwtToken = getState().auth.jwtToken || localStorage.getItem('jwt_token')

    if (jwtToken) {
      // Saved token to storage and state
      dispatch(successAccessToken(jwtToken))
      // Load user information
      dispatch(fetchUserInfo(jwtToken))
    } else {
      // Get access token
      dispatch(fetchAccessToken(code))
    }
  }
}

export const SUCCESS_LOGOUT = 'Auth/SUCCESS_LOGOUT'


const successLogout = () => ({
  type: SUCCESS_LOGOUT
})


export const logout = () => {
  return (dispatch, getState) => {
    // Clear localStorage to remove jwt_token
    localStorage.clear()
    dispatch(successLogout())
  }
}
