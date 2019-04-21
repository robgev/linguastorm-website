import React from 'react';

import './styles.scss';

const HexagonTextLine = ({ className, ...props }) => (
	<text className={`atom_hexagon-text ${className}`} {...props} />
);

HexagonTextLine.defaultProps = {
	className: '',
};

export default HexagonTextLine;
