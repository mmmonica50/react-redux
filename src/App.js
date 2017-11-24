import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersList } from "./actions/users";
import DevTools from './devTools';
import store from './stores/store';

class App extends Component {
	render() {
		console.log('users', this.props.users);
		let allUsers = this.props.users.userData;
		return (
			<div>
				<section className="hero is-dark is-medium">
					<DevTools store={store}/>
					<header className="hero-body">
						<div className="container">
							<h1 className="title">Bienvenidos al infierno</h1>
							<h3 className="subtitle">Muajaja</h3>
						</div>
					</header>
				</section>

				<section className="section">
					<div className="container">
						<h4 className="title is-4">Usuarios</h4>

						<div className="content">
							<table className="table is-bordered">
								<thead>
								<tr>
									<th>ID</th>
									<th>Nombre</th>
									<th>Apellido</th>
									<th>Segundo apellido</th>
									<th>E-mail</th>
									<th>Estatus</th>
								</tr>
								</thead>
								<tbody>
								{Object.keys(allUsers).map((item, key) => {
									return (
										<tr key={key}>
											<td>{allUsers[item].id}</td>
											<td>{allUsers[item].name}</td>
											<td>{allUsers[item].last_name}</td>
											<td>{allUsers[item].slast_name}</td>
											<td>{allUsers[item].email}</td>
											<td>{allUsers[item].status}</td>
										</tr>
									)
								})}
								</tbody>
							</table>
						</div>
					</div>
				</section>
			</div>
		);
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(usersList());
	}
}

function mapStateToProps(state) {
	const { users } = state;
	return {
		users
	}
}

export default connect(mapStateToProps)(App);
