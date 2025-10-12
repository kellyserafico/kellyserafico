import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tooling from "./components/Tooling";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";

function App() {
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
							</>
						}
					/>
					<Route path="/case-study/:projectId" element={<CaseStudy />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
