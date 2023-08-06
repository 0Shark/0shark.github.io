import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

import Text3D from "../funky-heading/funky-heading";

import "./About.scss";

const About = () => {
	const about = useRef(null);
	const aboutText = useRef(null);
	const aboutSocial = useRef(null);

	return (
		<section className="about" ref={about} id="about">
			<div className="about_text" ref={aboutText}>
				<Text3D text="['JS', 'AI', 'Python', 'C++', 'HTML']"></Text3D>
				<p className="about_text-subtitle">
					Hi, I'm Juled Zaganjori, a Full Stack Developer based in Germany. I enjoy creating things that live on the internet, whether that be
					websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
				</p>
			</div>
			<div className="about_social" ref={aboutSocial}>
				<a href="https://github.com/0Shark" target="_blank" rel="noreferrer">
					<i className="fab fa-github hero_social-icon icon-3d"></i>
				</a>
				<a href="https://www.linkedin.com/in/juled-zaganjori/" target="_blank" rel="noreferrer">
					<i className="fab fa-linkedin hero_social-icon icon-3d"></i>
				</a>
				<a href="https://twitter.com/0Shark1" target="_blank" rel="noreferrer">
					<i className="fab fa-twitter hero_social-icon icon-3d"></i>
				</a>
			</div>
		</section>
	);
};

export default About;
