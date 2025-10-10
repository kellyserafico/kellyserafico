import React from "react";

const Tooling = () => {
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

	return (
		<section id="tooling-section">
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
					<p id="type">skills webdev</p>
				</div>
				<div className="tools-r1">
					{tools.slice(0, 4).map((tool, index) => (
						<div key={index} className="tool-container">
							<img src={tool.icon} alt={tool.name} />
							<p>{tool.name}</p>
						</div>
					))}
				</div>
				<div className="tools-r2">
					{tools.slice(4, 8).map((tool, index) => (
						<div key={index} className="tool-container">
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
