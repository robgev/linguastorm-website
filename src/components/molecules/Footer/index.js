import React from 'react';
import { Container, Image, FlexBox } from 'components/atoms';
import { Layout } from 'components/molecules';
import { ActionCall } from 'components/organisms';
import {
	UsefulLinks,
	SectionBar,
	 FollowUs,
} from './components';


import './styles.scss';

const Footer = ({ cover }) => (
	<>
		<Container className={`molecule_footer ${cover ? 'cover' : ''}`}>
			<Layout className="molecule_footer_main-content">
				<Container className="molecule_footer_action-call">
					<ActionCall />
				</Container>
				<UsefulLinks />
				<SectionBar />
				<FollowUs />
			</Layout>
			<Image className="molecule_footer-bg" src="/images/bottom.png" />
		</Container>
		<FlexBox align justify className="molecule_footer-copyright">
			Copyright lingua storm.com 2019, All Rights Reserved
		</FlexBox>
	</>
);

export default Footer;
