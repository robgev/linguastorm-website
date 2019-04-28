import React from 'react';
import {
	Text,
	Link,
	Button,
	FlexBox,
	Headline,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import Hexes from './Hexes';

import './styles.scss';

const OurStory = () => (
	<Layout>
		<FlexBox align justifyBetween fullWidth>
			<Hexes />
			<FlexBox className="our-story_main" column justify fullWidth>
				<Headline className="our-story_headline">
					<HeadlineAccent>Our </HeadlineAccent>
					<HeadlineAccent variant="bold">Story</HeadlineAccent>
				</Headline>
				<ContentText className="our-story_text">
					We were two university graduate friends teaching Spanish to spread our love for
					the language. Soon we realised that knowing a widely spoken language opens
					doors for countless opportunities and knowledge sources. So,
				</ContentText>
				<ContentText big color="secondary" className="our-story_quote">
					<Text className="our-story_quote-sign left">&ldquo;</Text>
					<br />
					we created an online platform where users can get access to top 10%
					language teachers from all over the world via video call. We strive to
					provide very high quality & fast learning experience.
					<br />
					<Text className="our-story_quote-sign right">&rdquo;</Text>
				</ContentText>
				<Link to="/about">
					<Button color="secondary">Learn More</Button>
				</Link>
			</FlexBox>
		</FlexBox>
	</Layout>
);

export default OurStory;
