import React, { useEffect, useRef, useState, forwardRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Laptop3D from "../../components/laptop/Laptop";
import WarpBG from "../../components/warp-bg/WarpBG";

import "./Projects.scss";

gsap.registerPlugin(ScrollTrigger);

let callCount = 0;
export default function Projects(props) {
	const projects = props.projects;

	const projectRef = useRef(null);
	const projectGridRef = useRef(null);
	const laptopRef = useRef(null);
	const warpBGRef = useRef(null);

	const [laptopContent, setLaptopContent] = useState(projects[0]);

	// Pin laptop
	useEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: ".projects__content",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				pin: ".projects__laptop__pin",
				pinSpacing: false,
			});

			ScrollTrigger.create({
				trigger: ".projects__content",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				onUpdate: (self) => {
					let progress = self.progress.toFixed(2);
					let index = Math.floor(progress * projects.length);
					if (index >= projects.length) index = projects.length - 1;

					setLaptopContent(projects[index]);
				},
			});

			ScrollTrigger.create({
				trigger: ".projects__content",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				pin: ".warp_scene",
				pinSpacing: false,
			});

			ScrollTrigger.create({
				trigger: ".projects__content",
				start: "top top",
				end: "bottom bottom",
				scrub: true,
				pin: ".warp__glass",
				pinSpacing: false,
			});
		}, projectRef);

		return () => ctx.kill();
	}, []);

	return (
		<section className="projects" ref={projectRef} id="projects">
			<WarpBG forwardRef={warpBGRef} />
			<div className="warp__glass"></div>
			<div className="projects__content">
				<div className="projects__list" ref={projectGridRef}>
					{projects.map((project, index) => (
						<div className="projects__item" key={index}>
							<div className="projects__item__image">
								<img src={project.image} alt={project.title} />
							</div>
							<div className="projects__item__content">
								<h2 className="projects__item__title">{project.title}</h2>
								<p className="projects__item__description">{project.description}</p>
								<a className="projects__item__link" href={project.link} target="_blank" rel="noreferrer">
									View Project
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="projects__laptop__holder">
				<div className="projects__laptop__pin">
					<div className="projects__laptop">
						<Laptop3D laptopContent={laptopContent} forwardRef={laptopRef} />
					</div>
				</div>
			</div>
		</section>
	);
}
