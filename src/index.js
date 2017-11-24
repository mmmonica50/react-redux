import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import store, { history } from './store/store';
import './assets/bulma.css';
import App from './App';
import UserForm from './layouts/userform';
import registerServiceWorker from './registerServiceWorker';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Route path="/" exact component={(props) => <App {...props} />} />
				<Route path="/edit/:id" component={(props) => <UserForm {...props} />} />
			</div>
		</Router>
	</Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
