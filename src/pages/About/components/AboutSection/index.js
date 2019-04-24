import React from 'react';
import {
	FlexBox,
	Headline,
	ContentText,
	HeadlineAccent,
	HorizontalDivider,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import HexCluster from '../HexCluster';

import './styles.scss';

const AboutSection = ({
	divider,
	reverse,
	images,
	thinTitle,
	boldTitle,
	children,
}) => (
	<Layout className="about-section_container">
		<FlexBox
			align
			fullWidth
			justifyBetween
		>
			{ !reverse && (
				<HexCluster
					images={images}
				/>
			)}
			<FlexBox className="about-section_main" column justify fullWidth>
				<Headline className="about-section_headline">
					<HeadlineAccent>{thinTitle} </HeadlineAccent>
					<HeadlineAccent variant="bold">{boldTitle}</HeadlineAccent>
				</Headline>
				<ContentText big normal className="about-section_text">
					{children}
				</ContentText>
			</FlexBox>
			{ reverse && (
				<HexCluster
					images={images}
				/>
			)}
		</FlexBox>
		{ divider &&
			<HorizontalDivider />
		}
	</Layout>
);

export default AboutSection;
