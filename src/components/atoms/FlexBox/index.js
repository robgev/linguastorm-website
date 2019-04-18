import React, { forwardRef } from 'react';
import Container from '../Container';

import './styles.scss';

const FlexBox = ({
	justify = false,
	justifyBetween = false,
	justifyEnd = false,
	justifyAround = false,
	align = false,
	alignEnd = false,
	column = false,
	className = '',
	noShrink = false,
	fullWidth = false,
	fullHeight = false,
	...props
}, ref) => {
	const columnCN = column ? 'column' : '';
	const justifyCN = justify ? 'justify-center' : '';
	const alignCN = align ? 'align-center' : '';
	const justifyBetweenCN = justifyBetween ? 'justify-between' : '';
	const justifyEndCN = justifyEnd ? 'justify-end' : '';
	const justifyAroundCN = justifyAround ? 'justify-around' : '';
	const alignEndCN = alignEnd ? 'align-end' : '';
	const fullWidthCN = fullWidth ? 'full-width' : '';
	const fullHeightCN = fullHeight ? 'full-height' : '';
	const noShrinkCN = noShrink ? 'no-shrink' : '';
	const fullCN = `atom_flexbox ${fullWidthCN} ${fullHeightCN} ${columnCN} ${justifyCN} ${alignCN} ${justifyBetweenCN} ${justifyEndCN} ${justifyAroundCN} ${alignEndCN} ${noShrinkCN} ${className}`;

	return (
		<Container
			ref={ref}
			className={fullCN}
			{...props}
		/>
	);
};

export default forwardRef(FlexBox);
