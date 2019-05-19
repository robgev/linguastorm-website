import React from 'react';
import {
	Button,
	FlexBox,
	Headline,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';
import {
	Layout,
	ContainerLink,
} from 'components/molecules';

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
				LinguaStorm provides you an opportunity to choose the most appropriate course
				for your personal, business or academic purposes. Our teachers use the methodology
				which we developed by  elaborating on the best existing practices. It takes into account the
				actual language level of the student and the target level, hence customizing the user experience.
				</ContentText>
				{/* <ContentText big color="secondary" className="our-story_quote">
					<Text className="our-story_quote-sign left">&ldquo;</Text>
					<br />
					we created an online platform where users can get access to top 10%
					language teachers from all over the world via video call. We strive to
					provide very high quality & fast learning experience.
					<br />
					<Text className="our-story_quote-sign right">&rdquo;</Text>
				</ContentText> */}
				<ContainerLink to="/about">
					<Button color="secondary">Learn More</Button>
				</ContainerLink>
			</FlexBox>
		</FlexBox>
	</Layout>
);

export default OurStory;
