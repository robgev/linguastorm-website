import React from 'react';
import {
	Menu
} from 'components/molecules';
import LANGUAGES from 'constants/Languages';
import LanguageItem from './LanguageItem';
import LanguageMenuItem from './LanguageMenuItem';

const ITEM_HEIGHT = 48;

const LanguageMenu = ({
	PaperProps,
	label,
	value,
	children,
	onItemClick,
	className,
	...props
}) => (
	<Menu
		{...props}
		PaperProps={{
			...PaperProps,
			style: {
				...PaperProps.style,
				maxHeight: ITEM_HEIGHT * 4.5,
			},
		}}
		actionElement={(onClick) =>
			<LanguageItem
				label={label}
				value={value}
				onClick={onClick}
				className={className}
			/>
		}
	>
		{
			Object.keys(LANGUAGES)
				.map(l => (
					<LanguageMenuItem
						key={l}
						language={l}
						onClick={() => onItemClick(l)}
					/>
				))
		}
		{children}
	</Menu>
)

LanguageMenu.defaultProps = {
	PaperProps: {},
	label: '',
}

export default LanguageMenu;
