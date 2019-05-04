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
	demoPrice,
}) =>  (
	<>
		<SectionHeader
			title={name}
			stars={rating}
			language={learnLanguage}
			subTitle={`${isNative ? 'Native ' : ''}Teacher`}
		/>
		<TeacherLanguages
			language={language}
			otherLanguages={otherLanguages}
		/>
		<PriceCard
			individual
			price={individualPrice}
			demoPrice={demoPrice}
		/>
		<PriceCard
			price={groupPrice}
			demoPrice={demoPrice}
		/>
	</>
);

export default TeacherInfo;
