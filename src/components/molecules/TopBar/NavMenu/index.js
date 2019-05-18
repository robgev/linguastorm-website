import React from 'react';
import { Text, FlexBox } from 'components/atoms';
import { Menu } from 'components/icons';

import './styles.scss';

const NavMenu = ({ onClick, ...props }) => (
	<FlexBox onClick={onClick} className="nav-menu_container" justifyBetween align>
		<Menu />
		<Text>Menu</Text>
	</FlexBox>
);

export default NavMenu;
