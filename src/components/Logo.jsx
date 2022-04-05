import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends Component {
	render() {
		return (
			<div className="Logo">
				{/* Return to Home page on click */}
				<Link to='/'>
					<img src='../img/kasa.svg' alt='Logo' />
				</Link>
			</div>
		);
	}
}
