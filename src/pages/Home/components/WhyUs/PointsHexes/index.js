import React from 'react';
import {
	FlexBox,
	Hexagon,
	HexagonTextLine,
} from 'components/atoms';

import './styles.scss';

const PointsHexes = () => (
	<FlexBox justify align className="points_hexes">
		<Hexagon
			text
			borderWidth={1}
			borderColor="#096F8B"
			className="points_back-hex"
			hexColor="transparent"
		/>
		<Hexagon
			text
			hexColor="#096F8B"
			className="points_front-hex"
		/>
		<Hexagon
			text
			borderWidth={1}
			borderColor="#1C8FB1"
			className="points_front-hex"
			hexColor="rgba(9, 111, 139, 0.27)"
		>
			<HexagonTextLine x={92} y={140}>LS</HexagonTextLine>
		</Hexagon>
	</FlexBox>
);

export default PointsHexes;
