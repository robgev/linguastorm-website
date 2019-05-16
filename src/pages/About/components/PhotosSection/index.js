import React from 'react';
import {
	Image,
	FlexBox,
	Headline,
	Container,
	ContentText,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const PhotosSection = () => (
	<Layout className="photos-section_container">
		<FlexBox justify fullWidth className="photos-section_headline-container">
			<Headline>
				<HeadlineAccent>This Is Where </HeadlineAccent>
				<HeadlineAccent variant="bold">The Magic Happens</HeadlineAccent>
			</Headline>
		</FlexBox>
		<FlexBox fullWidth>
			<Image
				className="photos-section_photo"
				src="/images/photo1.png"
			/>
			<FlexBox className="photos-section_photo-grid">
				<Image
					className="photos-section_photo"
					src="/images/photo2.png"
				/>
				<Image
					className="photos-section_photo"
					src="/images/photo3.png"
				/>
				<Image
					className="photos-section_photo"
					src="/images/photo4.png"
				/>
				<Image
					className="photos-section_photo"
					src="/images/photo5.png"
				/>
			</FlexBox>
		</FlexBox>
		<FlexBox
			align
			fullWidth
			justifyBetween
			className="photos-section_text"
		>
			<Container className="photos-section_text-container">
				<ContentText big normal>
					Knowing a foreign language other than your native language has evolved
					to be extremely beneficial. Whether viewed from the financial or social aspect,
					being able to communicate in a foreign language helps to make ‘real’ connection
					with people and provides a better understanding of your language.
				</ContentText>
			</Container>
			<Container className="photos-section_text-container">
				<ContentText big normal>
					Whether you learn a language for a specific reason or out of interest,
					learning a foreign language will lead to long-term success. It will open up
					new avenues before you. The more language you know, the better you can express yourself.
				</ContentText>
			</Container>
		</FlexBox>
	</Layout>
);

export default PhotosSection;
