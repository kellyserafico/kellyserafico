import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, onProjectClick, onGithubClick }) => {
	return (
		<div key={project.id} className="project" id={project.id}>
			<img src={project.image} className="project-image" alt={project.title} />
			<div className="project-content">
				<div className="header">
					<p className="project-title">{project.title}</p>
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
				<div className="tools">
					{project.tools.map((tool, index) => (
						<div key={index} className="tool">
							{tool}
						</div>
					))}
				</div>
				<div className="achievements">
					{project.achievements.map((achievement, index) => (
						<div key={index} className="achievement">
							<img src="/images/check.svg" alt="Check" />
							<p>{achievement}</p>
						</div>
					))}
				</div>
				<div className="project-actions">
					<Link to={`/case-study/${project.id}`} className="case-study-link">
						View Case Study
					</Link>
					{project.websiteUrl && (
						<a
							href={project.websiteUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="website-link"
							onClick={(e) => e.stopPropagation()}
						>
							Visit Site
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="github-link"
							onClick={(e) => e.stopPropagation()}
						>
							GitHub
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
