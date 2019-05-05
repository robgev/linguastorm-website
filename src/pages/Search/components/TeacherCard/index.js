import React, { useState } from 'react';
import {
	FlexBox,
	Hexagon,
	Container,
	RoundButton,
	PaperContainer,
} from 'components/atoms';
import { Play } from 'components/icons';
import {
	TeacherTabs,
	TeacherInfo,
	TeacherStory,
	TeacherCourseInfo,
	TeacherReviews,
} from '../';
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
					{value === 1 && (
						<TeacherStory
							story={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.\n\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.\n\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem.`}
						/>
					)}
					{value === 2 && (
						<TeacherCourseInfo
							courses={[
								{
									id: 1,
									title: 'Speaking/Presentation',
									description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
								},
								{
									id: 2,
									title: 'General Language',
									description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
								}
							]}
						/>
					)}
					{value === 3 && (
						<TeacherReviews
							reviews={[
								{
									id: 1,
									review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
									src: '/images/review.png',
									lessons: 13,
									language: 'us',
									userName: 'Sarah Johnson',
								},
								{
									id: 2,
									review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis',
									src: '/images/review.png',
									lessons: 13,
									language: 'us',
									userName: 'Sarah Johnson',
								}
							]}
						/>
					)}
					{value === 4 && <FlexBox>Item Five</FlexBox>}
				</FlexBox>
			</FlexBox>
		</PaperContainer>
	);
};

export default TeacherCard;
