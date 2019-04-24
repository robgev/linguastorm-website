import React from 'react';

import './styles.scss';

const Input = ({ className, multiline, ...props }) => multiline
	? (
		<textarea className={`atom_simple-input ${className}`} {...props} />
	)
	: (
		<input className={`atom_simple-input ${className}`} {...props} />
	);

Input.defaultProps = {
	className: '',
};

export default Input;
