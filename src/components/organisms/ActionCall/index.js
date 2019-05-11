import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FlexBox } from 'components/atoms';
import { LanguageMenu, ContainerLink } from 'components/molecules';

import './styles.scss';

const ActionCall = () => {
	const [ speakLang, setSpeak ] = useState('en');
	const [learnLang, setLearn] = useState('es');

	return (
		<FlexBox justifyBetween align className="organism_action-call">
			<LanguageMenu
				label="I speak"
				value={speakLang}
				className="organism_action-call_menu"
				onItemClick={setSpeak}
			/>
			<LanguageMenu
				label="I want to learn"
				value={learnLang}
				onItemClick={setLearn}
			/>
			<ContainerLink to={`/search?speak=${speakLang}&learn=${learnLang}`}>
				<Button>
					Find a Teacher
				</Button>
			</ContainerLink>
		</FlexBox>
	);
};

ActionCall.defaultProps = {
	big: false,
};

ActionCall.propTypes = {
	big: PropTypes.bool,
};

export default ActionCall;
