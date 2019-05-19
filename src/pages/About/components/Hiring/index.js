import React from 'react';
import {
	FlexBox,
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
	YouTubeVideo,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const Hiring = () => (
	<FlexBox className="hiring_container">
		<Layout>
			<FlexBox align justifyBetween fullWidth>
				<Container className="hiring_text-container">
					<Headline className="hiring_headline">
						<HeadlineAccent>What Are the </HeadlineAccent>
						<br />
						<HeadlineAccent variant="bold">People We Hire</HeadlineAccent>
					</Headline>
					<ContentText className="hiring_text" big normal>
						Our company culture was the number one priority when we began as two co-founders.
						We knew the next person we hire would inherit that culture and would propagate it as
						we grow. So, we set our culture based on integrity, trust, mutual respect, accountability,
						ownership, passion and fun and we decided that technology should also play a role. <br /><br />
						We think that teachers should spend more time preparing lessons and less time grading papers.
						Technology can help and this  was part of our motivation for starting to create this platform. <br /><br />
						Take heart. Our teachers know how to fix your education performance problem. <br /><br />
						And the good news is that we love awesome people to join us who share our values and culture!
					</ContentText>
				</Container>
				<YouTubeVideo autoplay />
			</FlexBox>
		</Layout>
	</FlexBox>
);

export default Hiring;
