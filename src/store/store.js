import rootReducer from './../reducers/index';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import DevTools from './../devtools';

const configStore = compose(
	applyMiddleware(thunk),
	DevTools.instrument()
)(createStore);

const store = configStore(rootReducer);

export const history = syncHistoryWithStore(createBrowserHistory(), store);

export default store;