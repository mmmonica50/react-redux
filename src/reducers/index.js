import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { users } from "./users";

const rootReducer = combineReducers({
	users,
	form: formReducer,
	routing: routerReducer
});

export default rootReducer;