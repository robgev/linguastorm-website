import React from 'react';
import {
	FlexBox,
	Hexagon,
	ContentText,
} from 'components/atoms';
import { LanguageChip, LanguageLabel } from 'components/molecules';

import './styles.scss';

const TeacherItem = ({ teacher, active }) => (
	<FlexBox column align className="teacher-item_container">
		<Hexagon className="teacher-item_teacher-hex" src={teacher.imageUrl} />
		<ContentText
			className={`teacher-item_teacher-name ${active ? 'active' : ''}`}
		>
			{teacher.name}
		</ContentText>
		{ active
			? (
				<>
				<LanguageChip
					language={teacher.language}
					className="teacher-item_teacher-language"
				/>
				<LanguageLabel
					language={teacher.language}
					className="teacher-item_language-info"
				/>
				<ContentText
					className="teacher-item_language-info"
				>
					2000+ Teachers
				</ContentText>
				</>
			)
			: (
				<ContentText
					big
					className="teacher-item_teacher-title"
				>
					{teacher.title}
				</ContentText>
			)}
	</FlexBox>
);

export default TeacherItem;
