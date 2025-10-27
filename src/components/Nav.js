import React, { useState, useEffect } from "react";

const Nav = () => {
	const [activeSection, setActiveSection] = useState("about");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleNavClick = (sectionId) => {
		setActiveSection(sectionId);
		setIsMobileMenuOpen(false); // Close mobile menu when nav item is clicked
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		// Check if we're on mobile (hamburger menu is visible)
		const checkIsMobile = () => {
			return window.innerWidth <= 768;
		};

		// Only set up scroll detection on desktop
		if (checkIsMobile()) {
			return;
		}

		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			
			// Get all sections
			const aboutElement = document.getElementById("about");
			const toolingElement = document.getElementById("tooling-section");
			const projectsElement = document.getElementById("projects");
			const contactElement = document.getElementById("contact");
			
			// Calculate which section is most visible
			let currentSection = "about";
			let maxVisibleArea = 0;
			
			const sections = [
				{ id: "about", element: aboutElement },
				{ id: "tooling-section", element: toolingElement },
				{ id: "projects", element: projectsElement },
				{ id: "contact", element: contactElement }
			];
			
			sections.forEach(section => {
				if (section.element) {
					const rect = section.element.getBoundingClientRect();
					const elementTop = rect.top;
					const elementBottom = rect.bottom;
					const elementHeight = rect.height;
					
					// Calculate visible area
					const visibleTop = Math.max(0, elementTop);
					const visibleBottom = Math.min(windowHeight, elementBottom);
					const visibleHeight = Math.max(0, visibleBottom - visibleTop);
					const visiblePercentage = visibleHeight / elementHeight;
					
					// If this section is more than 50% visible, it's the active one
					if (visiblePercentage > 0.5 && visibleHeight > maxVisibleArea) {
						maxVisibleArea = visibleHeight;
						currentSection = section.id;
					}
				}
			});
			
			// Fallback: if no section is 50% visible, find the one closest to the top
			if (maxVisibleArea === 0) {
				let closestDistance = Infinity;
				sections.forEach(section => {
					if (section.element) {
						const rect = section.element.getBoundingClientRect();
						const distance = Math.abs(rect.top);
						if (distance < closestDistance) {
							closestDistance = distance;
							currentSection = section.id;
						}
					}
				});
			}
			
			setActiveSection(currentSection);
		};

		// Add scroll listeners
		window.addEventListener("scroll", handleScroll, { passive: true });
		document.addEventListener("scroll", handleScroll, { passive: true });
		document.body.addEventListener("scroll", handleScroll, { passive: true });
		
		// Add wheel event as backup
		const handleWheel = () => {
			handleScroll();
		};
		window.addEventListener("wheel", handleWheel, { passive: true });
		
		// Initial check
		setTimeout(handleScroll, 100);
		
		// Cleanup
		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("scroll", handleScroll);
			document.body.removeEventListener("scroll", handleScroll);
			window.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<nav className="nav">
			<h1>kelly serafico</h1>

			{/* Desktop Navigation */}
			<div className="desktop-nav">
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
				<a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>
					<span>say hi!</span>
				</a>
			</div>

			{/* Mobile Hamburger Button */}
			<button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
				<span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
				<span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
				<span className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}></span>
			</button>

			{/* Mobile Navigation Menu */}
			<div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
				<div className="mobile-nav-links">
					<a href="#about" onClick={() => handleNavClick("about")}>
						<span>about</span>
					</a>
					<a href="#tooling-section" onClick={() => handleNavClick("tooling-section")}>
						<span>tooling</span>
					</a>
					<a href="#projects" onClick={() => handleNavClick("projects")}>
						<span>projects</span>
					</a>
					<a href="#contact" onClick={() => handleNavClick("contact")}>
						<span>say hi!</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
