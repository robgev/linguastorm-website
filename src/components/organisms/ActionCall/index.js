import React from 'react';
import PropTypes from 'prop-types';
import { Button, FlexBox } from 'components/atoms';
import { LanguageMenu } from 'components/molecules';

import './styles.scss';

const ActionCall = () => (
	<FlexBox justifyBetween align className="organism_action-call">
		<LanguageMenu
			label="I speak"
			value="us"
			className="organism_action-call_menu"
			onItemClick={() => console.log('Works')}
		/>
		<LanguageMenu
			label="I want to learn"
			value="us"
			onItemClick={() => console.log('Works')}
		/>
		<Button>
			Find a Teacher
		</Button>
	</FlexBox>
);

ActionCall.defaultProps = {
	big: false,
};

ActionCall.propTypes = {
	big: PropTypes.bool,
};

export default ActionCall;
