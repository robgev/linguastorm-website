import React from 'react';
import {
	Button,
	FlexBox,
	Headline,
	Container,
	SimpleForm,
	SimpleInput,
	HeadlineAccent,
} from 'components/atoms';
import { Layout } from 'components/molecules';

import './styles.scss';

const ContactUs = () => (
	<Container className="contact-us_container">
		<Layout>
			<FlexBox column align>
				<Headline className="contact-us_headline">
					<HeadlineAccent>Contact </HeadlineAccent>
					<HeadlineAccent variant="bold">Now</HeadlineAccent>
				</Headline>
				<SimpleForm className="contact-us_form">
					<FlexBox className="contact-us_form-group" align justifyBetween>
						<SimpleInput type="text" placeholder="First Name" />
						<SimpleInput type="text" placeholder="Last Name" />
					</FlexBox>
					<FlexBox className="contact-us_form-group" align justifyBetween>
						<SimpleInput type="email" placeholder="Email Address" />
						<SimpleInput type="tel" placeholder="Phone Number" />
					</FlexBox>
					<FlexBox className="contact-us_form-group" align justifyBetween>
						<SimpleInput rows={5} multiline placeholder="Your Message" />
					</FlexBox>
					<FlexBox className="contact-us_form-group" align justifyEnd>
						<Button color="secondary" type="submit">Send Now</Button>
					</FlexBox>
				</SimpleForm>
			</FlexBox>
		</Layout>
	</Container>
);

export default ContactUs;
