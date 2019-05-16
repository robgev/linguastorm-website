import React from 'react';
import { Header, Footer } from 'components/molecules';

import {
	Hiring,
	AboutSection,
	PhotosSection,
	SocialSection,
} from './components';

const About = () => (
	<>
	<Header
		thinTitle="About"
		boldTitle="Us"
		src="/images/about.png"
	>
		Highly customized languagea courses
		with unique methodology Delivered by the
		best teachers from all over the world
	</Header>
	<AboutSection
		thinTitle="About"
		boldTitle="LinguaStorm"
		images={[
			'/images/story3.png',
			'/images/story1.png',
			'/images/story2.png',
		]}
	>
		LinguaStorm provides you an opportunity to choose the most appropriate
		course for your personal, business or academic purposes. Our teachers use the
		methodology which we developed by  elaborating on the best existing practices.
		It takes into account the actual language level of the student and the target level,
		hence customizing the user experience.  Another major concept we adopted in our business
		model is the availability of learning anytime and anywhere. LinguaStorm is committed to
		provide the learners with a myriad of options to practice a new language online.
		This includes gamification and interactivity  content, easy and enjoyable way of performing
		homework and tracking your progress online and much more.
		<br /><br />
		<ul>
			<li>
				We are there for you 24/7 to help you choose the most appropriate study plan
				and start improving your language proficiency level right away. The faster you learn,
				the more competitive you become in your career!
			</li>
			<li>
				Feel free to contact us anytime for any information and we will get back to you with the
				most thorough feedback, allowing you to choose easily between standard and customizable
				courses according to your learning purpose. Our professional support team speaks your language!
			</li>
		</ul>
	</AboutSection>
	<AboutSection
		divider
		thinTitle="We Are"
		boldTitle="LinguaStorm"
		reverse
		images={[
			'/images/we1.png',
			'/images/we2.png',
			'/images/we3.png',
		]}
	>
		In today’s era, multilingualism has become more than just ‘important’.
		We believe everyone deserves high quality education regardless of their gender,
		beliefs, sexual orientation, abilities and ethnicity. We are for equality. This is one
		of the main reasons for creating this online platform. <br />
		Integrity is the backbone of our company. Honesty and transparency defines our
		culture. We extend this culture to our customers and make sure they feel special and valued.
		We continuously learn and evolve and highly appreciate customer feedback.
	</AboutSection>
	<PhotosSection />
	<Hiring />
	<SocialSection />
	<Footer cover />
	</>
);

export default About;
