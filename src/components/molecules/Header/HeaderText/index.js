import React from 'react';
import {
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';

import './styles.scss';

const HeaderText = ({
	big,
	thinTitle,
	boldTitle,
	children,
}) => (
	<Container className={`molecule_header-text ${big ? 'big' : ''}`}>
		<Headline className="molecule_header-headline">
			<HeadlineAccent>{thinTitle} </HeadlineAccent>
			{ big &&
				<br />
			}
			<HeadlineAccent variant="bold">{boldTitle}</HeadlineAccent>
		</Headline>
		<ContentText className="molecule_header-body">
			{children}
		</ContentText>
	</Container>
);

export default HeaderText;


