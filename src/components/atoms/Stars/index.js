import React from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({
	size,
	rating,
	margin,
}) => (
	<StarRatings
		rating={rating}
		starDimension={size}
		starSpacing={margin}
		starRatedColor="#F6C937"
	/>
);

Stars.defaultProps = {
	size: 40,
	rating: 0,
	margin: 15,
};

export default Stars;
