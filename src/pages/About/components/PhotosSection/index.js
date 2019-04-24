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
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accu santium dolo remque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae
					vitae dicta sunt explicabo.
				</ContentText>
			</Container>
			<Container className="photos-section_text-container">
				<ContentText big normal>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accu santium dolo remque laudantium, totam rem aperiam, eaque ipsa
					quae ab illo inventore veritatis et quasi architecto beatae
					vitae dicta sunt explicabo.
				</ContentText>
			</Container>
		</FlexBox>
	</Layout>
);

export default PhotosSection;
