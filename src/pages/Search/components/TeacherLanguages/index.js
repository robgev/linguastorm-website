import React from 'react';
import {
	FlexBox,
} from 'components/atoms';

import LanguageLabel from '../LanguageLabel';
import './styles.scss';

const TeacherLanguages = ({ language, otherLanguages }) =>  (
	<FlexBox align className="search_teacher-languages-container">
		<LanguageLabel
			language={language}
		/>
		<LanguageLabel
			multiple
			language={otherLanguages}
		/>
	</FlexBox>
);

export default TeacherLanguages;
