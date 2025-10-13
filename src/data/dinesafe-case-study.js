// Detailed case study content for DineSafe
export const dinesafeCaseStudy = {
	id: "dinesafe",
	title: "DineSafe",
	subtitle: "Food Safety Transparency Platform",
	heroImage: "/images/dinesafe.png",
	overview: {
		description:
			"DineSafe is a web platform dedicated to promoting food safety and public health in Orange County by increasing transparency around restaurant hygiene standards. The platform centralizes restaurant health data and makes it easily accessible to consumers.",
		challenge:
			"Create a platform that makes restaurant health inspection data more accessible and understandable for consumers while promoting food safety awareness in Orange County.",
		solution:
			"Developed a full-stack web platform with automated data collection, AI-powered report summarization, and an intuitive interface for consumers to access restaurant health information.",
		results: [
			"Won 2nd place at UCI ICSSC WebJam",
			"Developed automated data collection system",
			"Implemented AI-powered report summarization",
			"Created centralized health data platform for Orange County",
		],
	},
	process: {
		research: [
			"Analyzed existing restaurant health data sources in Orange County",
			"Researched consumer needs for food safety information",
			"Studied data scraping techniques for government websites",
			"Investigated AI summarization tools for report processing",
		],
		design: [
			"Created user interface for restaurant health data display",
			"Designed data visualization for health scores and violations",
			"Developed search and filtering functionality",
			"Planned mobile-responsive design for consumer access",
		],
		development: [
			"Built React frontend with MongoDB for data storage",
			"Implemented Puppeteer for automated data collection",
			"Integrated OpenAI API for report summarization",
			"Added Google Maps API for location-based restaurant search",
		],
	},
	technologies: {
		frontend: ["React", "JavaScript", "CSS", "HTML"],
		backend: ["MongoDB", "Node.js", "Express"],
		ai: ["OpenAI API", "Puppeteer", "Data Scraping"],
		apis: ["Google Maps API", "Government Data APIs"],
		tools: ["Git", "GitHub", "UCI ICSSC WebJam"],
	},
	challenges: [
		"Automating data collection from various government sources",
		"Processing and summarizing complex health inspection reports",
		"Ensuring data accuracy and reliability",
		"Creating intuitive data visualization for consumers",
	],
	lessons: [
		"Data scraping requires robust error handling and validation",
		"AI summarization can significantly improve data accessibility",
		"Public health data benefits from user-friendly presentation",
		"Hackathon projects can address real-world social issues",
	],
	impact: {
		users: "Orange County residents",
		engagement: "Improved food safety awareness",
		community: "UCI ICSSC WebJam 2nd place winner",
		feedback: "Recognition for innovative use of data scraping and public health impact",
	},
};
