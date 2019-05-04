import React from 'react';
import { Tabs, Tab } from 'components/atoms';

const TeacherTabs = ({ value, onChange, className }) => (
	<Tabs
		value={value}
		onChange={onChange}
		className={className}
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
