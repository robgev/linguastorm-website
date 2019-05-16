import React from 'react';
import {
	FlexBox,
	Image,
	TextBlock,
	SocialIcon,
} from 'components/atoms';
import { ContainerLink } from 'components/molecules';

import './styles.scss';

const FollowUs = () => (
	<FlexBox className="follow-us_container" justifyBetween align>
		<Image className="follow-us_image" src="/images/payment.png" />
		<FlexBox align>
			<TextBlock className="follow-us_banner" variant="h6">Follow Us</TextBlock>
			<ContainerLink external to="https://www.facebook.com/LinguaStorm/">
				<SocialIcon service="facebook" />
			</ContainerLink>
			<ContainerLink external to="https://www.pinterest.com/linguastormonline/">
				<SocialIcon service="pinterest" />
			</ContainerLink>
			<ContainerLink external to="https://www.linkedin.com/company/linguastorm/">
				<SocialIcon service="linkedin" />
			</ContainerLink>
			<ContainerLink external to="https://www.youtube.com/channel/UCpJ63i_zeuS9iAtD1o9A1tQ">
				<SocialIcon service="youtube" />
			</ContainerLink>
			<ContainerLink external to="https://www.instagram.com/linguastormonline/">
				<SocialIcon service="instagram" />
			</ContainerLink>
		</FlexBox>
	</FlexBox>
);

export default FollowUs;
