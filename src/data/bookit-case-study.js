export const bookitCaseStudy = {
	id: "bookit",
	title: "BookIt",
	subtitle: "Campus Study Space Discovery App",
	heroImage: "/images/bookit.png",
	overview: {
		description:
			"BookIt is a mobile app that helps UC Irvine students discover and compare study spaces on campus based on their unique preferences and productivity needs.",
		challenge:
			"Students struggle to identify study spaces that match their requirements, leading to wasted time, reduced productivity, and frustration.",
		solution:
			"Design a research-driven mobile experience with customizable filters and student insights to help users discover, compare, and access on-campus study spaces that match their preferences.",
		results: [
			"Collaborated with a 6-person team over a 10-week timeline",
			"Surveyed 40+ students to uncover key pain points and priorities",
			"Conducted usability testing and iterated on navigation, feedback, and content density",
			"Presented the final prototype in a design showcase",
		],
	},
	process: {
		research: [
			"Surveyed 40+ UC Irvine students on study habits and preferences (~45% prefer studying outside vs. at home; ~65% consider multiple space types)",
			"Identified key decision factors (~75% consider seating & Wi-Fi; ~70% want an app for easy access to spaces)",
			"Analyzed campus resources and gaps in discovery/communication",
		],
		design: [
			"Sketched user flows (Log In/Sign Up → Explore → Space Info → Map → Profile)",
			"Created low-fidelity wireframes and a user-flow chart",
			"Defined branding (Museo Moderno & Open Sans Pro; logo and color palette)",
			"Built high-fidelity prototypes in Figma",
		],
		testing: [
			"Ran usability tests with target students",
			"Addressed lack of feedback by adding confirmations and clearer states",
			"Refined navigation (added back button; rethought bottom-nav order to match common patterns)",
			"Reduced copy on the home screen to decrease clutter and improve scannability",
		],
	},
	technologies: {
		design: ["Figma", "User Research", "Prototyping", "User Testing"],
		methods: ["Surveys", "Usability Testing", "User Flows", "Branding"],
		tools: ["Google Forms", "Figma", "Design Thinking"],
		branding: {
			fonts: {
				primary: "Museo Moderno",
				secondary: "Open Sans Pro",
			},
		},
	},
	insights: {
		userStats: [
			"~45% prefer studying outside rather than at home",
			"~65% consider different types of study spaces",
			"~75% consider seating and Wi-Fi availability",
			"~70% said an app with easy access to study spaces would be helpful",
		],
		usabilityFindings: [
			"Lack of feedback/confirmation created task-completion uncertainty",
			"Unfamiliar page layout (favorites placed second in bottom nav)",
			"Difficulty navigating without a back button",
			"Home screen felt too wordy/cluttered",
		],
	},
	challenges: [
		"Coordinating schedules and dividing work under strict time constraints",
		"Scoping an original, feasible idea for a 10-week period",
		"Simplifying features to focus on core user needs",
		"Learning and leveling up in Figma as a team",
	],
	lessons: [
		"Early and repeated usability testing is pivotal in refining design",
		"Iteration cycles (feedback → revision → testing) add structure and clarity",
		"User research helps prioritize features that address the most critical challenges",
	],
	impact: {
		users: "40+ surveyed students",
		engagement: "Research-backed, iterative prototype with clear UX improvements",
		community: "Presented to UC Irvine design community",
		feedback: "Positive reception from board members and showcase audience",
	},
	links: {
		demoVideo: "https://docs.google.com/file/d/1vLqUaOZiaNg3nd0UjH1x8B3IBNMXcpro/preview",
	},
};
