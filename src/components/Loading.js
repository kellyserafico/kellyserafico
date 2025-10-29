import React from "react";

const Loading = () => {
	return (
		<div className="loading-container">
			<div className="loading-content">
				<div className="loading-moon">
					<img src={`${process.env.PUBLIC_URL}/images/moon.png`} alt="Loading..." />
				</div>
				<div className="loading-text">
					<h2>Loading...</h2>
					<div className="loading-dots">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
