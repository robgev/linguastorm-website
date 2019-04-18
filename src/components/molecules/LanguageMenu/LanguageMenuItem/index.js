import React from 'react';
import { MenuItem, FlexBox, Image, Text } from 'components/atoms';
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
			<Image
				alt="Flags"
				src={`/images/flags/${language}.png`}
				className="molecule-language-menu_language-icon"
			/>
		</FlexBox>
	</MenuItem>
);

export default LanguageMenuItem;
