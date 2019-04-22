import React from 'react';
import { Header } from 'components/molecules';
import {
	WhyUs,
	OurStory,
	HowItWorks,
	OurTeachers,
} from './components';

const Home = () => (
	<>
	<Header big />
	<OurStory />
	<HowItWorks />
	<WhyUs />
	<OurTeachers />
	<div style={{height: 300}} />
	</>
);

export default Home;
