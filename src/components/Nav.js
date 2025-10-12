import React, { useState, useEffect } from "react";

const Nav = () => {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const sections = ["about", "tooling-section", "projects"];

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 2;

			let currentSection = "about";

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop) {
						currentSection = section;
					}
				}
			}

			setActiveSection(currentSection);
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="nav">
			<h1>kelly serafico</h1>
			<div>
				<a href="#about" className={activeSection === "about" ? "active" : ""}>
					<span>about</span>
				</a>
				<a href="#tooling-section" className={activeSection === "tooling-section" ? "active" : ""}>
					<span>tooling</span>
				</a>
				<a href="#projects" className={activeSection === "projects" ? "active" : ""}>
					<span>projects</span>
				</a>
				<a href="mailto:seraficok@gmail.com">say hi!</a>
			</div>
		</nav>
	);
};

export default Nav;
