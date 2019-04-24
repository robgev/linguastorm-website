import React from 'react';
import {
	Image,
	FlexBox,
} from 'components/atoms';
import Background from 'assets/images/teachers_background.png';

import TeacherItem from '../TeacherItem';

import './styles.scss';

const FakeTeachersData = [
	{
		name: 'Guillaume',
		title: 'Community Tutor',
		language: 'us',
		imageUrl: '/images/teacher1.png'
	},
	{
		name: 'Batsheva',
		title: 'Community Tutor',
		language: 'es',
		imageUrl: '/images/teacher2.png'
	},
	{
		active: true,
		name: 'Batsheva',
		title: 'Community Tutor',
		language: 'de',
		imageUrl: '/images/teacher3.png'
	},
	{
		name: 'Guillaume',
		title: 'Community Tutor',
		language: 'cn',
		imageUrl: '/images/teacher4.png'
	},
	{
		name: 'Guillaume',
		title: 'Community Tutor',
		language: 'ru',
		imageUrl: '/images/teacher5.png'
	},
];

const TeachersList = () => (
	<FlexBox justify className="teachers-list_main-container">
		<Image className="teachers-list_back" src={Background} />
		<FlexBox justifyBetween align className="teachers-list_front">
			{ FakeTeachersData.map(t => (
				<TeacherItem
					teacher={t}
					active={t.active}
					key={t.imageUrl}
				/>
			))}
		</FlexBox>
	</FlexBox>
);

export default TeachersList;
