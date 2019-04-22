import React from 'react';
import {
	Image,
	FlexBox,
	Container,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const sponsors = [
	'/images/forbes.png',
	'/images/bloomberg.png',
	'/images/inc.png',
	'/images/tnw.png',
];

const OurStory = () => (
	<Container
		className="sponsors_container"
	>
		<Layout>
			<FlexBox
				align
				justifyBetween
			>
				{sponsors.map(s => (
					<Image key={s} src={s} alt={s} />
				))}
			</FlexBox>
		</Layout>
	</Container>
);

export default OurStory;
