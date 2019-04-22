import React from 'react';
import {
	FlexBox,
	Hexagon,
	HexagonImage,
	HexagonTextLine,
} from 'components/atoms';
import Bulb from 'assets/images/bulb.png';

import './styles.scss';

const TopHexes = () => (
	<FlexBox justify align className="why-us_hexes">
		<Hexagon
			text
			borderWidth={0.25}
			borderColor="#096F8B"
			className="why-us_back-hex"
			hexColor="rgba(255, 255, 255, 0.44)"
		/>
		<Hexagon
			text
			hexColor="#096F8B"
			className="why-us_front-hex"
		>
			<HexagonImage x={110} y={110} width={20} height={20} src={Bulb} />
			<HexagonTextLine x={101} y={140}>Solutions</HexagonTextLine>
		</Hexagon>
	</FlexBox>
);

export default TopHexes;
