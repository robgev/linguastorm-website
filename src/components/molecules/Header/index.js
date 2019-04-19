import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Video } from 'components/atoms';
import { Layout, TopBar } from 'components/molecules';
import HeaderText from './HeaderText';

import './styles.scss';

const Header = ({ big, ...props }) => (
	<Container className={`molecule_header ${big ? 'big' : ''}`}>
		<Layout className="molecule_header_main-content">
			<TopBar />
			<HeaderText />
			<Container>Language Selector Action</Container>
		</Layout>
		<Video
			className="molecule_header-video"
			poster="/images/landing.jpeg"
			src="/video.mp4"
		/>
		<Image className="molecule_header-pattern" src="/images/top_pattern.png" />
	</Container>
);

Header.defaultProps = {
	big: false,
};

Header.propTypes = {
	big: PropTypes.bool,
};

export default Header;
