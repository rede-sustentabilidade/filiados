import * as ActionTypes from './actions'
import merge from 'lodash/merge'

const initialState = {
  loading: false,
  isValid: false,
  response: null,
  error: null,
  code: null,
  access_token: null,
  jwt_token: null,
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ACCESS_TOKEN:
      return merge({}, state, {
        loading: true,
      })
    case ActionTypes.SUCCESS_ACCESS_TOKEN:
      return merge({}, state, {
        response: action.response,
        loading: false
      })
    case ActionTypes.FAILURE_ACCESS_TOKEN:
      return merge({}, state, {
        loading: false,
        error: action.error
      })
    default:
      return state
  }
}

export default reducer
