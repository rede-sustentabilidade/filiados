import { UserAuthWrapper } from 'redux-auth-wrapper'
import { routerActions } from 'react-router-redux'

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.auth.user,
  authenticatingSelector: state => state.auth.isAuthenticated,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

export { default as reducers } from './reducers'
export { default as actions } from './actions'
