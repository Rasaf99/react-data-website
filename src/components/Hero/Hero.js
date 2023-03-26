import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="https://res.cloudinary.com/dqjh4gyod/video/upload/v1679859913/cloned-styled-component-projects/Hero_w9n1jq.mp4" autoPlay muted />
			<Container>
				<MainHeading>Your data is secure with us</MainHeading>
				<HeroText>
					We provide the best security systems for clients all over the world
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Get Started</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
