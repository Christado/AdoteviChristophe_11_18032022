import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Error extends Component {

	//Import Header component + redirection to Home page

	render() {
		return (
			<div className="Error">
				<Header />
				<h1>404</h1>
				<p>Oups! La page que vous demandez n{'\'existe pas'}</p>
				<Link to='/' className="homeLink">Retouner sur la page {'d\'accueil'}</Link>
			</div>
		);
	}
}
