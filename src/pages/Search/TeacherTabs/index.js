import React, { useState } from 'react';
import { Tabs, Tab } from 'components/atoms';

const TeacherTabs = (props) => {
	const [ value, setValue ] = useState(0);

	const handleChange = (_, value) => {
		setValue(value);
	};

	return (
		<Tabs
			value={value}
			onChange={handleChange}
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
};

export default TeacherTabs;
