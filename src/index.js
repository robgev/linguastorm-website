import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme';
import './styles/root.scss';
// import * as serviceWorker from './serviceWorker';

const Index = () => {
	const generateClassName = createGenerateClassName();
	const jss = create({
		...jssPreset(),
		// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
		insertionPoint: document.getElementById('css-insertion-point'),
	});
	return (
		<JssProvider jss={jss} generateClassName={generateClassName}>
			<MuiThemeProvider theme={theme}>
				<Router>
					<App />
				</Router>
			</MuiThemeProvider>
		</JssProvider>
	);
};

ReactDOM.render(
	<Index />,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
