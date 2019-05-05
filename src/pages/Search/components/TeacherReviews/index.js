import React from 'react';
import {
	ReviewCard,
	SectionHeader,
} from '../../components';

const TeacherReviews = ({
	reviews
}) =>  (
	<>
		<SectionHeader
			title="Reviews"
		/>
		{reviews.map(r =>
			<ReviewCard
				key={r.id}
				{...r}
			/>
		)}
	</>
);

export default TeacherReviews;
