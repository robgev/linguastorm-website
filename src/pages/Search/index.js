import React from 'react';
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
	TeacherTabs,
} from './components';

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
			<TeacherTabs />
		</Layout>
		<Footer cover />
		</>
	);
};

export default Search;
