import React, { useState, useEffect } from "react";

const Nav = () => {
	const [activeSection, setActiveSection] = useState("about");

	const handleNavClick = (sectionId) => {
		setActiveSection(sectionId);
	};

	useEffect(() => {
		const sections = ["about", "tooling-section", "projects"];

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100;

			let currentSection = "about";

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
						currentSection = section;
						break;
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
				<a href="#about" className={activeSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>
					<span>about</span>
				</a>
				<a
					href="#tooling-section"
					className={activeSection === "tooling-section" ? "active" : ""}
					onClick={() => handleNavClick("tooling-section")}
				>
					<span>tooling</span>
				</a>
				<a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={() => handleNavClick("projects")}>
					<span>projects</span>
				</a>
				<a href="mailto:seraficok@gmail.com">say hi!</a>
			</div>
		</nav>
	);
};

export default Nav;
