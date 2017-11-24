import fetch from 'isomorphic-fetch';
import { API_URL, TOKEN } from './../config/config';

export const USERS_LIST = 'USERS_LIST';
export const USER_SHOW = 'USER_SHOW';
export const USER_SAVE = 'USER_SAVE';

export function usersList() {
	const options = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + TOKEN
		},
		method: 'get'
	}

	return dispatch => {
		return fetch(`${API_URL}/users`, options)
		.then((result) => result.json())
		.then((json) => dispatch(userListData(json)));
	}
}

export function userListData(response) {
	const values =  {
		type: USERS_LIST,
		message: "Users loaded",
		data: response.data,
		timestamp: Date.now()
	}

	return values;
}
