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
		thinTitle="Learn From Top Ten"
		boldTitle="Talented Teachers"
	>
		Highly customized language courses with unique
		methodology Delivered by the best teachers from all
		over the world
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
