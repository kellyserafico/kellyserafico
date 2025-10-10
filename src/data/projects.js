// Project data - easily add new projects here!
export const projects = [
	{
		id: "valdle",
		title: "Valdle",
		role: "Spring 2023",
		tools: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "PYTHON"],
		description:
			"Valdle is an engaging Valorant trivia website featuring various game modes that aim to challenge players' knowledge of the game.\nThrough this project, I led a team while practicing agile development and improved my skills in interacting with APIs. It emphasized the value of user feedback, resulting in a user-centric and engaging platform for Valorant enthusiasts.",
		achievements: [
			"Drove a project website to 410k+ views and 24k+ unique users in 3 months",
			"Led a multifunctional team, resulting in 40% increase in user engagement",
		],
		image: "/images/valdle.png",
		websiteUrl: "https://valdle.gg",
		githubUrl: "https://github.com/GabeGibb/valdle",
		featured: true, // Featured projects appear first
	},
	{
		id: "dau",
		title: "Design@UCR",
		role: "Summer 2024",
		tools: ["REACT", "NEXT.JS", "TAILWINDCSS", "FIGMA"],
		description:
			"I worked with the Design AT UCR club to develop their new platform-based website, aimed at enhancing visibility, retention, and accessibility to design-focused learning and opportunities at the University of California, Riverside.\nThrough this experience, I improved my skills in React (Next.js) and Tailwind, and I also mentored a group of aspiring web developers in the basics of HTML, CSS, and JavaScript.",
		achievements: [
			"Successfully developed the website for an official university club",
			"Held weekly meetings to mentor aspiring web developers",
		],
		image: "/images/dau.png",
		websiteUrl: "https://designatucr.com",
		githubUrl: "https://github.com/py1u/DAU_SWE",
		featured: true,
	},
	{
		id: "memotrail",
		title: "MemoTrail",
		role: "Spring 2024",
		tools: ["REACT", "TAILWINDCSS", "PYTHON", "FLASK", "POSTGRES", "A-FRAME"],
		description:
			"MemoTrail is a mobile-first web app using augmented reality to overlay digital messages onto real-world locations. Users can leave and discover messages tied to specific places.\nI worked on UI design and frontend/backend implementation, as well as AR integration using A-Frame.",
		achievements: [
			"Successfully designed and implemented a mobile-first web app that uses AR",
			'Submitted to LA Hacks under the "Touch Grass" category',
			"Presented to multiple sponsors including Google, Fetch.ai, and Intel",
		],
		image: "/images/MemoTrail.png",
		websiteUrl: "https://devpost.com/software/memotrail?ref_content=my-projects-tab&ref_feature=my_projects",
		githubUrl: "https://github.com/GabeGibb/Notes",
		featured: true,
	},
	{
		id: "bookit",
		title: "BookIt",
		role: "Fall 2024",
		tools: ["FIGMA", "USER RESEARCH", "PROTOTYPING", "USER TESTING"],
		description:
			"BookIt is a mobile app prototype designed to help UC Irvine students discover and compare study spaces on campus based on their unique preferences and productivity needs. Our team conducted extensive user research, developed user flows and low-fidelity wireframes, and iterated through testing and feedback cycles to create a user-centric design.",
		achievements: [
			"Collaborated with a team of 6 designers over 10 weeks to design a complete mobile app prototype from concept to presentation",
			"Conducted surveys with 40+ students and usability testing to identify key pain points and prioritize features",
			"Presented the final prototype to club board members in a design showcase, competing against other teams",
		],
		image: "/images/bookit.png",
		websiteUrl: "https://docs.google.com/file/d/1vLqUaOZiaNg3nd0UjH1x8B3IBNMXcpro/preview",
		githubUrl: "",
		featured: true,
	},
	{
		id: "lucidia",
		title: "Lucidia",
		role: "Spring 2024",
		tools: ["FIGMA", "REACT NATIVE", "USER RESEARCH", "USABILITY TESTING"],
		description:
			"Lucidia is a mobile journaling app prototype designed to make dream journaling effortless and emotionally reflective. Targeting busy college students, it helps users build journaling habits through an intuitive interface, interactive calendar, and emotion-tagging system. Our team conducted ideation through Crazy 8s and mind mapping, created user flows and storyboards, and iterated based on user feedback to refine the design and improve accessibility.",
		achievements: [
			"Collaborated in a 5-person team to design and implement a functional prototype with React Native and Figma",
			"Improved usability through multiple testing rounds, addressing navigation issues, color contrast, and entry flows",
			"Presented the final prototype and demo to classmates and instructors, showcasing a complete UX research and design process",
		],
		image: "/images/lucidia.svg", // replace with actual thumbnail if available
		websiteUrl: "https://lucidia-theta.vercel.app/",
		githubUrl: "https://drive.google.com/file/d/1aY5xFuJ60TkGaMhgJbOdXeOgI-IfgysT/view?usp=sharing",
		featured: true,
	},
	{
		id: "dinesafe",
		title: "DineSafe",
		role: "Fall 2024",
		tools: ["REACT", "MONGODB", "PUPPETEER", "OPENAI API", "GOOGLE MAPS API"],
		description:
			"DineSafe is a web platform dedicated to promoting food safety and public health in Orange County by increasing transparency around restaurant hygiene standards. With no existing centralized database for health code violations, our team built one from scratch by web scraping OC Health’s website using Puppeteer. We then used the OpenAI API to summarize inspection reports for better readability and integrated Google Maps, Places, and Geocode APIs to display all restaurants interactively on a map. The platform empowers diners to make informed choices while encouraging restaurants to uphold proper health standards.",
		achievements: [
			"Developed a full-stack web platform with React and MongoDB to centralize restaurant health data in Orange County",
			"Automated data collection and inspection report summarization using Puppeteer and the OpenAI API",
			"Won 2nd place at UCI ICSSC WebJam for innovative use of data scraping and public health impact",
		],
		image: "/images/dinesafe.png", // replace with actual thumbnail if available
		websiteUrl: "", // add Devpost or demo link if you have one
		githubUrl: "", // add repo link if available
		featured: true,
	},
	{
		id: "minlee-party",
		title: "Min Lee Party Game",
		role: "Summer 2024",
		tools: ["COLYSEUS", "REACT", "TAILWINDCSS", "TYPESCRIPT", "NODE.JS", "VITE", "FIGMA", "VERCEL"],
		description:
			"Min Lee Party is a full-stack multiplayer party game inspired by Jackbox, designed to deliver seamless real-time gameplay across devices. Players can join rooms, participate in interactive mini-games, and vote on outcomes through a dynamic lobby system. The project combines Colyseus for real-time multiplayer networking with a React and Tailwind frontend, resulting in an engaging, fast-paced party experience.",
		achievements: [
			"Developed a full-stack multiplayer party game with real-time gameplay using Colyseus, React, Tailwind, and TypeScript",
			"Designed and prototyped interactive mini-games, lobby systems, and player flows in Figma for a polished user experience",
			"Built and deployed full-stack features with Node.js, Vite, and Vercel, including live player interactions, room codes, and voting mechanics",
		],
		image: "/images/minlee-party.png", // replace with actual thumbnail if available
		websiteUrl: "", // add deployment or demo link if available
		githubUrl: "", // add GitHub repo if available
		featured: true,
	},
	{
		id: "artr",
		title: "Artr",
		role: "Winter 2025",
		tools: ["REACT", "NEXT.JS", "TAILWINDCSS"],
		description:
			"A secure, business-friendly, and dynamic global marketplace connecting anime, gaming, and fandom creators with passionate fans.",
		achievements: [],
		image: "/images/artr.png", // replace with actual thumbnail if available
		websiteUrl: "", // add live demo or staging link if available
		githubUrl: "", // add repo link if appropriate
		featured: true,
	},
	{
		id: "sonder",
		title: "Sonder",
		role: "Fall 2024",
		tools: ["REACT NATIVE", "FASTAPI", "POSTGRESQL", "PYTHON", "TYPESCRIPT", "FIGMA"],
		description:
			"Sonder is a mobile app designed to create a meaningful space for mental health reflection and connection in a fast-paced world. Each day, Sonder sends a single random prompt to all users at the same time, encouraging mindful journaling and authentic community moments. Built with FastAPI and PostgreSQL on the backend and React Native on the frontend, Sonder focuses on privacy, empathy, and real-time engagement — helping users slow down and see one another a little more clearly.",
		achievements: [
			"Developed a full-stack mobile app with React Native and FastAPI, featuring authentication, daily prompts, and real-time responses",
			"Designed an intuitive, minimal interface emphasizing mindfulness and emotional connection through daily shared reflections",
			"Built the initial prototype within 40 hours, showcasing strong cross-functional collaboration and backend–frontend integration",
		],
		image: "/images/sonder.png", // replace with actual thumbnail if available
		websiteUrl: "", // add live demo or Devpost link if available
		githubUrl: "", // add GitHub repo link if applicable
		featured: true,
	},
	{
		id: "ics-search",
		title: "ICS Search Engine",
		role: "Winter 2024",
		tools: ["PYTHON", "TF-IDF", "NLP", "HTML PARSING"],
		description:
			"The ICS Search Engine is a custom-built search platform for UCI’s ICS department, featuring query stemming, TF-IDF ranking, and a self-developed web crawler. The project focuses on efficient information retrieval, natural language query processing, and scalable data indexing for course and research page discovery.",
		achievements: [
			"Implemented a full-text search pipeline using TF-IDF weighting and query stemming for accurate relevance ranking",
			"Developed a custom crawler to index UCI ICS web pages and extract course, faculty, and research data",
			"Optimized query processing and indexing efficiency to handle large document sets within minimal runtime",
		],
		image: "/images/ics-search.png", // replace with actual thumbnail if available
		websiteUrl: "", // add demo or hosted version if available
		githubUrl: "", // add repo link if applicable
		featured: false,
	},
	{
		id: "license-link",
		title: "License Link",
		role: "Spring 2025",
		tools: ["REACT", "MATERIAL UI", "NODE.JS", "EXPRESS", "POSTGRESQL", "TYPEDI", "TYPEORM", "AZURE", "DOCKER COMPOSE"],
		description:
			"License Link is a web-based self-licensing and publishing platform for musical theatre creators and producers. It empowers artists to independently manage and distribute their works while maintaining full control over licensing, marketing, and audience engagement. Built with scalability and accessibility in mind, the platform integrates a robust search and filtering system to help users discover, publish, and license productions efficiently.",
		achievements: [
			"Developed frontend interfaces using React and Material UI, ensuring a polished and intuitive user experience for creators and producers",
			"Implemented backend architecture with Express, TypeORM, and PostgreSQL to support scalable content management",
			"Containerized the full application with Docker Compose and deployed services on Azure for reliable, production-ready performance",
		],
		image: "/images/license-link.png", // replace with actual thumbnail if available
		websiteUrl: "", // add live demo or presentation link if available
		githubUrl: "", // add repo link if appropriate
		featured: true,
	},
];
