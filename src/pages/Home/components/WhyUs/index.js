import React from 'react';
import {
	Text,
	FlexBox,
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import Arrow from './Arrow';
import Point from './Point';
import PointsHexes from './PointsHexes';
import TopHexes from './TopHexes';

import './styles.scss';

const WhyUs = () => (
	<FlexBox className="why-us_container">
		<Layout>
			<FlexBox column align>
				<TopHexes />
				<Arrow />
				<Headline className="why-us_headline">
					<HeadlineAccent>Why </HeadlineAccent>
					<HeadlineAccent variant="bold">Choose Us?</HeadlineAccent>
				</Headline>
				<FlexBox column align className="why-us_points">
					<PointsHexes />
					<FlexBox fullWidth>
						<Container className="why-us_point-lines left">
							<Text className="why-us_point-number number1">1</Text>
							<Text className="why-us_point-number number2">2</Text>
						</Container>
						<Container className="why-us_point-lines right">
							<Text className="why-us_point-number number3">3</Text>
						</Container>
					</FlexBox>
					<FlexBox fullWidth justifyBetween>
						<Point className="why-us_point point1" color="secondary" />
						<Point className="why-us_point point2" color="secondary" />
						<Point className="why-us_point point3" color="secondary" />
					</FlexBox>
					<FlexBox fullWidth justifyBetween className="why-us_content">
						<ContentText className="why-us_content-text text1">
							Qualified Teachers
						</ContentText>
						<ContentText className="why-us_content-text text2">
							Proven Methodology
						</ContentText>
						<ContentText className="why-us_content-text text3">
							Customized Courses
						</ContentText>
					</FlexBox>
				</FlexBox>
			</FlexBox>
		</Layout>
	</FlexBox>
);

export default WhyUs;
