import React from 'react';
import { Link } from 'components/atoms';

import './styles.scss';

const SectionLink = ({ className, ...props }) => (
	<Link
		className={`footer_section-link ${className}`}
		{...props}
	/>
);

export default SectionLink;
