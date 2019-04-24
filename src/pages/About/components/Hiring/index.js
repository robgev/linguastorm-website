import React from 'react';
import {
	FlexBox,
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
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
					<ContentText big normal>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
						dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
						veritatis et quasi architecto beatae vitae dicta sunt explicabo.
						<br />
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
						sed qu ia consequuntur magni dolores eos quirut perspiciatis unde omnis
						iste natus error sit voluptatem accusantium dolo
					</ContentText>
				</Container>
			</FlexBox>
		</Layout>
	</FlexBox>
);

export default Hiring;
