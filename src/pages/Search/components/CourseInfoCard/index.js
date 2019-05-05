import React from 'react';
import { Container, ContentText } from 'components/atoms';
import { PrimaryLink } from 'components/molecules';

import './styles.scss';

const CourseInfoCard = ({
	title,
	description,
}) =>  (
	<Container className="teacher_course-info-card_container">
		<PrimaryLink
			to="#"
			className="teacher_course-info-card_title"
		>
			{title}
		</PrimaryLink>
		<ContentText normal>{description}</ContentText>
	</Container>
);

export default CourseInfoCard;
