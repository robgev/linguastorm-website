import React, { useState } from 'react';
import { Container } from 'components/atoms';
import {
	Header,
	Footer,
	Layout,
	VideoPopup,
} from 'components/molecules';
import { Query } from 'components/organisms';
import {
	searchToQuery,
} from 'utils';
import { GET_TEACHER_COURSES } from 'constants/Queries';
import {
	Filters,
	TeacherCard,
} from './components';

import './styles.scss';

const defaultQuery = {
	speak: '',
	learn: '',
	course: '',
	level: 0,
	isNative: null,
	subCourses: null,
	orderBy: '-rating',
};

const Search = (props) => {
	const currentQuery = {
		...defaultQuery,
		...searchToQuery(props.location.search)
	};

	const constructVariables = () => {
		const {
			speak,
			learn,
			// course,
			level,
			isNative,
			orderBy
		} = currentQuery;
		return {
			after: null,
			learn,
			speak,
			levelA: level >= 1 || null,
			levelB: level >= 2 || null,
			levelC: level >= 3 || null,
			orderBy,
			isNative,
			id: null,
			subCourses: null,
		};
	};

	const [ src, setSrc ] = useState('');

	const onClose = () => {
		setSrc('');
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
			<Query
				query={GET_TEACHER_COURSES}
				variables={constructVariables()}
			>
				{(data) => (
					<>
						{data.allTeacherCourses &&
						data.allTeacherCourses.edges.length > 0 &&
						data.allTeacherCourses.edges.map(tc => (
							<TeacherCard
								key={tc.node.id}
								setSrc={setSrc}
								{...tc.node}
							/>
						))}
					</>
				)}
			</Query>
			<Container className="teachers_search-results" />
		</Layout>
		<Footer cover />
		<VideoPopup
			onClose={onClose}
			open={src !== ''}
			src={src}
		/>
		</>
	);
};

export default Search;
