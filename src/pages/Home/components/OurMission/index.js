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
						x={102.3}
						y={112}
						className="our-mission_headline thin"
					>
						Our
					</HexagonTextLine>
					<HexagonTextLine
						x={115.3}
						y={112}
						className="our-mission_headline bold"
					>
						Mission
					</HexagonTextLine>
					<HexagonTextLine
						x={94.8}
						y={120}
						className="our-mission_text"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</HexagonTextLine>
					<HexagonTextLine
						x={95}
						y={123}
						className="our-mission_text"
					>
						elit, sed do eiusmod tempor incididunt ut labore et
					</HexagonTextLine>
					<HexagonTextLine
						x={94.4}
						y={126}
						className="our-mission_text"
					>
						dolore magna aliqua. Ut enim ad minim veniam, quis
					</HexagonTextLine>
					<HexagonTextLine
						x={93.8}
						y={129}
						className="our-mission_text"
					>
						nostrud exercitation ullamco laboris nisi ut aliquip ex
					</HexagonTextLine>
					<HexagonTextLine
						x={96.8}
						y={132}
						className="our-mission_text"
					>
					ea commodo consequat. Duis aute irure dolor in
					</HexagonTextLine>
					<HexagonTextLine
						x={94.8}
						y={135}
						className="our-mission_text"
					>
						reprehenderit in voluptate velit esse cillum dolore eu
					</HexagonTextLine>
					<HexagonTextLine
						x={108.8}
						y={138}
						className="our-mission_text"
					>
						fugiat nulla pariatur.
					</HexagonTextLine>
				</Hexagon>
			</FlexBox>
		</Layout>
	</Container>
);

export default OurMission;
