import React from 'react';
import {
	FlexBox,
	Headline,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';
import BlogPosts from './BlogPosts';

import './styles.scss';

const LatestBlog = () => (
	<Layout className="latest-blog_container">
		<FlexBox justify fullWidth className="latest-blog_headline-container">
			<Headline>
				<HeadlineAccent>Latest </HeadlineAccent>
				<HeadlineAccent variant="bold">Blog</HeadlineAccent>
			</Headline>
		</FlexBox>
		<BlogPosts/>
	</Layout>
);

export default LatestBlog;
