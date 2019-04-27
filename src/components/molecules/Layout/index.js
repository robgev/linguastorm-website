import React from 'react';
import { Container } from 'components/atoms';

import './styles.scss';

const Layout = ({ className, resetBottom, ...props }) => (
	<Container className={`molecule_layout ${className} ${resetBottom ? 'reset' : ''}`} {...props} />
);

Layout.defaultProps = {
	className: '',
};

export default Layout;
