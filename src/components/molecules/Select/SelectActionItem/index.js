import React from 'react';
import {
	FlexBox,
	TextBlock,
} from 'components/atoms';
import { ArrowUp, ArrowDown } from 'components/icons';

import './styles.scss';

const SelectActionItem = ({ value, ...props}) => {
	return (
		<FlexBox
			column
			className={`molecule_select ${open ? 'open' : ''}`}
			{...props}
		>
			{value !== 0 && (
				<TextBlock className="molecule_select-label">I want to learn</TextBlock>
			)}
			<FlexBox
				align
				fullWidth
				justifyBetween
			>
				<TextBlock className="molecule_select-text">
					{value === 0 ? 'I want to learn' : value}
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
