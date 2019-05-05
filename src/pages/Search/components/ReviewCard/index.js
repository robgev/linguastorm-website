import React from 'react';
import { Container, ContentText } from 'components/atoms';
import UserCard from '../UserCard';

import './styles.scss';

const CourseInfoCard = ({
	review,
	...props
}) =>  (
	<Container className="teacher_review-card_container">
		<ContentText normal>&ldquo;{review}&rdquo;</ContentText>
		<UserCard {...props} />
	</Container>
);

export default CourseInfoCard;
