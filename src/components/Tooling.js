import React, { useEffect, useRef, useState } from "react";

const Tooling = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [displayText, setDisplayText] = useState("");
	const [visibleTools, setVisibleTools] = useState([]);
	const sectionRef = useRef(null);
	const tools = [
		{ name: "Git", icon: `${process.env.PUBLIC_URL}/images/git.svg` },
		{ name: "HTML", icon: `${process.env.PUBLIC_URL}/images/html.svg` },
		{ name: "CSS", icon: `${process.env.PUBLIC_URL}/images/css.svg` },
		{ name: "JavaScript", icon: `${process.env.PUBLIC_URL}/images/javascript.svg` },
		{ name: "React", icon: `${process.env.PUBLIC_URL}/images/react.svg` },
		{ name: "C++", icon: `${process.env.PUBLIC_URL}/images/cpp.svg` },
		{ name: "Figma", icon: `${process.env.PUBLIC_URL}/images/figma.png` },
		{ name: "Node.js", icon: `${process.env.PUBLIC_URL}/images/nodejs.svg` },
	];

	const fullText = "skills webdev";

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !isVisible) {
					setIsVisible(true);
					// Start typing animation
					let currentIndex = 0;
					const typingInterval = setInterval(() => {
						if (currentIndex <= fullText.length) {
							setDisplayText(fullText.slice(0, currentIndex));
							currentIndex++;
						} else {
							clearInterval(typingInterval);
							// Show tools one by one after typing is complete
							setTimeout(() => {
								tools.forEach((tool, index) => {
									setTimeout(() => {
										setVisibleTools((prev) => [...prev, tool.name]);
									}, index * 150); // 150ms delay between each tool
								});
							}, 500); // Small delay after typing completes
						}
					}, 100); // Adjust speed as needed
				}
			},
			{ threshold: 0.5 } // Trigger when 50% of the section is visible
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [isVisible, fullText, tools]);

	return (
		<section id="tooling-section" ref={sectionRef}>
			<div className="window-container">
				<div className="window-header">
					<div className="window-buttons">
						<div className="window-button red"></div>
						<div className="window-button yellow"></div>
						<div className="window-button green"></div>
					</div>
					<p>kelly-cli</p>
				</div>
				<div className="window-text">
					<p>kelly@dev:~$</p>
					<p id="type">{displayText}</p>
				</div>
				<div className="tools-r1">
					{tools.slice(0, 4).map((tool, index) => (
						<div
							key={tool.name}
							className={`tool-container ${visibleTools.includes(tool.name) ? "tool-flip" : "tool-hidden"}`}
						>
							<img src={tool.icon} alt={tool.name} />
							<p>{tool.name}</p>
						</div>
					))}
				</div>
				<div className="tools-r2">
					{tools.slice(4, 8).map((tool, index) => (
						<div
							key={tool.name}
							className={`tool-container ${visibleTools.includes(tool.name) ? "tool-flip" : "tool-hidden"}`}
						>
							<img src={tool.icon} alt={tool.name} />
							<p>{tool.name}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tooling;
