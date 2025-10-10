import React from "react";

const ProjectCard = ({ project, onProjectClick, onGithubClick }) => {
	return (
		<div key={project.id} className="project" id={project.id} onClick={() => onProjectClick(project.websiteUrl)}>
			<div className="project-text">
				<div className="header">
					<p className="project-title">{project.title}</p>
					<img
						src="/images/github-logo.png"
						onClick={(e) => onGithubClick(project.githubUrl, e)}
						className="github"
						alt="GitHub"
					/>
				</div>
				<p className="role">{project.role}</p>
				<div className="tools">
					{project.tools.map((tool, index) => (
						<div key={index} className="tool">
							{tool}
						</div>
					))}
				</div>
				<p className="project-description">
					{project.description.split("\n").map((line, index) => (
						<React.Fragment key={index}>
							{line}
							{index < project.description.split("\n").length - 1 && <br />}
							{index < project.description.split("\n").length - 1 && <br />}
						</React.Fragment>
					))}
				</p>
				<div className="achievements">
					{project.achievements.map((achievement, index) => (
						<div key={index} className="achievement">
							<img src="/images/check.svg" alt="Check" />
							<p>{achievement}</p>
						</div>
					))}
				</div>
			</div>
			<img src={project.image} className="project-image" alt={project.title} />
		</div>
	);
};

export default ProjectCard;
