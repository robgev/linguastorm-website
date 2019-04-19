import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Title = ({ className, variant, ...props }) => (
	<Typography variant="h2" className={`atom_title ${className}`} {...props} />
);

Title.propTypes = {
	className: PropTypes.string,
};

Title.defaultProps = {
	className: '',
};

export default Title;
