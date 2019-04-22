import React from 'react';
import { FlexBox, Container } from 'components/atoms';

import './styles.scss';

const Point = ({ className, color }) => (
	<FlexBox align justify className={`point_container ${className}`}>
		<Container className={`point_outer-circle ${color === 'secondary' ? 'secondary' : '' }`} />
		<Container className="point_inner-circle" />
	</FlexBox>
);

Point.defaultProps = {
	className: ''
};

export default Point;
