import React from 'react';
import {
	SectionHeader,
	CourseInfoCard,
} from '../../components';

const TeacherCourseInfo = ({
	courses
}) =>  (
	<>
		<SectionHeader
			title="Courses Info"
		/>
		{courses.map(c =>
			<CourseInfoCard
				key={c.id}
				title={c.title}
				description={c.description}
			/>
		)}
	</>
);

export default TeacherCourseInfo;
