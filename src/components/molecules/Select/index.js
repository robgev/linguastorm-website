import React from 'react';
import Menu from '../Menu';
import SelectActionItem from './SelectActionItem';

import './styles.scss';

const Select = ({ children, value, onChange }) => {
	const onItemClick = (e) => {
		onChange(e.currentTarget.value);
	};

	const items = React.Children.map(children, child => {
		const selected = String(value) === String(child.props.value);

		return React.cloneElement(child, {
			onClick: onItemClick(child),
			role: 'option',
			selected,
			value,
		});
	});

	return (
		<Menu
			className="molecule_select-menu"
			actionElement={(onClick) =>
				<SelectActionItem
					value={value}
					onClick={onClick}
				/>
			}
		>
			{items}
		</Menu>
	);
};

export default Select;
