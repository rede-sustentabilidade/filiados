import * as ActionTypes from './actions'

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  code: null,
  credentials: null,
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
    case ActionTypes.SUCCESS_ACCESS_TOKEN:
      return {
        ...state,
        credentials: action.credentials,
      }
    case ActionTypes.SUCCESS_USER_INFO:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        isAuthenticated: true
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
