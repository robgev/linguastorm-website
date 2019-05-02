import React from 'react';
import { Tabs, Tab } from 'components/atoms';

const TeacherTabs = ({ value, onChange }) => (
	<Tabs
		value={value}
		onChange={onChange}
	>
		<Tab
			label="Information"
		/>
		<Tab
			label="My Story"
		/>
		<Tab
			label="Course Info"
		/>
		<Tab
			label="Reviews"
		/>
		<Tab
			label="Calendar"
		/>
	</Tabs>
);

export default TeacherTabs;
