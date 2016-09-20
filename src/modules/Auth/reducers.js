import * as ActionTypes from './actions'

const initialState = {
  loading: false,
  error: null,
  isAuthenticated: false,
  credentials: null,
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ACCESS_TOKEN, ActionTypes.REQUEST_USER_INFO:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.SUCCESS_ACCESS_TOKEN:
      return {
        ...state,
        loading: false,
        credentials: action.response,
      }
    case ActionTypes.SUCCESS_USER_INFO:
      return {
        ...state,
        loading: false,
        user: action.response,
        isAuthenticated: true
      }
    case ActionTypes.FAILURE_ACCESS_TOKEN, ActionTypes.FAILURE_USER_INFO:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default reducer
