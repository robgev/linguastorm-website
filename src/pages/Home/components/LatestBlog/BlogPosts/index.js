import React from 'react';
import {
	FlexBox,
} from 'components/atoms';
import {
	BlogPost
} from 'components/molecules';

import './styles.scss';

const FakePosts = [
	{
		id: 1,
		date: '22 APR 2019',
		title: 'Lorem ipsum dolor sit amet consectetur',
		shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat.',
		imageUrl: '/images/blog.png'
	},
	{
		id: 2,
		date: '22 APR 2019',
		title: 'Lorem ipsum dolor sit amet consectetur',
		shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat.',
		imageUrl: '/images/blog.png'
	},
	{
		id: 3,
		date: '22 APR 2019',
		title: 'Lorem ipsum dolor sit amet consectetur',
		shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat.',
		imageUrl: '/images/blog.png'
	},

];

const BlogPosts = () => (
	<FlexBox justifyBetween align className="teachers-list_front">
		{ FakePosts.map(post => (
			<BlogPost
				post={post}
				key={post.id}
			/>
		))}
	</FlexBox>
);

export default BlogPosts;
