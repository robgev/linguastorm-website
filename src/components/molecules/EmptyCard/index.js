import React, { Fragment } from 'react';
import { Loading, PaperContainer, FlexBox, TextBlock } from 'components/atoms';

import './styles.scss';

const EmptyCard = ({
	loading,
	paper,
	message,
	className,
	...props
}) => {
	const Wrapper = paper ? PaperContainer : Fragment;
	return (
		<Wrapper>
			<FlexBox
				align
				justify
				className={`empty-card-placeholder ${className}`}
				{...props}
			>
				{loading
					? <Loading />
					: <TextBlock>{message}</TextBlock>
				}
			</FlexBox>
		</Wrapper>
	);
};

EmptyCard.defaultProps = {
	loading: false,
	paper: false,
	message: 'Nothing to show'
};

export default EmptyCard;
