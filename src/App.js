import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tooling from "./components/Tooling";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Preload critical images
		const imageUrls = [
			`${process.env.PUBLIC_URL}/images/portfolio-bg.png`,
			`${process.env.PUBLIC_URL}/images/moon.png`,
			`${process.env.PUBLIC_URL}/images/cloud/mooncloud1.svg`,
			`${process.env.PUBLIC_URL}/images/cloud/mooncloud2.svg`,
			`${process.env.PUBLIC_URL}/images/cloud/mooncloud3.svg`,
			`${process.env.PUBLIC_URL}/images/cloud/mooncloud4.svg`,
			`${process.env.PUBLIC_URL}/images/cloud/mooncloud5.svg`,
			`${process.env.PUBLIC_URL}/images/git.svg`,
			`${process.env.PUBLIC_URL}/images/html.svg`,
			`${process.env.PUBLIC_URL}/images/css.svg`,
			`${process.env.PUBLIC_URL}/images/javascript.svg`,
			`${process.env.PUBLIC_URL}/images/react.svg`,
			`${process.env.PUBLIC_URL}/images/cpp.svg`,
			`${process.env.PUBLIC_URL}/images/figma.png`,
			`${process.env.PUBLIC_URL}/images/nodejs.svg`,
		];

		const loadImage = (url) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.onload = () => resolve(url);
				img.onerror = () => reject(url);
				img.src = url;
			});
		};

		// Load all images
		Promise.all(imageUrls.map(loadImage))
			.then(() => {
				// Add a small delay to ensure smooth transition
				setTimeout(() => {
					setIsLoading(false);
				}, 500);
			})
			.catch((error) => {
				console.warn("Some images failed to load:", error);
				// Still hide loading screen even if some images fail
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			});
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Nav />
								<Hero />
								<Tooling />
								<Projects />
								<Contact />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
