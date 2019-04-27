import React from 'react';
import { Header, Footer, Layout } from 'components/molecules';
import TeacherTabs from './TeacherTabs';

const Search = () => (
	<>
	<Header
		thinTitle="Let's Find Your"
		boldTitle="Teacher"
		src="/images/teacher.png"
	>
		Highly customized languagea courses
		with unique methodology Delivered by the
		best teachers from all over the world
	</Header>
	<Layout resetBottom>
		<TeacherTabs />
	</Layout>
	<Footer cover />
	</>
);

export default Search;
