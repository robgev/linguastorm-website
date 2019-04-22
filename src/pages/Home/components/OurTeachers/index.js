import React from 'react';
import {
	FlexBox,
	Headline,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const OurTeachers = () => (
	<Layout>
		<FlexBox justify fullWidth className="our-teachers-container">
			<Headline className="our-teachers_headline">
				<HeadlineAccent>Our </HeadlineAccent>
				<HeadlineAccent variant="bold">Teachers</HeadlineAccent>
			</Headline>
		</FlexBox>
	</Layout>
);

export default OurTeachers;
