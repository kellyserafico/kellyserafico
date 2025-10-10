// Example: How to add a new project
// Copy this structure and paste it into projects.js

export const exampleProject = {
	id: "example-project",
	title: "Example Project",
	role: "Fall 2024",
	tools: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
	description:
		"This is an example project description. You can write multiple paragraphs by using \\n\\n to create line breaks.\n\nThis is the second paragraph of the description.",
	achievements: [
		"Built a full-stack application from scratch",
		"Deployed to production with 99.9% uptime",
		"Received positive feedback from 100+ users",
	],
	image: "/images/example-project.png",
	websiteUrl: "https://example-project.com",
	githubUrl: "https://github.com/your-username/example-project",
	featured: false, // Set to true to make it appear first
};

// To add this project:
// 1. Copy the object above (without the export)
// 2. Paste it into the projects array in projects.js
// 3. Add a comma after the previous project
// 4. Update the id, title, and other fields with your project details
// 5. Add your project image to public/images/
// 6. Optionally add custom colors to ProjectCard.css
