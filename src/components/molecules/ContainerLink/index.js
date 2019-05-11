import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'components/atoms';

import './styles.scss';

const ContainerLink = ({ to, className, external, ...props }) => external
	? (
		// eslint-disable-next-line
		<a
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			className={`molecule_container-link ${className}`}
			{...props} />
	)
	: (
		<Link to={to} className={`molecule_container-link ${className}`} {...props} />
	);

ContainerLink.propTypes = {
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
	external: PropTypes.bool,
};

ContainerLink.defaultProps = {
	className: '',
	external: false,
};

export default ContainerLink;
