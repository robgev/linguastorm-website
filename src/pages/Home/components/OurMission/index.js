import React from 'react';
import {
	FlexBox,
	Hexagon,
	Container,
	HexagonTextLine,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const OurMission = () => (
	<Container className="our-mission_container">
		<Layout>
			<FlexBox justify align>
				<Hexagon
					text
					className="our-mission_hex"
				>
					<HexagonTextLine
						x="16.3em"
						y={112}
						className="our-mission_headline thin"
					>
						Our
					</HexagonTextLine>
					<HexagonTextLine
						x="18.3em"
						y={112}
						className="our-mission_headline bold"
					>
						Mission
					</HexagonTextLine>
					<HexagonTextLine
						x="32.1em"
						y={120}
						className="our-mission_text"
					>
						The internet is becoming
					</HexagonTextLine>
					<HexagonTextLine
						x="30.9em"
						y={125}
						className="our-mission_text"
					>
						the town square for the global
					</HexagonTextLine>
					<HexagonTextLine
						x="31.6em"
						y={130}
						className="our-mission_text"
					>
						village of tomorrow and our
					</HexagonTextLine>
					<HexagonTextLine
						x="33.4em"
						y={135}
						className="our-mission_text"
					>
						mission is to bridge
					</HexagonTextLine>
					<HexagonTextLine
						x="34em"
						y={140}
						className="our-mission_text"
					>
						the future divide.
					</HexagonTextLine>
				</Hexagon>
			</FlexBox>
		</Layout>
	</Container>
);

export default OurMission;
