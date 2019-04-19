import React from 'react';
import {
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';

import './styles.scss';

const HeaderText = () => (
	<Container className="molecule_header-text">
		<Headline className="molecule_header-headline">
			<HeadlineAccent>Learn From Top Ten</HeadlineAccent>
			<br />
			<HeadlineAccent variant="bold">Talented Teachers</HeadlineAccent>
		</Headline>
		<ContentText className="molecule_header-body">
			Highly customized language courses with unique <br />
			methodology Delivered by the best teachers from all <br />
			over the world
		</ContentText>
	</Container>
);

export default HeaderText;


