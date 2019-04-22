import React from 'react';
import { FlexBox, TextBlock } from 'components/atoms';
import { LanguageChip } from 'components/molecules';

import './styles.scss';

const LanguageItem = ({ label, value, onClick, className }) => (
	<FlexBox
		align
		onClick={onClick}
		className={`molecule_language-menu_language-item-container ${className}`}
	>
		<TextBlock
			variant="overline"
			className="molecule_language-menu_label"
		>
			{label}
		</TextBlock>
		<LanguageChip language={value} />
	</FlexBox>
);

LanguageItem.defaultProps = {
	className: '',
};

export default LanguageItem;
