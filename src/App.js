import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</Switch>
		);
	}
}

export default App;
