import React from 'react';
import {
	Text,
	FlexBox,
	Headline,
	Container,
	RoundButton,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';
import { Play } from 'components/icons';

import './styles.scss';

const OurStory = () => (
	<Container className="how-it-works_container">
		<Layout>
			<FlexBox column align>
				<Headline className="how-it-works_headline">
					<HeadlineAccent>How it </HeadlineAccent>
					<HeadlineAccent variant="bold">Works</HeadlineAccent>
				</Headline>
				<RoundButton>
					<Play color="secondary" />
				</RoundButton>
				<Text className="how-it-works_watch">Watch Video</Text>
			</FlexBox>
		</Layout>
	</Container>
);

export default OurStory;
