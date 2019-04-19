import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
	typography: {
		useNextVariants: true,
		fontFamily: [
			'Gotham',
			'Roboto',
			'sans-serif',
		],
		h1: {
			fontSize: '3rem'
		}
  },
});
