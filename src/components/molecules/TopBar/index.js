import React from 'react';
import { Container, FlexBox, Image } from 'components/atoms';
import { Menu, LanguageMenuItem } from 'components/molecules';
import Logo from 'assets/images/logo.png';
import LANGUAGES from 'constants/Languages';

import LanguageActionItem from './LanguageActionItem';
import NavMenu from './NavMenu';

import './styles.scss';

const ITEM_HEIGHT = 48;

const TopBar = ({ big, ...props }) => (
	<FlexBox className="menu-bar" justifyBetween align>
		<NavMenu />
		<Image alt="Logo" src={Logo} />
		<Menu
			actionElement={LanguageActionItem}
			PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
            },
      }}
		>
			{
				Object.keys(LANGUAGES)
					.map(l => (
						<LanguageMenuItem key={l} language={l} />
					))
			}
		</Menu>
	</FlexBox>
);

export default TopBar;
