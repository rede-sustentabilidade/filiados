import {REQUEST_CODE, REQUEST_ACCESS_TOKEN, REQUEST_JWT_TOKEN, SAVE_JWT_TOKEN} from '../constants/ActionTypes';
import objectAssign from 'object-assign';

const initialState = {
  is_logged_in: false,
  code: null,
  access_token: null,
  jwt_token: null
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function authAppState(state = initialState, action) {
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' }
    //body: `username=${creds.username}&password=${creds.password}`
  };
	switch (action.type) {
		case REQUEST_CODE:
    {
      if(!action.code) {
        window.location = 'http://localhost:3003/authorization?client_id=6enqtMzu&client_secret=JHtpXlo7iRrJfm2dR32n&response_type=code&redirect_uri=http://localhost:3000/login';
      }

      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
			return objectAssign({}, state, { code: action.code });
    }
    case REQUEST_ACCESS_TOKEN:
    {

      return state;
    }
		case REQUEST_JWT_TOKEN:
    { // limit scope with this code block, to satisfy eslint no-case-declarations rule.

      let access_token = localStorage.getItem('jwt_token') || null;
      let newState = objectAssign({}, state);
      // newState[action.fieldName] = action.value;
      // let calc = calculator();
      // newState.necessaryDataIsProvidedToCalculateSavings = calc.necessaryDataIsProvidedToCalculateSavings(newState);
      // newState.dateModified = dateHelper.getFormattedDateTime(new Date());
      //
      // if (newState.necessaryDataIsProvidedToCalculateSavings) {
      //   newState.savings = calc.calculateSavings(newState);
      // }

      return newState;
    }
    case SAVE_JWT_TOKEN:
    {
      return state;
    }
		default:
			return state;
	}
}
