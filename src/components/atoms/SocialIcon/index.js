import React from 'react';
import { FlexBox, Text } from 'components/atoms';

import './styles.scss';

const COLORS = {
	facebook: '#3A589B',
	twitter: '#598DCA',
	linkedin: '#007AB9',
	instagram: '#D6492F',
	youtube: '#FF0000',
	pinterest: '#D73633',
};

const SocialIcon = ({ service }) => (
	<FlexBox
		justify
		align
		className="molecule_social-icon"
		style={{ backgroundColor: COLORS[service] }}
	>
		<Text className={`socicon-${service}`} />
	</FlexBox>
);

export default SocialIcon;
