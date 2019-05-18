import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';

const PopupActions = ({ className, ...props }) => (
	<DialogActions className={className} {...props} />
);

export default PopupActions;
