import React from 'react';
import { Container } from 'components/atoms';
import {
	Header,
	Footer,
	Layout,
} from 'components/molecules';
import {
	searchToQuery,
} from 'utils';
import {
	Filters,
	TeacherCard,
} from './components';

import './styles.scss';

const defaultQuery = {
	speakLanguage: '',
	learnLanguage: '',
	course: '',
	level: 0,
	isNative: true,
	orderBy: '-rating',
};

const Search = (props) => {
	const currentQuery = {
		...defaultQuery,
		...searchToQuery(props.location.search)
	};

	// const resetFilters = () => {
	// 	history.replace(`${location.pathname}`);
	// };

	return (
		<>
		<Header
			thinTitle="Let's Find Your"
			boldTitle="Teacher"
			src="/images/teacher.png"
		>
			Highly customized languagea courses
			with unique methodology Delivered by the
			best teachers from all over the world
		</Header>
		<Layout resetBottom>
			<Filters
				{...props}
				defaultQuery={defaultQuery}
				currentQuery={currentQuery}
			/>
			<TeacherCard src={'/images/we3.png'} />
			<TeacherCard src={'/images/we3.png'} />
			<TeacherCard src={'/images/we3.png'} />
			<Container className="teachers_search-results" />
		</Layout>
		<Footer cover />
		</>
	);
};

export default Search;
