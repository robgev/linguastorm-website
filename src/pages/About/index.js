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
		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
		dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
		veritatis et quasi architecto beatae vitae dicta sunt explicabo.
		<br />
		Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
		sed qu ia consequuntur magni dolores eos quirut perspiciatis unde omnis
		iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem
		aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
		dicta sunt exp. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
		fugit, sed qu ia consequuntur magni dolores eos quirut perspiciatis unde omnis iste natus
		error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa
		quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
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
		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
		dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
		veritatis et quasi architecto beatae vitae dicta sunt explicabo.
		<br />
		Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
		sed qu ia consequuntur magni dolores eos quirut perspiciatis unde omnis
		iste natus error sit voluptatem accusantium dolo remque laudantium, totam rem
		aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
		dicta sunt exp. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
		fugit, sed qu ia consequuntur magni dolores eos quirut perspiciatis unde omnis iste natus
		error sit voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa
		quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
	</AboutSection>
	<PhotosSection />
	<Hiring />
	<SocialSection />
	<Footer cover />
	</>
);

export default About;
