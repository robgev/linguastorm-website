import React from 'react';
import Menu from '../Menu';
import SelectActionItem from './SelectActionItem';

import './styles.scss';

const Select = ({
	children,
	value,
	onChange,
	...props,
}) => {
	let displayValue = '';
	const onItemClick = (child) => () => {
		onChange(child.props.value);
	};

	const items = React.Children.map(children, child => {
		const selected = String(value) === String(child.props.value);
		if (selected) {
			displayValue = child.props.children;
		}

		return React.cloneElement(child, {
			onClick: onItemClick(child),
			role: 'option',
			selected,
			value: undefined,
			'data-value': child.props.value,
		});
	});

	return (
		<Menu
			className="molecule_select-menu"
			actionElement={(onClick, open) =>
				<SelectActionItem
					open={open}
					onClick={onClick}
					value={displayValue}
					{...props}
				/>
			}
		>
			{items}
		</Menu>
	);
};

export default Select;
