import { USERS_LIST, USER_EDIT, USER_SAVE } from "../actions/users";

export const users = (state = {message: '', data: []}, action) => {
	switch(action.type) {
		case USERS_LIST:
			return {
				...state,
				message: action.message,
				data: action.data,
				timestamp: action.timestamp
			}
		case USER_EDIT:
			return {
				...state,
				message: action.error,
				data: action.data,
				timestamp: action.timestamp
			}
		default:
			return {
				...state
			}
	}
}