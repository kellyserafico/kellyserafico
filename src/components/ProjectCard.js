import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
	const navigate = useNavigate();

	const handleImageClick = (e) => {
		e.stopPropagation();
		if (project.websiteUrl) {
			window.open(project.websiteUrl, "_blank");
		}
	};

	const handleCardClick = () => {
		// All projects go to their website URLs
		if (project.websiteUrl) {
			window.open(project.websiteUrl, "_blank");
		}
	};

	const handleGitHubClick = (e) => {
		e.stopPropagation();
		if (project.githubUrl) {
			window.open(project.githubUrl, "_blank");
		}
	};

	const handleFigmaClick = (e) => {
		e.stopPropagation();
		if (project.figmaUrl) {
			window.open(project.figmaUrl, "_blank");
		}
	};

	return (
		<div key={project.id} className="project" id={project.id} onClick={handleCardClick}>
			<div className="project-content">
				<div className="header">
					<p className="project-title">{project.title}</p>
				</div>
				<img src={project.image} className="project-image" alt={project.title} onClick={handleImageClick} />
				<p className="project-description">
					{project.description.split("\n").map((line, index) => (
						<React.Fragment key={index}>
							{line}
							{index < project.description.split("\n").length - 1 && <br />}
							{index < project.description.split("\n").length - 1 && <br />}
						</React.Fragment>
					))}
				</p>
				<div className="project-bottom">
					<div className="tools">
						{project.tools.map((tool, index) => (
							<div key={index} className="tool">
								{tool}
							</div>
						))}
					</div>
					{(project.githubUrl || project.figmaUrl) && (
						<div className="project-links">
							{project.githubUrl && (
								<button 
									className="github-button" 
									onClick={handleGitHubClick}
									title="View on GitHub"
								>
									<img src="/images/github-white-icon.webp" alt="GitHub" className="github-logo" />
								</button>
							)}
							{project.figmaUrl && (
								<button 
									className="figma-button" 
									onClick={handleFigmaClick}
									title="View Figma Prototype"
								>
									<img src="/images/figma.png" alt="Figma" className="figma-logo" />
								</button>
							)}
						</div>
					)}
					<div className="achievements">
						{project.achievements.map((achievement, index) => (
							<div key={index} className="achievement">
								<img src="/images/check.svg" alt="Check" />
								<p>{achievement}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
