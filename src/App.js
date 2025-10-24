import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tooling from "./components/Tooling";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<Router basename="/kellyserafico">
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
