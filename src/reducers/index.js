import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import { default as users } from './users';

const rootReducer = combineReducers({
	users,
	routing: routerReducer,
	form: formReducer
});

export default rootReducer;
