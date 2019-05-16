import React, { useEffect } from 'react';
import {
	FlexBox,
	MenuItem,
	TextBlock,
} from 'components/atoms';
import { Select } from 'components/molecules';
import { ArrowUp, ArrowDown } from 'components/icons';
import { graphql } from 'react-apollo';
import { GET_ALL_FILTERS } from 'constants/Queries';
import Storage from 'api/storage';
import {
	queryToSearch,
	queryDifference,
} from 'utils';

import './styles.scss';

const Filters = ({
	data: {
		allSubCourses,
		allLanguages,
		allCourses,
	},
	history,
	location,
	defaultQuery,
	currentQuery,
}) => {
	useEffect(() => {
		const currentSearch = location.search;
		const { data: prevSearch } = Storage.load('search') || {};
		if (currentSearch !== prevSearch) {
			Storage.save('search', currentSearch);
			// console.log(getCurrentQuery());
		}
	}, []);

	useEffect(() => {
		Storage.save('search', location.search);
		// console.log(getCurrentQuery());
	}, [ location.search ]);

	const changeFilters = (name) => (value) => {
		const query = queryDifference(defaultQuery, {
			...currentQuery,
			[name]: value
		});
		const searchString = queryToSearch(query);
		history.replace(`${location.pathname}?${searchString}`);
	};

	const {
		level,
		learn,
		speak,
		course,
		orderBy,
		isNative,
	} = currentQuery;
	const languages = !allLanguages
		? null
		: allLanguages.map(({ englishName, code }) =>
			<MenuItem key={code} value={code}>{englishName}</MenuItem>
		);

	return (
		<FlexBox align justifyBetween className="search_filters-container">
			<FlexBox column>
				<TextBlock className="search_filters-text">FILTERS:</TextBlock>
				<FlexBox align justifyBetween>
					<Select
						label="I speak"
						value={speak}
						className="search_filters-select"
						onChange={changeFilters('speak')}
					>
						{languages}
					</Select>
					<Select
						label="I want to learn"
						value={learn}
						className="search_filters-select"
						onChange={changeFilters('learn')}
					>
						{languages}
					</Select>
					<Select
						nonEmpty
						label="Native"
						value={isNative}
						className="search_filters-select"
						onChange={changeFilters('isNative')}
					>
						<MenuItem value={true}>Native</MenuItem>
						<MenuItem value={false}>Non-Native</MenuItem>
					</Select>
				</FlexBox>
				<FlexBox align>
					<Select
						label="Level"
						value={level}
						className="search_filters-select"
						onChange={changeFilters('level')}
					>
						<MenuItem value={1}>A1 - A2</MenuItem>
						<MenuItem value={2}>B1 - B2</MenuItem>
						<MenuItem value={3}>C1 - C2</MenuItem>
					</Select>
					<Select
						label="Course"
						value={course}
						className="search_filters-select"
						onChange={changeFilters('course')}
					>
						{!allCourses
							? null
							: allCourses.edges.map(({ node }) =>
								<MenuItem key={node.id} value={node.id}>{node.title}</MenuItem>
							)}
					</Select>
					<Select
						label="SubCourse"
						value={course}
						className="search_filters-select"
						onChange={changeFilters('subCourses')}
					>
						{!allSubCourses
							? null
							: allSubCourses.edges.map(({ node }) =>
								<MenuItem key={node.id} value={node.id}>{node.name}</MenuItem>
							)}
					</Select>
				</FlexBox>
			</FlexBox>
			<FlexBox column>
				<TextBlock className="search_filters-text">SORT BY:</TextBlock>
				<Select
					nonEmpty
					label="OrderBy"
					value={orderBy}
					onChange={changeFilters('orderBy')}
				>
					<MenuItem value="-rating">Rating <ArrowUp /></MenuItem>
					<MenuItem value="rating">Rating <ArrowDown /></MenuItem>
					<MenuItem value="-individualPrice">Indv. Price <ArrowUp /></MenuItem>
					<MenuItem value="individualPrice">Indv. Price  <ArrowDown /></MenuItem>
					<MenuItem value="-groupPrice">Group Price <ArrowUp /></MenuItem>
					<MenuItem value="groupPrice">Group Price <ArrowDown /></MenuItem>
				</Select>
			</FlexBox>
		</FlexBox>
	);
};

export default graphql(GET_ALL_FILTERS)(Filters);
