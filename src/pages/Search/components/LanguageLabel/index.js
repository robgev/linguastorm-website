import React from 'react';
import {
	TextBlock,
	Container,
} from 'components/atoms';

import './styles.scss';

const LanguageLabel = ({ multiple, language }) =>  (
	<Container className="search_language-label-container">
		<TextBlock className="search_language-label-title">
			{ multiple
				? 'Also speaks'
				: 'Teaches'
			}
		</TextBlock>
		<TextBlock  className="search_language-label-container">
			{ multiple
				? language.map((l, i) => `${l.englishName}${i !== l.length - 1 ? ','  : ''}`)
				: language.englishName
			}
		</TextBlock>
	</Container>
);

export default LanguageLabel;
