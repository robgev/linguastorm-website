import React from 'react';
import {
	TextBlock
} from 'components/atoms';

import './styles.scss';

const SectionSubtitle = (props) =>  (
	<TextBlock variant="body1" className="search_section-subtitle" {...props} />
);

export default SectionSubtitle;
