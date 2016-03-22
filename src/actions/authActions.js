import * as types from '../constants/ActionTypes';

export function requestCode(code) {
	return { type: types.REQUEST_CODE, code };
}

export function requestAccessToken(access_token) {
	return { type: types.REQUEST_ACCESS_TOKEN, access_token };
}

export function requestJwtCode(access_token) {
	return { type: types.REQUEST_JWT_TOKEN, access_token };
}

export function saveJwtCode(jwt_code) {
  return { type: types.SAVE_JWT_TOKEN, jwt_code };
}
