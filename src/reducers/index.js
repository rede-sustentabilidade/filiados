import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import auth from '../modules/Auth/reducers'


const rootReducer = combineReducers({
  routing,
  auth
})

export default rootReducer
