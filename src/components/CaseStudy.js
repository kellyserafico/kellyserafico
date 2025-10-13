import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { valdleCaseStudy } from "../data/valdle-case-study";
import { dauCaseStudy } from "../data/dau-case-study";
import { memotrailCaseStudy } from "../data/memotrail-case-study";
import { bookitCaseStudy } from "../data/bookit-case-study";
import { dinesafeCaseStudy } from "../data/dinesafe-case-study";
import { sonderCaseStudy } from "../data/sonder-case-study";

const CaseStudy = () => {
	const { projectId } = useParams();
	const project = projects.find((p) => p.id === projectId);

	// Get detailed case study data if available
	const getDetailedCaseStudy = (id) => {
		const caseStudies = {
			valdle: valdleCaseStudy,
			dau: dauCaseStudy,
			memotrail: memotrailCaseStudy,
			bookit: bookitCaseStudy,
			dinesafe: dinesafeCaseStudy,
			sonder: sonderCaseStudy,
		};
		return caseStudies[id] || null;
	};

	const detailedCaseStudy = getDetailedCaseStudy(projectId);

	if (!project) {
		return (
			<div className="case-study-container">
				<div className="case-study-content">
					<h1>Project Not Found</h1>
					<p>The project you're looking for doesn't exist.</p>
					<Link to="/" className="back-link">
						← Back to Portfolio
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="case-study-container">
			<div className="case-study-content">
				<Link to="/" className="back-link">
					← Back to Portfolio
				</Link>

				<div className="case-study-header">
					<img src={project.image} alt={project.title} className="case-study-hero-image" />
					<div className="case-study-title-section">
						<h1 className="case-study-title">{project.title}</h1>
						<p className="case-study-role">{project.role}</p>
						<div className="case-study-tools">
							{project.tools.map((tool, index) => (
								<span key={index} className="case-study-tool">
									{tool}
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="case-study-description">
					<h2>Project Overview</h2>
					<p>{detailedCaseStudy ? detailedCaseStudy.overview.description : project.description}</p>

					{detailedCaseStudy && (
						<>
							<div className="challenge-solution">
								<div className="challenge">
									<h3>Challenge</h3>
									<p>{detailedCaseStudy.overview.challenge}</p>
								</div>
								<div className="solution">
									<h3>Solution</h3>
									<p>{detailedCaseStudy.overview.solution}</p>
								</div>
							</div>
						</>
					)}
				</div>

				{project.achievements.length > 0 && (
					<div className="case-study-achievements">
						<h2>Key Achievements</h2>
						<ul>
							{(detailedCaseStudy ? detailedCaseStudy.overview.results : project.achievements).map((achievement, index) => (
								<li key={index}>{achievement}</li>
							))}
						</ul>
					</div>
				)}

				<div className="case-study-links">
					{project.websiteUrl && (
						<a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="case-study-link">
							View Live Site
						</a>
					)}
					{project.githubUrl && (
						<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="case-study-link">
							View on GitHub
						</a>
					)}
				</div>

				{detailedCaseStudy && (
					<>
						{/* Demo Video Section */}
						{detailedCaseStudy.links?.demoVideo && (
							<div className="case-study-demo">
								<h2>Demo Video</h2>
								<div className="demo-video-container">
									<iframe
										src={detailedCaseStudy.links.demoVideo}
										title={`${detailedCaseStudy.title} Demo Video`}
										className="demo-video"
										allowFullScreen
									></iframe>
								</div>
							</div>
						)}

						{/* User Insights Section */}
						{detailedCaseStudy.insights && (
							<div className="case-study-insights">
								<h2>User Research Insights</h2>
								{detailedCaseStudy.insights.userStats && (
									<div className="insights-section">
										<h3>Key Statistics</h3>
										<ul className="stats-list">
											{detailedCaseStudy.insights.userStats.map((stat, index) => (
												<li key={index} className="stat-item">
													{stat}
												</li>
											))}
										</ul>
									</div>
								)}
								{detailedCaseStudy.insights.usabilityFindings && (
									<div className="insights-section">
										<h3>Usability Findings</h3>
										<ul>
											{detailedCaseStudy.insights.usabilityFindings.map((finding, index) => (
												<li key={index}>{finding}</li>
											))}
										</ul>
									</div>
								)}
							</div>
						)}

						<div className="case-study-process">
							<h2>Development Process</h2>
							<div className="process-section">
								<h3>Research</h3>
								<ul>
									{detailedCaseStudy.process.research.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
							<div className="process-section">
								<h3>Design</h3>
								<ul>
									{detailedCaseStudy.process.design.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
							{detailedCaseStudy.process.testing && (
								<div className="process-section">
									<h3>Testing & Iteration</h3>
									<ul>
										{detailedCaseStudy.process.testing.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>
							)}
							{detailedCaseStudy.process.development && (
								<div className="process-section">
									<h3>Development</h3>
									<ul>
										{detailedCaseStudy.process.development.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>
							)}
						</div>

						<div className="case-study-challenges">
							<h2>Challenges & Solutions</h2>
							<ul>
								{detailedCaseStudy.challenges.map((challenge, index) => (
									<li key={index}>{challenge}</li>
								))}
							</ul>
						</div>

						<div className="case-study-impact">
							<h2>Impact & Results</h2>
							<div className="impact-stats">
								<div className="stat">
									<h3>{detailedCaseStudy.impact.users}</h3>
									<p>Unique Users</p>
								</div>
								<div className="stat">
									<h3>{detailedCaseStudy.impact.engagement}</h3>
									<p>Page Views</p>
								</div>
							</div>
							<p className="impact-description">{detailedCaseStudy.impact.community}</p>
						</div>

						<div className="case-study-lessons">
							<h2>Key Lessons Learned</h2>
							<ul>
								{detailedCaseStudy.lessons.map((lesson, index) => (
									<li key={index}>{lesson}</li>
								))}
							</ul>
						</div>
					</>
				)}

				{!detailedCaseStudy && (
					<div className="case-study-details">
						<h2>Project Details</h2>
						<p>This is where you can add more detailed information about the project, including:</p>
						<ul>
							<li>Technical challenges faced</li>
							<li>Design decisions and rationale</li>
							<li>Lessons learned</li>
							<li>Future improvements</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default CaseStudy;
