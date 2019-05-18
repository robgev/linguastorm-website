import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';

const PopupContent = ({ className, ...props }) => (
	<DialogContent className={className} {...props} />
);

export default PopupContent;
