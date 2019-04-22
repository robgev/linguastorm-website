import React from 'react';
import MUICardMedia from '@material-ui/core/CardMedia';

import './styles.scss';

const CardMedia = ({ className, ...props }) => (
	<MUICardMedia className={`atom_card-media ${className}`} {...props} />
);

export default CardMedia;
