import React, { forwardRef } from 'react';
import MUIMenuItem from '@material-ui/core/MenuItem';

const MenuItem =(props, ref) => (
	<MUIMenuItem className="atom_menu-item" ref={ref} {...props} />
);

export default forwardRef(MenuItem);
