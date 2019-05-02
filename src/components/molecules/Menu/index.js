import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Grow,
	Popper,
	MenuList,
	Container,
	PaperContainer,
	ClickAwayListener,
} from 'components/atoms';
import './styles.scss';

const Menu = ({
	children,
	onClick,
	className,
	closeOnClick,
	actionElement,
	PaperProps,
	...props
}) => {
	const [ anchorEl, setAnchor ] = useState(null);

	const handleClick =  (event) => {
		setAnchor(event.currentTarget);
	};

	const handleClose = () => {
		setAnchor(null);
	};

	const onItemClick = () => {
		if (closeOnClick) {
			handleClose();
		}
		onClick();
	};

	const open = Boolean(anchorEl);

	return (
		<>
			{actionElement(open ? handleClose : handleClick, open)}
			<Popper
				transition
				open={open}
				disablePortal
				anchorEl={anchorEl}
				className={`molecule_menu-popper ${className}`}
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						className={`grow ${placement === 'bottom' ? 'top' : 'bottom'}`}
					>
						<PaperContainer {...PaperProps}>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList onClick={onItemClick} className="list" {...props}>
									{children}
								</MenuList>
							</ClickAwayListener>
						</PaperContainer>
					</Grow>
				)}
			</Popper>
		</>
	);
};

Menu.propTypes = {
	closeOnClick: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node,
	className: PropTypes.string,
	actionElement: PropTypes.func,
	PaperProps: PropTypes.object,
};

Menu.defaultProps = {
	closeOnClick: true,
	onClick: () => {},
	className: '',
	actionElement: Container,
};

export default Menu;
