import React, { useEffect, useRef, useState } from "react";

const Tooling = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [displayText, setDisplayText] = useState("");
	const [visibleTools, setVisibleTools] = useState([]);
	const [showAllTools, setShowAllTools] = useState(false);
	const sectionRef = useRef(null);
	const tools = [
		{ name: "Git", icon: "/images/git.svg" },
		{ name: "HTML", icon: "/images/html.svg" },
		{ name: "CSS", icon: "/images/css.svg" },
		{ name: "JavaScript", icon: "/images/javascript.svg" },
		{ name: "React", icon: "/images/react.svg" },
		{ name: "C++", icon: "/images/cpp.svg" },
		{ name: "Python", icon: "/images/python.svg" },
		{ name: "Node.js", icon: "/images/nodejs.svg" },
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
								setShowAllTools(true);
								tools.forEach((tool, index) => {
									setTimeout(() => {
										setVisibleTools(prev => [...prev, tool.name]);
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
				{showAllTools && (
					<>
						<div className="tools-r1">
							{tools.slice(0, 4).map((tool, index) => (
								<div 
									key={tool.name} 
									className={`tool-container ${visibleTools.includes(tool.name) ? 'tool-flip' : 'tool-hidden'}`}
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
									className={`tool-container ${visibleTools.includes(tool.name) ? 'tool-flip' : 'tool-hidden'}`}
								>
									<img src={tool.icon} alt={tool.name} />
									<p>{tool.name}</p>
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Tooling;
