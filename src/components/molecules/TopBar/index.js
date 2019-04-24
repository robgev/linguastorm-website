import React from 'react';
import { FlexBox, Image, Link } from 'components/atoms';
import { Menu, LanguageMenuItem } from 'components/molecules';
import Logo from 'assets/images/logo.png';
import LANGUAGES from 'constants/Languages';

import LanguageActionItem from './LanguageActionItem';
import NavMenu from './NavMenu';

import './styles.scss';

const ITEM_HEIGHT = 48;

const TopBar = () => (
	<FlexBox className="menu-bar" justifyBetween align>
		<NavMenu />
		<Link to="/">
			<Image alt="Logo" src={Logo} />
		</Link>
		<Menu
			actionElement={(onClick) =>
				<LanguageActionItem onClick={onClick} />
			}
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
