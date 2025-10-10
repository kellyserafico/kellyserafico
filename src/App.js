import React from "react";
import "./styles.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tooling from "./components/Tooling";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App">
			<Nav />
			<Hero />
			<Tooling />
			<Projects />
		</div>
	);
}

export default App;
