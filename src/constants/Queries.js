import gql from 'graphql-tag';

export const GET_TEACHER_COURSES = gql`
	query fetchTeachers(
			$after: String,
			$id: ID,
			$subCourses: [ID],
			$levelA: Boolean,
			$levelB: Boolean,
			$levelC: Boolean,
			$isNative: Boolean,
			$orderBy: String,
			$learn: String,
			$speak: String
		) {
		allTeacherCourses(
			first: 100,
			after: $after,
			id: $id,
			subCourses: $subCourses,
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
						greetingText
						headlineText
						summaryText
						user {
							id
							firstName
							lastName
							profileImage
						}
						languages {
							englishName
							code
						}
						videoLink
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
