import React from 'react';
import {
	Text,
	Image,
	FlexBox,
	Container,
} from 'components/atoms';

import './styles.scss';

const SocialImage = ({ src, likes }) => (
	<Container className="social-image_container">
		<Image className="social-image_image" src={src} alt="photo" />
		<FlexBox column align justify className="social-image_likes">
			<Text className="social-image_icon socicon-instagram" />
			{likes} {`Like${likes === 1 ? '' : 's'}`}
		</FlexBox>
	</Container>
);

export default SocialImage;
