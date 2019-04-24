import React from 'react';
import {
	FlexBox,
	Image,
	TextBlock,
	SocialIcon,
} from 'components/atoms';

import './styles.scss';

const FollowUs = () => (
	<FlexBox className="follow-us_container" justifyBetween align>
		<Image className="follow-us_image" src="/images/payment.png" />
		<FlexBox align>
			<TextBlock className="follow-us_banner" variant="h6">Follow Us</TextBlock>
			<SocialIcon service="facebook" />
			<SocialIcon service="twitter" />
			<SocialIcon service="linkedin" />
			<SocialIcon service="googleplus" />
			<SocialIcon service="youtube" />
			<SocialIcon service="linkedin" />
		</FlexBox>
	</FlexBox>
);

export default FollowUs;
