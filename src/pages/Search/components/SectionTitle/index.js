import React from 'react';
import {
	TextBlock
} from 'components/atoms';

import './styles.scss';

const SectionTitle = (props) =>  (
	<TextBlock className="search_section-title" {...props} />
);

export default SectionTitle;
