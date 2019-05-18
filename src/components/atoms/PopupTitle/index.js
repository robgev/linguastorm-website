import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CloseButton } from 'components/molecules';
import { FlexBox } from 'components/atoms';

const PopupTitle = ({ className, onClose, children, ...props }) => (
	<DialogTitle className={className} {...props} >
		<FlexBox fullWidth justifyBetween align>
			{children}
			<CloseButton onClick={onClose} />
		</FlexBox>
	</DialogTitle>
);

PopupTitle.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	children: PropTypes.node,
};

PopupTitle.defaultProps = {
	className: '',
	onClose: ()=>{},
	children: <FlexBox/>
};

export default PopupTitle;
