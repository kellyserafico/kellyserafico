import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.js";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [toast, setToast] = useState({ show: false, message: "", type: "" });

	const showToast = (message, type) => {
		setToast({ show: true, message, type });
		setTimeout(() => {
			setToast({ show: false, message: "", type: "" });
		}, 4000);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// EmailJS configuration
		const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

		// Prepare template parameters
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
			to_email: "seraficok@gmail.com",
		};

		// Send email using EmailJS
		emailjs
			.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				showToast("Message sent successfully!", "success");
				// Reset form
				setFormData({ name: "", email: "", message: "" });
			})
			.catch((error) => {
				console.error("FAILED...", error);
				showToast("Failed to send message. Please try again or email me directly at seraficok@gmail.com", "error");
			});
	};

	return (
		<section id="contact" className="contact-section">
			{toast.show && <div className={`toast toast-${toast.type}`}>{toast.message}</div>}
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
						<img src={`${process.env.PUBLIC_URL}/images/github-logo.png`} alt="GitHub" className="github-logo" />
					</a>
					<a
						href="https://www.linkedin.com/in/kelly-serafico/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-link linkedin-link"
					>
						<img src={`${process.env.PUBLIC_URL}/images/linkedin-icon.png`} alt="LinkedIn" className="linkedin-logo" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
