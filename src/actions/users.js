import fetch from 'isomorphic-fetch';
import { API_URL, TOKEN } from "../config/config";

export const USERS_LIST = 'USERS_LIST';
export const USER_EDIT = 'USER_EDIT';
export const USER_SAVE = 'USER_SAVE';

export const usersList = () => {
	const options = {
		headers: {
			'Accept' : 'application/json',
			'Authorization': 'Bearer ' + TOKEN
		},
		method: 'get'
	}

	return dispatch => {
		fetch(`${API_URL}/users`, options)
			.then((result) => result.json())
			.then((json) => dispatch(userListData(json)));
	}
}

export const userListData = (json) => {
	const responseData = {
		type: USERS_LIST,
		message: 'Load good :)',
		data: json.data,
		timestamp: Date.now()
	}

	return responseData;
}

export const userDetails = (id) => {
	const options = {
		headers: {
			'Accept' : 'application/json',
			'Authorization': 'Bearer ' + TOKEN
		},
		method: 'get'
	}

	return dispatch => {
		fetch(`${API_URL}/users/${id}`, options)
			.then((result) => result.json())
			.then((json) => dispatch(userDetailsData(json, 'loaded')))
	}
}

export const userDetailsData = (json, message) => {
	const responseData = {
		type: USER_EDIT,
		message: message,
		data: json,
		timestamp: Date.now()
	}

	return responseData;
}

export const userSave = (values) => {
	const options = {
		headers: {
			'Accept' : 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + TOKEN
		},
		method: 'post',
		body: JSON.stringify(values)
	}

	return dispatch => {
		fetch(`${API_URL}/users/${values.id}?_method=PUT`, options)
			.then((result) => result.json())
			.then((json) => dispatch(userDetailsData(json, 'Éxito')))
	}
}