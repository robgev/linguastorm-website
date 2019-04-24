import React from 'react';
import { TextBlock } from 'components/atoms';

import './styles.scss';

const SectionHeader = ({ className, ...props }) => (
	<TextBlock
		gutterBottom
		variant="h5"
		className={`footer_section-header ${className}`}
		{...props}
	/>
);

export default SectionHeader;
