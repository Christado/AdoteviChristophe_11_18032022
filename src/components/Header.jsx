import React, { Component } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

export default class Header extends Component {

	//Import Logo and Navigation components
	render() {
		return (
			<div className="Header">
				<Logo />
				<Navigation />
			</div>
		);
	}
}
