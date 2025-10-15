import React, { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Create mailto link with form data
		const subject = `Portfolio Contact from ${formData.name}`;
		const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
		const mailtoLink = `mailto:seraficok@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	};

	return (
		<section className="contact-section">
			<div className="contact-container">
				<h2>Let's Connect</h2>
				<p>I'm always interested in new opportunities and collaborations.</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
					</div>
					<div className="form-group">
						<input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
					</div>
					<div className="form-group">
						<textarea
							name="message"
							placeholder="Your Message"
							value={formData.message}
							onChange={handleChange}
							rows="5"
							required
						></textarea>
					</div>
					<button type="submit" className="submit-btn">
						Send Message
					</button>
				</form>

				<div className="contact-links">
					<a
						href="https://github.com/kellyserafico"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-link github-link"
					>
						<img src="/images/github-logo.png" alt="GitHub" className="github-logo" />
					</a>
					<a
						href="https://www.linkedin.com/in/kelly-serafico/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-link linkedin-link"
					>
						<img src="/images/linkedin-icon.png" alt="LinkedIn" className="linkedin-logo" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
