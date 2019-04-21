import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const TextBlock = ({ className, variant, ...props }) => (
	<Typography variant={variant} className={`atom_text-block ${className}`} {...props} />
);

TextBlock.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.string,
};

TextBlock.defaultProps = {
	className: '',
	variant: 'body2',
};

export default TextBlock;
