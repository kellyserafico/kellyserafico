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
		navigate(`/case-study/${project.id}`);
	};

	return (
		<div key={project.id} className="project" id={project.id} onClick={handleCardClick}>
			<img src={project.image} className="project-image" alt={project.title} onClick={handleImageClick} />
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
				<div className="project-bottom">
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
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
