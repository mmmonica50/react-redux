import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { usersList } from "./actions/users";


import store from './store/store';
import DevTools from './devtools';

class App extends Component {
	render() {
		let allUsers = this.props.users.data;
		return (
			<div>
				<section className="hero is-dark is-medium">
					<DevTools store={store}/>
					<header className="hero-body">
						<div className="container">
							<h1 className="title">Bienvenidos al infierno</h1>
							<h3 className="subtitle">Muajaja :)</h3>
						</div>
					</header>
				</section>

				<section className="section">
					<div className="container">
						<h4 className="title is-4">Usuarios</h4>

						<div className="content">
							<div className="message has-text-success">{this.props.users.message}</div>
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
											<td><NavLink to={`/edit/${allUsers[item].id}`}>{allUsers[item].name}</NavLink></td>
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

const mapStateToProps = (state) => {
	const { users } = state;
	return {users}
}

export default connect(mapStateToProps)(App);
