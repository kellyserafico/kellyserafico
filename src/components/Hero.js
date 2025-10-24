import React from "react";

const Hero = () => {
	return (
		<>
			<section className="info-section" id="about">
				<section className="info-text">
					<h3>hi, i'm kelly. nice to meet you!</h3>
					<p>
						I'm a frontend developer with a strong passion for building web applications that provide exceptional user
						experiences. I am dedicated to making websites immersive, responsive, and accessible whilst bringing fresh and
						innovative solutions to every project. I thrive in collaborative environments, so please do not hesitate to reach out!
					</p>
					<address className="email-section">
						<img src={`${process.env.PUBLIC_URL}/images/email-icon.svg`} alt="Email" />
						<a href="mailto:seraficok@gmail.com">seraficok@gmail.com</a>
					</address>
				</section>
				<section className="moon">
					<img src={`${process.env.PUBLIC_URL}/images/moon.png`} id="moon" alt="Moon" />
					<img src={`${process.env.PUBLIC_URL}/images/cloud/mooncloud1.svg`} id="cloud1" alt="Cloud 1" />
					<img src={`${process.env.PUBLIC_URL}/images/cloud/mooncloud2.svg`} id="cloud2" alt="Cloud 2" />
					<img src={`${process.env.PUBLIC_URL}/images/cloud/mooncloud3.svg`} id="cloud3" alt="Cloud 3" />
					<img src={`${process.env.PUBLIC_URL}/images/cloud/mooncloud4.svg`} id="cloud4" alt="Cloud 4" />
					<img src={`${process.env.PUBLIC_URL}/images/cloud/mooncloud5.svg`} id="cloud5" alt="Cloud 5" />
				</section>
				<a href="#tooling-section">
					<img src={`${process.env.PUBLIC_URL}/images/arrow_down.svg`} className="arrow-down" alt="Scroll down" />
				</a>
			</section>
		</>
	);
};

export default Hero;
