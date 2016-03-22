import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import authAppState from './auth';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  authAppState
});

export default rootReducer;
