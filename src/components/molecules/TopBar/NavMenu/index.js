import React from 'react';
import { Text, FlexBox } from 'components/atoms';
import { Menu } from 'components/icons'

import './styles.scss';

const TopBar = ({ big, ...props }) => (
	<FlexBox className="nav-menu_container" justifyBetween align>
		<Menu />
		<Text>Menu</Text>
	</FlexBox>
);

export default TopBar;
