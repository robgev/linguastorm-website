import React from 'react';
import { FlexBox, Image, Text } from 'components/atoms';
import { Down } from 'components/icons';
import LANGUAGES from 'constants/Languages';

import './styles.scss';

const LanguageMenuItem = ({ onClick, currentLanguage = 'us' }) => (
	<FlexBox
		align
		justifyBetween
		onClick={onClick}
		className="topbar-lmi_container"
	>
		<Image
			alt="Flags"
			className="topbar-lmi_image"
			src={`/images/flags/${currentLanguage}.png`}
		/>
		<Text>{LANGUAGES[currentLanguage]}</Text>
		<Down />
	</FlexBox>
);

export default LanguageMenuItem;
