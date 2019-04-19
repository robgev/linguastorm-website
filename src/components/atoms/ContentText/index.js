import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const ContentText = ({ className, variant, ...props }) => (
	<Typography variant="body1" className={`atom_content-text ${className}`} {...props} />
);

ContentText.propTypes = {
	className: PropTypes.string,
};

ContentText.defaultProps = {
	className: '',
};

export default ContentText;

