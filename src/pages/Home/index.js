import React from 'react';
import { Header, Footer } from 'components/molecules';
import {
	WhyUs,
	OurStory,
	Sponsors,
	ContactUs,
	LatestBlog,
	OurMission,
	OurTeachers,
	HowItWorks,
} from './components';

const Home = () => (
	<>
	<Header
		big
		src="/videos/home.mov"
		thinTitle="Find the best "
		boldTitle="teacher for you!"
	>
		Studying online with LinguaStorm gives you more flexibility and a wide choice of courses.
	</Header>
	<OurStory />
	<HowItWorks />
	<WhyUs />
	<OurTeachers />
	<Sponsors />
	<LatestBlog />
	<OurMission />
	<ContactUs />
	<Footer cover />
	</>
);

export default Home;
