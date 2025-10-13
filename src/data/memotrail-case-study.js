// Detailed case study content for MemoTrail
export const memotrailCaseStudy = {
	id: "memotrail",
	title: "MemoTrail",
	subtitle: "Augmented Reality Location-Based Messaging",
	heroImage: "/images/MemoTrail.png",
	overview: {
		description:
			"MemoTrail is an innovative mobile app that uses augmented reality to overlay digital messages onto real-world locations. Users can leave virtual notes, memories, and messages at specific GPS coordinates for others to discover through their phone's camera.",
		challenge:
			"Create an engaging AR experience that connects people through location-based digital messages while maintaining privacy and ensuring intuitive user interaction.",
		solution:
			"Developed a mobile-first web app using React, A-Frame for AR functionality, and Flask backend to create a seamless AR messaging experience with real-time location tracking and message discovery.",
		results: [
			"Successfully implemented AR functionality using A-Frame",
			"Created intuitive mobile-first user interface",
			"Submitted to LA Hacks under 'Touch Grass' category",
			"Presented to multiple sponsors including Google, Fetch.ai, and Intel",
		],
	},
	process: {
		research: [
			"Studied existing AR applications and their user interaction patterns",
			"Researched GPS accuracy requirements for location-based services",
			"Analyzed privacy concerns with location-based messaging",
			"Investigated AR frameworks suitable for web development",
		],
		design: [
			"Created wireframes for mobile AR interface",
			"Designed intuitive camera overlay and message discovery flow",
			"Developed user onboarding process for AR functionality",
			"Planned location-based message organization system",
		],
		development: [
			"Built React frontend with mobile-first responsive design",
			"Implemented A-Frame for AR functionality and camera access",
			"Created Flask backend with PostgreSQL for message storage",
			"Integrated GPS tracking and location-based message retrieval",
		],
	},
	technologies: {
		frontend: ["React", "Tailwind CSS", "A-Frame", "JavaScript"],
		backend: ["Python", "Flask", "PostgreSQL"],
		ar: ["A-Frame", "WebXR", "GPS API"],
		tools: ["Git", "GitHub", "LA Hacks"],
	},
	challenges: [
		"Implementing smooth AR functionality in web browsers",
		"Ensuring accurate GPS location tracking for message placement",
		"Creating intuitive user interface for AR interactions",
		"Managing real-time message discovery and display",
	],
	lessons: [
		"AR development requires careful consideration of device capabilities",
		"Location-based services need robust privacy and security measures",
		"Mobile-first design is essential for AR applications",
		"Hackathon environments require rapid prototyping and iteration",
	],
	impact: {
		users: "Hackathon participants and judges",
		engagement: "Innovative AR messaging concept",
		community: "LA Hacks 'Touch Grass' category submission",
		feedback: "Positive reception from sponsors and hackathon community",
	},
};
