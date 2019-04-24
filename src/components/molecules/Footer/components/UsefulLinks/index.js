import React from 'react';
import {
	Button,
	FlexBox,
	Image,
	SimpleInput
} from 'components/atoms';
import Logo from 'assets/images/logo.png';

import SectionHeader from '../SectionHeader';
import SectionLink from '../SectionLink';

import './styles.scss';

const UsefulLinks = () => (
	<FlexBox className="useful-links_container" justifyBetween align>
		<Image alt="Logo" src={Logo} />
		<FlexBox justifyAround  fullWidth className="useful-links_wrapper">
			<FlexBox column>
				<SectionHeader>Other Links</SectionHeader>
				<SectionLink to="#">Privacy Policy</SectionLink>
				<SectionLink to="#">Terms and Conditions</SectionLink>
				<SectionLink to="#">Blogs</SectionLink>
			</FlexBox>
			<FlexBox column>
				<SectionHeader>Other Links</SectionHeader>
				<SectionLink to="#">Teachers Contract</SectionLink>
				<SectionLink to="#">User Contract</SectionLink>
				<SectionLink to="#">FAQ</SectionLink>
			</FlexBox>
			<FlexBox column>
				<SectionHeader>Subscribe Newsletter</SectionHeader>
				<FlexBox className="useful-links_newsletter">
					<SimpleInput
						type="email"
						placeholder="Email"
						className="useful-links_input"
					/>
					<Button className="useful-links_button">Subscribe</Button>
				</FlexBox>
			</FlexBox>
		</FlexBox>
	</FlexBox>
);

export default UsefulLinks;
