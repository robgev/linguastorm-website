import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Headline = ({ className, variant, ...props }) => (
	<Typography variant="h1" className={`atom_headline ${className}`} {...props} />
);

Headline.propTypes = {
	className: PropTypes.string,
};

Headline.defaultProps = {
	className: '',
};

export default Headline;
