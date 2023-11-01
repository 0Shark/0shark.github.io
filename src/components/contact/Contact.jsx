import "./Contact.scss";
import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NeonCursor from "./neonCursor";

const Contact = () => {
	const contactRef = useRef(null);

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

			tl.fromTo(
				".contact_title",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: ".contact_title",
						start: "top 80%",
						end: "bottom 80%",
						scrub: true,
						toggleActions: "restart none none reverse",
					},
				}
			);
			tl.fromTo(
				".contact_subtitle",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: ".contact_subtitle",
						start: "top 80%",
						end: "bottom 80%",
						scrub: true,
						toggleActions: "restart none none reverse",
					},
				}
			);

			tl.fromTo(
				".contact_form",
				{ opacity: 0, y: 100 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: ".contact_form",
						start: "top 80%",
						end: "bottom 80%",
						scrub: true,
						toggleActions: "restart none none reverse",
					},
				}
			);
		}, contactRef);

		return () => ctx.kill();
	}, []);

	return (
		<section className="contact" ref={contactRef} id="contact">
			<div className="contact_content">
				<h2 className="contact_title">Contact</h2>
				<p className="contact_subtitle">Have a question or want to work together?</p>
				<form className="contact_form" action="https://formspree.io/f/xwkdzpoj" method="POST">
					<div className="contact_form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Name Surname" required />
					</div>
					<div className="contact_form-group">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" placeholder="email@mail.com" required />
					</div>
					<div className="contact_form-group">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="5" placeholder="Your message" required></textarea>
					</div>
					<div className="contact_form-group">
						<button type="submit" className="btn btn-primary">
							Send
						</button>
					</div>
				</form>
			</div>
			<NeonCursor />
		</section>
	);
};

export default Contact;
