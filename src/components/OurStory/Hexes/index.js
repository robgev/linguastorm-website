import React from 'react';
import { Container, Hexagon, HexagonTextLine } from 'components/atoms';

import './styles.scss';

const Hexes = () => (
	<Container className="our-story_hexes-container">
		<Hexagon className="our-story_image-hex image-hex1" src="/images/story1.png"/>
		<Hexagon
			text
			hexColor="#096F8B"
			className="our-story_text-hex text-hex1"
		>
			<HexagonTextLine x="94" y="122">10% Language</HexagonTextLine>
			<HexagonTextLine x="102" y="130">Teachers</HexagonTextLine>
		</Hexagon>
		<Hexagon className="our-story_image-hex image-hex2" src="/images/story2.png"/>
		<Hexagon className="our-story_image-hex image-hex3" src="/images/story3.png"/>
		<Hexagon
			text
			shadow
			className="our-story_text-hex text-hex2"
		>
			<HexagonTextLine x="103" y="122">Teaching</HexagonTextLine>
			<HexagonTextLine x="94" y="130">Methodology</HexagonTextLine>
		</Hexagon>
		<Hexagon
			text
			borderColor="#096F8B"
			className="our-story_text-hex text-hex3"
		>
			<HexagonTextLine x="98" y="122">Customized</HexagonTextLine>
			<HexagonTextLine x="103" y="130">Courses</HexagonTextLine>
		</Hexagon>
	</Container>
);

export default Hexes;
