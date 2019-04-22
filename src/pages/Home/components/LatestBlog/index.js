import React from 'react';
import {
	FlexBox,
	Headline,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';
import BlogPosts from './BlogPosts';

import './styles.scss';

const OurTeachers = () => (
	<Layout className="our-teachers_container">
		<FlexBox justify fullWidth className="our-teachers_headline-container">
			<Headline>
				<HeadlineAccent>Latest </HeadlineAccent>
				<HeadlineAccent variant="bold">Blog</HeadlineAccent>
			</Headline>
		</FlexBox>
		<BlogPosts/>
	</Layout>
);

export default OurTeachers;
