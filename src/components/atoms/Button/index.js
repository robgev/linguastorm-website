import React from 'react';
import MUIButton from '@material-ui/core/Button';

import './styles.scss';

const Button = ({ className, ...props }) => (
	<MUIButton className={`atom_button ${className}`} {...props} />
);

Button.defaultProps = {
	className: '',
	variant: 'contained',
	color: 'primary',
};

export default Button;
