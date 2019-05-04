import React, { useState } from 'react';
import {
	FlexBox,
	Hexagon,
	Container,
	RoundButton,
	PaperContainer,
} from 'components/atoms';
import { Play } from 'components/icons';

import TeacherTabs from '../TeacherTabs';
import TeacherInfo from '../TeacherInfo';

import './styles.scss';

const TeacherCard = ({
	src,
}) => {
	const [ value, setValue ] = useState(0);

	const handleChange = (_, value) => {
		setValue(value);
	};

	return (
		<PaperContainer className="teacher_card_paper">
			<FlexBox align className="teacher-card_container">
				<Container className="teacher-card_hexagon-container">
					<Hexagon
						src={src}
						className="teacher-card_hexagon"
					/>
					<RoundButton className="teacher-card_play-button">
						<Play color="secondary" />
					</RoundButton>
				</Container>
				<FlexBox column fullWidth className="teacher-card_info-container">
					<TeacherTabs
						value={value}
						onChange={handleChange}
						className="teacher-card_tabs-container"
					/>
					{value === 0 && (
						<TeacherInfo
							name="Guillame"
							language="us"
							rating={5}
							isNative={true}
							learnLanguage="us"
							otherLanguages={[ 'fr', 'de' ]}
							individualPrice={15.99}
							groupPrice={15.99}
							demoPrice={0.99}
						/>
					)}
					{value === 1 && <FlexBox>Item Two</FlexBox>}
					{value === 2 && <FlexBox>Item Three</FlexBox>}
					{value === 3 && <FlexBox>Item Four</FlexBox>}
					{value === 4 && <FlexBox>Item Five</FlexBox>}
				</FlexBox>
			</FlexBox>
		</PaperContainer>
	);
};

export default TeacherCard;
