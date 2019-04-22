import React from 'react';

const HexagonImage = ({ className, src, ...props }) => (
	<image
		xlinkHref={src}
		className={`atom_hexagon-image ${className}`}
		{...props}
	/>
);

HexagonImage.defaultProps = {
	className: '',
};

export default HexagonImage;
