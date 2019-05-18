import React from 'react';
import Dialog from '@material-ui/core/Dialog';

const Popup = ({ className = '', ...props }) => (
	<Dialog classes={{ paperScrollPaper: className }} {...props} />
);

export default Popup;
