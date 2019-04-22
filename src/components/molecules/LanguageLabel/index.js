import React from 'react';
import { ContentText } from 'components/atoms';
import LANGUAGES from 'constants/Languages';

import './styles.scss';

const LanguageLabel = ({ language, className, ...props }) => (
	<ContentText
		big
		className={`molecule_language-label ${className}`}
		{...props}
	>
		{LANGUAGES[language]}
	</ContentText>
);

LanguageLabel.defaultProps = {
	language: 'us',
	className: '',
};

export default LanguageLabel;
