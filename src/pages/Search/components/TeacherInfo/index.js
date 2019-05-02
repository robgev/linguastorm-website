import React from 'react';
import {
	SectionHeader,
} from '../../components';

// import './styles.scss';

const TeacherInfo = ({
	name,
	language,
	rating,
	isNative,
	learnLanguage,
	otherLanguages,
	individualPrice,
	groupPrice,
	demoPrice,
}) =>  (
	<>
		<SectionHeader
			title={name}
			stars={rating}
			language={learnLanguage}
			subTitle={`${isNative ? 'Native ' : ''}Teacher`}
		/>
	</>
);

export default TeacherInfo;
