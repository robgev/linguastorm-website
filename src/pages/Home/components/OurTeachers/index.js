import React from 'react';
import {
	FlexBox,
	Headline,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';
import TeachersList from './TeachersList';

import './styles.scss';

const OurTeachers = () => (
	<Layout className="our-teachers_container">
		<FlexBox justify fullWidth className="our-teachers_headline-container">
			<Headline>
				<HeadlineAccent>Our </HeadlineAccent>
				<HeadlineAccent variant="bold">Teachers</HeadlineAccent>
			</Headline>
		</FlexBox>
		<TeachersList />
	</Layout>
);

export default OurTeachers;
