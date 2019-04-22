import React from 'react';
import { Header } from 'components/molecules';
import {
	WhyUs,
	OurStory,
	HowItWorks,
	OurTeachers,
	Sponsors,
	LatestBlog,
} from './components';

const Home = () => (
	<>
	<Header big />
	<OurStory />
	<HowItWorks />
	<WhyUs />
	<OurTeachers />
	<Sponsors />
	<LatestBlog />
	<div style={{height: 300}} />
	</>
);

export default Home;
