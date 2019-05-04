import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components/atoms';

import './styles.scss';

const PriceTag = ({ price }) => (
	<Text className="molecule_price-tag">USD {price}</Text>
);

PriceTag.defaultProps = {
	price: 0,
};

PriceTag.propTypes = {
	price: PropTypes.number.isRequired,
};

export default PriceTag;
