import Home from './pages/Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Error from './pages/Error';
import About from './pages/About';
import Housing from './pages/Housing';
import React, { Component } from 'react';

export default class App extends Component {

	//App serves as a router - using React Router

	render() {  
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/housing" component={Housing} />  
						<Route component={Error} />
					</Switch>
				</BrowserRouter>
      
			</div>
		);
	}
}