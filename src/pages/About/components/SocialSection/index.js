import React from 'react';
import {
	FlexBox,
	Headline,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import SocialImage from './SocialImage';

import './styles.scss';

const photosData = [
	{
		src: '/images/social1.png',
		likes: 10,
	},
	{
		src: '/images/social2.png',
		likes: 11,
	},
	{
		src: '/images/social3.png',
		likes: 12,
	},
	{
		src: '/images/social4.png',
		likes: 13,
	},
	{
		src: '/images/social5.png',
		likes: 14,
	},
];

const SocialSection = () => (
	<Layout className="photos-section_container">
		<FlexBox justify fullWidth className="photos-section_headline-container">
			<Headline>
				<HeadlineAccent>This Is Where </HeadlineAccent>
				<HeadlineAccent variant="bold">The Magic Happens</HeadlineAccent>
			</Headline>
		</FlexBox>
		<FlexBox fullWidth>
			{photosData.map(p =>
				<SocialImage key={p.src} {...p} />
			)}
		</FlexBox>
	</Layout>
);

export default SocialSection;
