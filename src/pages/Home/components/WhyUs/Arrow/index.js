import React from 'react';
import {
	FlexBox,
	Container,
} from 'components/atoms';
import { Arrow as ArrowIcon } from 'components/icons';
import Point from '../Point';

import './styles.scss';

const Arrow = () => (
	<FlexBox justify className="why-us_arrow-container">
		<Point />
		<Container className="why-us_arrow-line" />
		<ArrowIcon className="why-us_arrow" />
	</FlexBox>
);

export default Arrow;
