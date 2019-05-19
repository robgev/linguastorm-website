import gql from 'graphql-tag';

export const GET_FILTER_COURSES = gql`
	{
		allCourses {
			edges {
				node {
					title,
					id,
				}
			}
		}
	}
`;

export const GET_FILTER_SUBCOURSES = gql`
	{
		allSubCourses {
			edges {
				node {
					name,
					id,
				}
			}
		}
	}
`;

export const GET_ALL_LANGUAGES_FILTER = gql`
	{
		allLanguages{
			englishName
			code
		}
	}
`;

export const GET_ALL_FILTERS = gql`
	{
		allLanguages{
			englishName
			code
		}
		allCourses {
			edges {
				node {
					title,
					id,
					subCourses {
						edges {
							node {
								title,
								id
							}
						}
					}
				}
			}
		}
	}
`;

// $after: String,
// first: 100,
// after: $after,
export const GET_TEACHER_COURSES = gql`
	query fetchTeachers(
			$id: ID,
			$courses: [ID],
			$levelA: Boolean,
			$levelB: Boolean,
			$levelC: Boolean,
			$isNative: Boolean,
			$orderBy: String,
			$learn: String,
			$speak: String
		) {
		allTeacherCourses(
			id: $id,
			courses: $courses,
			levelA: $levelA,
			levelB: $levelB,
			levelC: $levelC,
			isNative: $isNative,
			orderBy: $orderBy,
			learnLanguage: $learn,
			speakLanguage: $speak
		) {
			edges {
				node {
					teacher {
						id
						rating
						country
						shortBio
						user {
							id
							fullName
							profileImage
						}
						languages {
							englishName
							code
						}
					}
					language {
						englishName
						code
					}
					id
					groupPrice
					individualPrice
					groupTrialPrice
					individualTrialPrice
					isNative
					videoLink
				}
				cursor
			}
			pageInfo {
				endCursor
				hasNextPage
				hasPreviousPage
				startCursor
			}
		}
	}
`;
