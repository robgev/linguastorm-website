import React from 'react';
import { Link } from 'components/atoms';

import './styles.scss';

const PrimaryLink = ({ className, ...props }) => (
	<Link
		className={`molecule_primary-link ${className}`}
		{...props}
	/>
);

export default PrimaryLink;
