import React from 'react';
import {
	TextBlock,
	Container,
} from 'components/atoms';
import LANGUAGES from 'constants/Languages';

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
				? language.map((l, i) => `${LANGUAGES[l]}${i !== l.length - 1 ? ','  : ''}`)
				: LANGUAGES[language]
			}
		</TextBlock>
	</Container>
);

export default LanguageLabel;
