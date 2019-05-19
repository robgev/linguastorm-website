import React from 'react';
import {
	FlexBox,
	TextBlock,
} from 'components/atoms';
import { ArrowUp, ArrowDown } from 'components/icons';

import './styles.scss';

const SelectActionItem = ({
	value,
	label,
	open,
	className,
	nonEmpty,
	...props
}) => {
	const isEmpty = value === '' || value === 0;
	return (
		<FlexBox
			column
			className={`molecule_select ${className} ${open ? 'open' : ''}`}
			{...props}
		>
			{(!isEmpty && !nonEmpty) && (
				<TextBlock className="molecule_select-label">{label}</TextBlock>
			)}
			<FlexBox
				align
				fullWidth
				justifyBetween
			>
				<TextBlock className="molecule_select-text" title={value}>
					{isEmpty ? label : value}
				</TextBlock>
				{open
					? (
						<ArrowUp className="molecule_select-icon" />
					)
					: (
						<ArrowDown className="molecule_select-icon" />
					)
				}
			</FlexBox>
		</FlexBox>
	);
};

export default SelectActionItem;
