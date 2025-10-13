export const sonderCaseStudy = {
	id: "sonder",
	title: "Sonder",
	subtitle: "Mental Health Reflection & Connection App",
	heroImage: "/images/sonder.png",
	overview: {
		description:
			"Sonder is a mobile app that champions mental health through real conversations, shared experiences, and supportive communities. Each day, all users receive the same random prompt and have 10 minutes to respond—encouraging honest, present-moment reflection without likes or follower counts.", // :contentReference[oaicite:0]{index=0}
		challenge:
			"Create a safe, supportive space for mental health reflection and connection that helps users develop mindfulness habits and feel less isolated in their emotional experiences.",
		solution:
			"Developed a full-stack mobile app with React Native and FastAPI, featuring daily prompts, time-boxed responses, profiles, following, reactions, and comments—backed by a PostgreSQL database for scalable data management.", // :contentReference[oaicite:1]{index=1}
		results: [
			"Built full-stack mobile app with React Native + FastAPI + PostgreSQL (and Gemini listed in Built With)", // :contentReference[oaicite:2]{index=2}
			"Completed an initial, cohesive prototype in < 40 hours",
			"Submitted to LA Hacks 2025 on Devpost", // :contentReference[oaicite:3]{index=3}
		],
	},
	process: {
		research: [
			"Studied existing mental health and mindfulness apps",
			"Researched user needs for emotional connection and reflection",
			"Analyzed privacy and safety considerations for mental-health contexts",
			"Investigated real-time communication patterns for shared prompts"
		],
		design: [
			"Created wireframes for a minimal, calming mobile interface",
			"Designed the daily prompt flow and 10-minute response constraint", // :contentReference[oaicite:4]{index=4}
			"Planned authentication, profiles, following, and discovery",
			"Outlined moderation-friendly reactions/comments patterns" // :contentReference[oaicite:5]{index=5}
		],
		development: [
			"Built the React Native frontend (TypeScript) with feed views, submission forms, profiles, and notifications", // :contentReference[oaicite:6]{index=6}
			"Implemented FastAPI services for auth, prompt distribution, responses (text/images/anonymous), reactions, comments, and search", // :contentReference[oaicite:7]{index=7}
			"Modeled data in PostgreSQL for users, prompts, responses, and social interactions", // :contentReference[oaicite:8]{index=8}
			"Integrated real-time updates from API to app render pipeline" // :contentReference[oaicite:9]{index=9}
		],
	},
	technologies: {
		frontend: ["React Native", "TypeScript", "Mobile Development"], // :contentReference[oaicite:10]{index=10}
		backend: ["FastAPI", "Python", "PostgreSQL"], // :contentReference[oaicite:11]{index=11}
		features: ["Authentication", "Daily Prompts", "Time-boxed Responses", "Reactions & Comments", "Profiles & Following"], // :contentReference[oaicite:12]{index=12}
		tools: ["Git", "GitHub", "Figma", "Gemini"], // :contentReference[oaicite:13]{index=13}
	},
	challenges: [
		"Designing a safe environment for mental-health conversation",
		"Structuring backend routes for auth, prompts, and social features (FastAPI)", // :contentReference[oaicite:14]{index=14}
		"Relational modeling for prompts, responses, and interactions in PostgreSQL", // :contentReference[oaicite:15]{index=15}
		"Real-time UX while keeping the interface minimal and focused"
	],
	lessons: [
		"Safety and clarity are foundational for mental-health products",
		"Time-boxed, shared prompts can increase authenticity and presence", // :contentReference[oaicite:16]{index=16}
		"Asynchronous patterns in React Native are critical for auth and feeds",
		"Strong team communication prevents merge conflicts and accelerates delivery" // :contentReference[oaicite:17]{index=17}
	],
	impact: {
		users: "People seeking mindful daily reflection and supportive community",
		engagement: "Daily, synchronized prompts foster communal moments", // :contentReference[oaicite:18]{index=18}
		community: "Submitted and showcased via LA Hacks 2025 Devpost", // :contentReference[oaicite:19]{index=19}
		feedback: "Early reactions highlighted cohesion achieved within a tight 40-hour build window"
	},
	team: ["Anthony Suh", "Kelly Serafico", "James Ruiz", "Matthew Teng"], // :contentReference[oaicite:20]{index=20}
	links: {
		devpost: "https://devpost.com/software/sonder-e1bnp7", // :contentReference[oaicite:21]{index=21}
		github: "https://github.com", // placeholder target from the Devpost “Try it out” link // :contentReference[oaicite:22]{index=22}
	}
};
