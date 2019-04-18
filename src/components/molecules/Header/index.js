import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/atoms';
import { Layout, TopBar } from 'components/molecules';

import './styles.scss';

const Header = ({ big, ...props }) => (
	<Container className={`molecule_header ${big ? 'big' : ''}`}>
		<Layout>
			<TopBar />
		</Layout>
	</Container>
);

Header.defaultProps = {
	big: false,
};

Header.propTypes = {
	big: PropTypes.bool,
};

export default Header;
