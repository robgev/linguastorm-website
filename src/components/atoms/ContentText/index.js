import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

const ContentText = ({ className, big, ...props }) => (
	<Typography
		variant={big ? 'body1' : 'body2'}
		className={`atom_content-text ${className}`}
		{...props}
	/>
);

ContentText.propTypes = {
	big: PropTypes.bool,
	className: PropTypes.string,
	variant: PropTypes.string,
};

ContentText.defaultProps = {
	className: '',
};

export default ContentText;

