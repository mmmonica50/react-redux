import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userDetails, userSave } from './../actions/users';
import { reduxForm, Field, Form } from 'redux-form';
import store from './../store/store';
import DevTools from './../devtools';

export class UserForm extends Component {
	render() {
		const { handleSubmit, pristine, submitting, reset, dispatch, users } = this.props;
		return <section>
			<DevTools store={store} />

			<div className="hero is-dark">
				<div className="hero-body">
					<div className="container">
						<h1 className="title">Hola {users.data.name}</h1>
						<h5 className="subtitle">Aquí puedes editar tu información</h5>
					</div>
				</div>
			</div>

			<div className="container">
				<Form onSubmit={handleSubmit(this._handleEdit, dispatch)} className="form" >

					<div className="message">
						{this.props.users.message}
					</div>

					<div className="field is-grouped">
						<div className="control is-expanded">
							<label htmlFor="name" className="label">Nombre</label>
							<Field name="name" component="input" type="text" placeholder="Nombre" className="input" />
						</div>

						<div className="control is-expanded">
							<label htmlFor="last_name" className="label">Apellido</label>
							<Field name="last_name" component="input" type="text" placeholder="Primer Apellido" className="input" />
						</div>

						<div className="control is-expanded">
							<label htmlFor="slast_name" className="label">Segundo Apellido</label>
							<Field name="slast_name" component="input" type="text" placeholder="Segundo Apellido" className="input" />
						</div>
					</div>

					<div className="field">
						<div className="control">
							<label htmlFor="email" className="label">E-mail</label>
							<Field name="email" component="input" type="email" placeholder="E-mail" className="input" />
						</div>
					</div>

					<div className="field">
						<div className="control">
							<label htmlFor="bio" className="label">Biografía corta</label>
							<Field name="bio" component="textarea" type="textarea" placeholder="Biografía corta" className="textarea" />
						</div>
					</div>

					<div className="field is-grouped">
						<div className="control">
							<button className="button is-danger" disabled={ pristine || submitting } onClick={reset}>Cancelar</button>
						</div>
						<div className="control">
							<button className="button is-success" disabled={ pristine || submitting }>Guardar</button>
						</div>
					</div>
				</Form>
			</div>
		</section>
	}

	componentWillMount() {
		const { dispatch } = this.props;
		const userId = this.props.match.params.id;
		dispatch(userDetails(userId));
	}

	_handleEdit(values, dispatch) {
		dispatch(userSave(values));
	}
}

const mapStateToProps = (state) => {
	const { users } = state;
	return {
		users,
		initialValues: users.data,
		enableReinitialize: true
	}
}

UserForm = reduxForm({
	form: 'userEditForm'
})(UserForm);

export default connect(mapStateToProps)(UserForm);