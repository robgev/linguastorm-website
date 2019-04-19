import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/atoms';

import './styles.scss'

const HeadlineAccent = ({ variant, className, ...props }) => (
	<Text className={`atom-headline_accent ${variant} ${className}`} {...props} />
);

HeadlineAccent.propTypes = {
	variant: PropTypes.oneOf([ 'light', 'bold' ]),
	className: PropTypes.string,
};

HeadlineAccent.defaultProps = {
	variant: 'light',
	className: '',
};

export default HeadlineAccent;
