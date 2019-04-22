import React from 'react';
import Fab from '@material-ui/core/Fab';

import './styles.scss';

const RoundButton = ({ className, ...props }) => (
	<Fab className={`atom_round-button ${className}`} {...props} />
);

export default RoundButton;
