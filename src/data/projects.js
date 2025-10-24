// Project data - easily add new projects here!
export const projects = [
	{
		id: "valdle",
		title: "Valdle",
		role: "Spring 2023",
		tools: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "PYTHON"],
		description: "Trivia website featuring various game modes that aim to challenge players' knowledge of Riot's game Valorant",
		achievements: [
			"Drove a project website to 410k+ views and 24k+ unique users in 3 months",
			"Led a multifunctional team, resulting in 40% increase in user engagement",
		],
		image: `${process.env.PUBLIC_URL}/images/valdle.png`,
		websiteUrl: "https://valdle.gg",
		githubUrl: "https://github.com/GabeGibb/valdle",
		featured: true, // Featured projects appear first
	},
	{
		id: "artr",
		title: "Artr",
		role: "Winter 2025",
		tools: ["REACT", "NEXT.JS", "TAILWINDCSS"],
		description:
			"A secure, business-friendly, and dynamic global marketplace connecting anime, gaming, and fandom creators with passionate fans.",
		achievements: [],
		image: `${process.env.PUBLIC_URL}/images/artr.png`, // replace with actual thumbnail if available
		websiteUrl: "", // add live demo or staging link if available
		githubUrl: "", // add repo link if appropriate
		featured: true,
	},
	{
		id: "dau",
		title: "Design@UCR",
		role: "Summer 2024",
		tools: ["REACT", "NEXT.JS", "TAILWINDCSS", "FIGMA"],
		description:
			"Developed a new platform-based website for the Design AT UCR club to enhance visibility and accessibility to design learning opportunities at UC Riverside.",
		achievements: [
			"Successfully developed the website for an official university club",
			"Held weekly meetings to mentor aspiring web developers",
		],
		image: `${process.env.PUBLIC_URL}/images/dau.png`,
		websiteUrl: "https://designatucr.com",
		githubUrl: "",
		figmaUrl: "", // Add Figma prototype link if available
		featured: true,
	},
	{
		id: "memotrail",
		title: "MemoTrail",
		role: "Spring 2024",
		tools: ["REACT", "TAILWINDCSS", "PYTHON", "FLASK", "POSTGRES", "A-FRAME"],
		description: "Mobile app using that uses augmented reality to overlay digital messages onto real-world locations",
		achievements: [
			"Successfully designed and implemented a mobile-first web app that uses AR",
			'Submitted to LA Hacks under the "Touch Grass" category',
			"Presented to multiple sponsors including Google, Fetch.ai, and Intel",
		],
		image: `${process.env.PUBLIC_URL}/images/MemoTrail.png`,
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
			"Mobile app designed to help UC Irvine students discover and compare study spaces on campus based on their unique preferences and productivity needs.",
		achievements: [
			"Collaborated with a team of 6 designers over 10 weeks to design a complete mobile app prototype from concept to presentation",
			"Conducted surveys with 40+ students and usability testing to identify key pain points and prioritize features",
			"Presented the final prototype to club board members in a design showcase, competing against other teams",
		],
		image: `${process.env.PUBLIC_URL}/images/bookit.png`,
		websiteUrl: "https://docs.google.com/presentation/d/1YuNWQ6dNDpUO4d5ORGcQumT4OlhYMQnNH8KN2e2FWQw/edit?usp=sharing",
		figmaUrl: "https://www.figma.com/design/JEQtNkGZ0utko5lmWYo5z7/Hi-Fi-Wireframes?node-id=0-1&t=G4cUGnkH2L640Xhj-1",
		featured: true,
	},
	{
		id: "lucidia",
		title: "Lucidia",
		role: "Spring 2024",
		tools: ["FIGMA", "REACT NATIVE", "USER RESEARCH", "USABILITY TESTING"],
		description: "Mobile journaling app designed to make dream journaling effortless and emotionally reflective.",
		achievements: [
			"Collaborated in a 5-person team to design and implement a functional prototype with React Native and Figma",
			"Improved usability through multiple testing rounds, addressing navigation issues, color contrast, and entry flows",
			"Presented the final prototype and demo to classmates and instructors, showcasing a complete UX research and design process",
		],
		image: `${process.env.PUBLIC_URL}/images/lucidia.png`,
		websiteUrl: "https://lucidia-theta.vercel.app/",
		githubUrl: "https://drive.google.com/file/d/1aY5xFuJ60TkGaMhgJbOdXeOgI-IfgysT/view?usp=sharing",
		figmaUrl: "", // Add Figma prototype link if available
		featured: true,
	},
	{
		id: "dinesafe",
		title: "DineSafe",
		role: "Fall 2024",
		tools: ["REACT", "MONGODB", "PUPPETEER", "OPENAI API", "GOOGLE MAPS API"],
		description:
			"Web platform promoting food safety in Orange County by increasing transparency around restaurant hygiene standards.",
		achievements: [
			"Developed a full-stack web platform with React and MongoDB to centralize restaurant health data in Orange County",
			"Automated data collection and inspection report summarization using Puppeteer and the OpenAI API",
			"Won 2nd place at UCI ICSSC WebJam for innovative use of data scraping and public health impact",
		],
		image: `${process.env.PUBLIC_URL}/images/dinesafe.png`, // replace with actual thumbnail if available
		websiteUrl: "https://dinesafe.vercel.app/", // add Devpost or demo link if you have one
		githubUrl: "https://github.com/Geoffrey0953/Web-Jam-Hackathon", // add repo link if available
		featured: true,
	},
	{
		id: "minlee-party",
		title: "Min Lee Party Game",
		role: "Summer 2024",
		tools: ["COLYSEUS", "REACT", "TAILWINDCSS", "TYPESCRIPT", "NODE.JS", "VITE", "FIGMA", "VERCEL"],
		description: "Multiplayer party game inspired by Jackbox, designed to deliver seamless real-time gameplay across devices.",
		achievements: [
			"Developed a full-stack multiplayer party game with real-time gameplay using Colyseus, React, Tailwind, and TypeScript",
			"Designed and prototyped interactive mini-games, lobby systems, and player flows in Figma for a polished user experience",
			"Built and deployed full-stack features with Node.js, Vite, and Vercel, including live player interactions, room codes, and voting mechanics",
		],
		image: `${process.env.PUBLIC_URL}/images/minlee.png`, // replace with actual thumbnail if available
		websiteUrl: "https://min-lee.vercel.app/", // add deployment or demo link if available
		githubUrl: "https://github.com/GabeGibb/min-lee", // add GitHub repo if available
		featured: true,
		figmaUrl: "https://www.figma.com/design/ARcPNxb95hro6ZBDNv7x4g/min-lee?node-id=0-1&t=kFFdB8rFABUSO2du-1",
	},
	{
		id: "sonder",
		title: "Sonder",
		role: "Fall 2024",
		tools: ["REACT NATIVE", "FASTAPI", "POSTGRESQL", "PYTHON", "TYPESCRIPT", "FIGMA"],
		description:
			"Mobile app designed to create a meaningful space for mental health reflection and connection in a fast-paced world.",
		achievements: [
			"Developed a full-stack mobile app with React Native and FastAPI, featuring authentication, daily prompts, and real-time responses",
			"Designed an intuitive, minimal interface emphasizing mindfulness and emotional connection through daily shared reflections",
			"Built the initial prototype within 40 hours, showcasing strong cross-functional collaboration and backend–frontend integration",
		],
		image: `${process.env.PUBLIC_URL}/images/sonder.png`,
		websiteUrl: "", // add live demo or Devpost link if available
		githubUrl: "https://github.com/kellyserafico/sonder", // add GitHub repo link if applicable
		figmaUrl: "", // Add Figma prototype link if available
		featured: true,
	},
	{
		id: "license-link",
		title: "License Link",
		role: "Spring 2025",
		tools: ["REACT", "MATERIAL UI", "NODE.JS", "EXPRESS", "POSTGRESQL", "TYPEDI", "TYPEORM", "AZURE", "DOCKER COMPOSE"],
		description: "Web-based self-licensing and publishing platform for musical theatre creators and producers.",
		achievements: [
			"Developed frontend interfaces using React and Material UI, ensuring a polished and intuitive user experience for creators and producers",
			"Implemented backend architecture with Express, TypeORM, and PostgreSQL to support scalable content management",
			"Containerized the full application with Docker Compose and deployed services on Azure for reliable, production-ready performance",
		],
		image: `${process.env.PUBLIC_URL}/images/license-link.png`, // replace with actual thumbnail if available
		websiteUrl: "", // add live demo or presentation link if available
		githubUrl: "", // add repo link if appropriate
		featured: true,
	},
];
