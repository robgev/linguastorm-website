import React from 'react';
import MUICard from '@material-ui/core/Card';

import './styles.scss';

const Card = ({ className, ...props }) => (
	<MUICard className={`atom_card ${className}`} {...props} />
);

export default Card;
