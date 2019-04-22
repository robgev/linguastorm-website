import React from 'react';
import {
	MenuItem,
	FlexBox,
} from 'components/atoms';
import { LanguageChip, LanguageLabel } from 'components/molecules';

import './styles.scss';

const LanguageMenuItem = ({ language, ...props }) => (
	<MenuItem {...props}>
		<FlexBox
			align
			fullWidth
			justifyBetween
			className="molecule-language-menu_menu-item-container"
		>
			<LanguageLabel
				language={language}
				className="molecule-language-menu_text"
			/>
			<LanguageChip language={language} />
		</FlexBox>
	</MenuItem>
);

export default LanguageMenuItem;
