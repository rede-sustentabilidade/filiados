import { CALL_API } from '../../middleware/api'


export const REQUEST_ACCESS_TOKEN = 'Auth/REQUEST_ACCESS_TOKEN'
export const SUCCESS_ACCESS_TOKEN = 'Auth/SUCCESS_ACCESS_TOKEN'
export const FAILURE_ACCESS_TOKEN = 'Auth/FAILURE_ACCESS_TOKEN'

const fetchAccessToken = code => {
  if (!code) {
    // Change urls to variables environment
    window.location = 'https://passaporte.redesustentabilidade.org.br/dialog/authorize?response_type=code&scope=profile&approval_prompt=auto&client_id=6enqtMzu&redirect_uri=http://localhost:3000/login'
  }

  return {
    [CALL_API]: {
      types: [REQUEST_ACCESS_TOKEN, SUCCESS_ACCESS_TOKEN, FAILURE_ACCESS_TOKEN],
      endpoint: 'https://passaporte.redesustentabilidade.org.br/oauth/token',
      config: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: `code=${code}&client_secret=JHtpXlo7iRrJfm2dR32n&grant_type=authorization_code&client_id=6enqtMzu&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin`
      }
    }
  }
}

export const REQUEST_USER_INFO = 'Auth/REQUEST_USER_INFO'
export const SUCCESS_USER_INFO = 'Auth/SUCCESS_USER_INFO'
export const FAILURE_USER_INFO = 'Auth/FAILURE_USER_INFO'

const fecthUserInfo = ({ token_type, access_token }) => {
  return {
    [CALL_API]: {
      types: [REQUEST_USER_INFO, SUCCESS_USER_INFO, FAILURE_USER_INFO],
      endpoint: 'https://passaporte.redesustentabilidade.org.br/api/userinfo',
      config: {
        method: 'GET',
        headers: {
          'Authorization': `${token_type} ${access_token}`
        }
      }
    }
  }
}

export const loadAccessToken = code => {
  return (dispatch, getState) => {
    const credentials = getState().auth.credentials
    if (credentials !== null) {
      // Token saved in state
      return
    }

    // Fetch token, call if not is save storage or app state
    return dispatch(fetchAccessToken(code))
  }
}

export const loadUserInfo = credentials => {
  const user = getState().auth.user
  if (user !== null) {
    return
  }

  // Fetch user info based on token saved
  return dispatch(fecthUserInfo(credentials))
}
