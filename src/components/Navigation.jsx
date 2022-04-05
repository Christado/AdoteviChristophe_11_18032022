import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
	render() {
		return (
			<div className="Navigation">
				{/* Navigation to Home page on click  */}
				<NavLink exact to="/" activeClassName="nav-active">
                    Accueil
				</NavLink>
				{/* Navigation to About page on click */}
				<NavLink exact to="/about" activeClassName="nav-active">
                    A propos
				</NavLink>
			</div>
		);
	}
}
