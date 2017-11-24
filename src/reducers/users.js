import { USERS_LIST, USER_SHOW, USER_SAVE } from './../actions/users';

const users = (state = {message:'', userData: {}}, action) => {
	switch (action.type) {
		case USERS_LIST:
			return {
				...state,
				message: action.message,
				userData: action.data,
				timestamp: action.timestamp
			}
		default:
			return state;
	}
}

export default users;
