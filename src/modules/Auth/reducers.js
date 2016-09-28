import * as ActionTypes from './actions'

const initialState = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
  code: null,
  jwtToken: null,
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ACCESS_TOKEN:
      return {
        ...state,
        isLoading: true,
        code: action.code
      }
    case ActionTypes.REQUEST_USER_INFO:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.SUCCESS_ACCESS_TOKEN:
      return {
        ...state,
        jwtToken: action.jwtToken,
      }
    case ActionTypes.SUCCESS_USER_INFO:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        isLoggedIn: true
      }
    case ActionTypes.SUCCESS_LOGOUT:
      return {
        ...state,
        user: null,
        jwtToken: null,
        isLoggedIn: false
      }
    case ActionTypes.FAILURE_ACCESS_TOKEN:
    case ActionTypes.FAILURE_USER_INFO:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducer
