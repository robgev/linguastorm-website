import React, { forwardRef } from 'react';
import Paper from '@material-ui/core/Paper';

import './styles.scss';

const PaperContainer = ({ className, ...props }, ref) => (
	<Paper ref={ref} className={`atom_paper-container ${className}`} {...props} />
);

const FPaperContainer = forwardRef(PaperContainer);

FPaperContainer.defaultProps = {
	className: '',
};

export default FPaperContainer;
