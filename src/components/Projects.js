import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
	const handleProjectClick = (websiteUrl) => {
		window.open(websiteUrl, "_blank");
	};

	const handleGithubClick = (githubUrl, e) => {
		e.stopPropagation();
		window.open(githubUrl, "_blank");
	};

	// Sort projects: featured first, then others
	const sortedProjects = [...projects].sort((a, b) => {
		if (a.featured && !b.featured) return -1;
		if (!a.featured && b.featured) return 1;
		return 0;
	});

	return (
		<section className="projects-section" id="projects">
			<div className="projects-header">
				<h2>Projects</h2>
			</div>
			<div className="projects-grid">
				{sortedProjects.map((project) => (
					<ProjectCard key={project.id} project={project} onProjectClick={handleProjectClick} onGithubClick={handleGithubClick} />
				))}
			</div>
		</section>
	);
};

export default Projects;
