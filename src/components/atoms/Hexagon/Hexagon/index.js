import React from 'react';
import { Container } from 'components/atoms';

import './styles.scss';

const Hexagon = ({
	src,
	text,
	shadow,
	children,
	hexColor,
	className,
	borderColor,
}) => (
	<Container className={`atom_hexagon ${className}`}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="100%"
			height="100%"
			viewBox="87 87 66 74"
			xmlSpace="preserve"
			className={`atom_hexagon-svg ${shadow ? 'shadow' : ''}`}
		>
			<defs>
				<pattern
					id={src}
					height="100%"
					width="100%"
					patternContentUnits="objectBoundingBox"
					viewBox="0 0 1 1"
					preserveAspectRatio="xMidYMid slice"
				>
					<image
						height="1"
						width="1"
						preserveAspectRatio="xMidYMid slice"
						xlinkHref={src}
					/>
				</pattern>
			</defs>

			<path
				fill={text ? hexColor : `url(#${src})`}
				d="M122.6,159.883c-1.431,0.822-3.77,0.822-5.201,0l-27.298-15.701c-1.431-0.822-2.601-2.84-2.601-4.483v-31.397 c0-1.647,1.17-3.662,2.601-4.484l27.298-15.7c1.431-0.823,3.77-0.823,5.201,0l27.301,15.7c1.431,0.822,2.6,2.837,2.6,4.484v31.397 c0,1.644-1.169,3.661-2.6,4.483L122.6,159.883z"
			/>
			{children}
			{borderColor && (
				<path
					fill="transparent"
					strokeWidth="1.5"
					stroke={borderColor}
					d="M122.6,159.883c-1.431,0.822-3.77,0.822-5.201,0l-27.298-15.701c-1.431-0.822-2.601-2.84-2.601-4.483v-31.397 c0-1.647,1.17-3.662,2.601-4.484l27.298-15.7c1.431-0.823,3.77-0.823,5.201,0l27.301,15.7c1.431,0.822,2.6,2.837,2.6,4.484v31.397 c0,1.644-1.169,3.661-2.6,4.483L122.6,159.883z"
				/>
			)}
		</svg>
	</Container>
);

Hexagon.defaultProps = {
	text: false,
	hexColor: '#FFF',
	src: '',
	borderColor: '',
	shadow: false,
	className: '',
};

export default Hexagon;
