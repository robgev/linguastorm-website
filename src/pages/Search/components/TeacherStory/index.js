import React from 'react';
import { ContentText } from 'components/atoms';
import {
	SectionHeader,
} from '../../components';

import './styles.scss';

const TeacherStory = ({
	story
}) =>  (
	<>
		<SectionHeader
			title="My Story"
			subTitle="About Me"
		/>
		<ContentText
			normal
			className="teacher_story-text"
		>
			{story}
		</ContentText>
	</>
);

export default TeacherStory;
