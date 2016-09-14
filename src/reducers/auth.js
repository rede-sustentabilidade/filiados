import {REQUEST_CODE, SAVE_ACCESS_TOKEN, SAVE_JWT_TOKEN, LOGGED_IN_SUCCESSFULL, LOGOUT_SUCCESSFULL} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  isValid: false,
  code: null,
  access_token: null,
  jwt_token: null,
  user: {}
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function authAppState(state = initialState, action) {
	switch (action.type) {
		case REQUEST_CODE:
    {
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
			return objectAssign({}, state, { code: action.code });
    }
    case SAVE_ACCESS_TOKEN:
    {
      return objectAssign({}, state, { access_token: action.access_token });
    }
		case SAVE_JWT_TOKEN:
    { // limit scope with this code block, to satisfy eslint no-case-declarations rule.
      let jwt_token = localStorage.getItem('jwt_token') || null;
      return objectAssign({}, state, { jwt_token: jwt_token });
    }
    case LOGGED_IN_SUCCESSFULL:
    {
      return objectAssign({}, state, { jwt_token: action.jwt_token, user: action.user, isValid: true });
    }
    case LOGOUT_SUCCESSFULL:
    {
      return objectAssign({}, state, { jwt_token: null, isValid: false });
    }
		default:
			return state;
	}
}
