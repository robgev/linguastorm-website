import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, Video } from 'components/atoms';
import { Layout, TopBar } from 'components/molecules';
import { ActionCall } from 'components/organisms';
import HeaderText from './HeaderText';

import './styles.scss';

const Header = ({
	big,
	src,
	...props,
}) => (
	<Container
		className={`molecule_header ${big ? 'big' : ''}`}
	>
		<Layout className="molecule_header_main-content">
			<TopBar />
			<HeaderText big={big} {...props} />
			{ big &&
				<ActionCall />
			}
		</Layout>
		{ big
			? (
				<Video
					className="molecule_header-video"
					poster="/images/landing.jpg"
					src={src}
				/>
			)
			: (
				<Container
					style={{
						backgroundImage: `url(${src})`
					}}
					className="molecule_header-image"
				/>
			)
		}
		<Image className="molecule_header-pattern" src="/images/top_pattern.png" />
	</Container>
);

Header.defaultProps = {
	big: false,
};

Header.propTypes = {
	big: PropTypes.bool,
	src: PropTypes.string,
};

export default Header;
