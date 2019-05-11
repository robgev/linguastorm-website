import React from 'react';
import { PriceCard } from 'components/molecules';
import {
	SectionHeader,
	TeacherLanguages,
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
	groupTrialPrice,
	individualTrialPrice,
}) =>  (
	<>
		<SectionHeader
			title={name}
			stars={rating}
			language={language}
			subTitle={`${isNative ? 'Native ' : ''}Teacher`}
		/>
		<TeacherLanguages
			language={learnLanguage}
			otherLanguages={otherLanguages}
		/>
		<PriceCard
			individual
			price={individualPrice}
			demoPrice={individualTrialPrice}
		/>
		<PriceCard
			price={groupPrice}
			demoPrice={groupTrialPrice}
		/>
	</>
);

export default TeacherInfo;
