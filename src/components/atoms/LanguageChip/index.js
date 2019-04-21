import React from 'react';
import { Image } from 'components/atoms';

import './styles.scss';

const LanguageChip = ({ language, className, ...props }) => (
			<Image
				{...props}
				alt="Flags"
				src={`/images/flags/${language}.png`}
				className={`molecule_language-chip ${className}`}
			/>
);

LanguageChip.defaultProps = {
	language: 'us',
	className: '',
}

export default LanguageChip;
