import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Search from 'pages/Search';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/search" component={Search} />
			</Switch>
		);
	}
}

export default App;
