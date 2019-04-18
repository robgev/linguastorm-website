import React from 'react';
import {
	Menu
} from 'components/molecules';
import LanguageItem from './LanguageItem';

const LanguageMenu = (props) => (
	<Menu
		{...props}
		actionElement={LanguageItem}
	/>
);

export default LanguageMenu;
