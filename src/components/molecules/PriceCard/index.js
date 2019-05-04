import React from 'react';
import { Button, FlexBox, TextBlock } from 'components/atoms';
import { PriceTag } from 'components/molecules';

import './styles.scss';

const PriceCard = ({ price, demoPrice, individual }) => (
	<FlexBox
		align
		fullWidth
		justifyBetween
		className={`molecule_price-card_container ${individual ? 'molecule_price-card_gutter-bottom' : ''}`}
	>
		<FlexBox justifyBetween align className="molecule_price-card">
			<TextBlock className="molecule_price-card_text">
				{ individual ? '1-on-1 hours ' : 'Group hours '}
				<PriceTag price={price} />
			</TextBlock>
			<Button>
				Buy
			</Button>
		</FlexBox>
		<Button color="secondary">
			Try for USD {demoPrice}
		</Button>
	</FlexBox>
);

PriceCard.defaultProps = {
	price: 0,
	demoPrice: 0,
	individual: false,
};

export default PriceCard;
