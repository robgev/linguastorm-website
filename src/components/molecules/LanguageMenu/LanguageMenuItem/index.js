import React from 'react';
import {
	LanguageChip,
	MenuItem,
	FlexBox,
	Text
} from 'components/atoms';
import LANGUAGES from 'constants/Languages';

import './styles.scss';

const LanguageMenuItem = ({ language, ...props }) => (
	<MenuItem {...props}>
		<FlexBox
			align
			fullWidth
			justifyBetween
			className="molecule-language-menu_menu-item-container"
		>
			<Text
				className="molecule-language-menu_text"
			>{LANGUAGES[language]}</Text>
			<LanguageChip language={language} />
		</FlexBox>
	</MenuItem>
);

export default LanguageMenuItem;
