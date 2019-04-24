import React from 'react';
import {
	FlexBox,
} from 'components/atoms';

import SectionLink from '../SectionLink';
import './styles.scss';

const SectionBar = () => (
	<FlexBox className="section-bar_container" justifyBetween align>
		<SectionLink to="#" className="section-bar_link">Home</SectionLink>
		<SectionLink to="#" className="section-bar_link">Our Story</SectionLink>
		<SectionLink to="#" className="section-bar_link">How It Works</SectionLink>
		<SectionLink to="#" className="section-bar_link">Why Choose Us</SectionLink>
		<SectionLink to="#" className="section-bar_link">Our Teachers</SectionLink>
		<SectionLink to="#" className="section-bar_link">Our Reviews</SectionLink>
	</FlexBox>
);

export default SectionBar;
