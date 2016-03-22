import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

function requestCode(code) {
	return { type: types.REQUEST_CODE, code };
}

function saveAccessToken(access_token) {
	return { type: types.SAVE_ACCESS_TOKEN, access_token };
}

function saveJwtToken(jwt_token) {
  return { type: types.SAVE_JWT_TOKEN, jwt_token: jwt_token };
}

function loggedInSuccessfull(jwt_token, user) {
  return { type: types.LOGGED_IN_SUCCESSFULL, jwt_token, user: user, isValid: true };
}

function logoutSuccessfull() {
  return { type: types.LOGOUT_SUCCESSFULL, jwt_token: null, isValid: false };
}

export function logoutUser() {
	return dispatch => {
		localStorage.clear();
		dispatch(logoutSuccessfull());
	};
}

export function loginUser(jwt_token) {
	return dispatch => {
		let user = {name: 'lucaspirola@gmail.com', id: 1};
		dispatch(saveJwtToken(jwt_token));
		dispatch(loggedInSuccessfull(jwt_token, user));
		// redirect user loggedin to list filiados
	};
}

export function fetchAccessToken(code){
	let config = {
		method: 'POST',
		headers: { 'Content-Type':'application/x-www-form-urlencoded' },
		body: `code=${code}&client_secret=JHtpXlo7iRrJfm2dR32n&grant_type=authorization_code&client_id=6enqtMzu&redirect_uri=http://localhost:3000/`
	};

	return dispatch => {
		// We dispatch requestLogin to kickoff the call to the API
		if (!code) {
			window.location = 'http://localhost:3003/authorization?client_id=6enqtMzu&client_secret=JHtpXlo7iRrJfm2dR32n&response_type=code&redirect_uri=http://localhost:3000/';
		}
		dispatch(requestCode(code));
		return fetch('http://localhost:3003/oauth/token', config)
			.then(response =>
				response.json()
				.then(oauth => ({ oauth, response }))
			).then(({ oauth, response }) =>  {

				if (!response.ok) {
					// If there was a problem, we want to
					// dispatch the error condition
					//dispatch(loginError(user.message))
					return Promise.reject(oauth);
				} else {
					// If login was successful, set the token in local storage
					//localStorage.setItem('id_token', user.id_token);

					// Dispatch the success action
					dispatch(fetchJwtToken(oauth.access_token));
				}
			}).catch(err => console.log("Error: ", err));
		};
}

export function fetchJwtToken(access_token) {
	let config = {
		method: 'GET',
		headers: { 'Authorization':'Bearer ' + access_token }
	};

	return dispatch => {
		// We dispatch requestLogin to kickoff the call to the API
		dispatch(saveAccessToken(access_token));
		return fetch('http://localhost:3003/jwt', config)
			.then(response =>
				response.json()
				.then(jwt => ({ jwt, response }))
			).then(({ jwt, response }) =>  {
				if (!response.ok) {
					// If there was a problem, we want to
					// dispatch the error condition
					//dispatch(loginError(user.message))
					return Promise.reject(jwt);
				} else {
					// If login was successful, set the token in local storage
					localStorage.setItem('jwt_token', jwt.token);

					// Dispatch the success action
					dispatch(loginUser(jwt.token));
				}
			}).catch(err => console.log("Error: ", err));
	};
}
