import "./App.scss";
import React, { useRef, useEffect, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Loader from "./components/loader/Loader";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

gsap.to("#root", {
	autoAlpha: 1,
	duration: 0.1,
	delay: 0.1,
});

// Fetch data from https://raw.githubusercontent.com/0Shark/0shark.github.io/data/data.json
const default_data = {
	hero: {
		title: "Hi, I'm Juled",
		subtitle: "Full Stack Developer",
	},
	about: {
		text: "Hi, I'm Juled Zaganjori, a Full Stack Developer based in Germany. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.",
	},
	projects: [
		{
			title: "Project 1",
			description: "This is a description of project 1.",
			link: "https://www.google.com",
			image: "https://picsum.photos/400/200",
		},
		{
			title: "Project 2",
			description: "This is a description of project 2.",
			link: "https://www.google.com",
			image: "https://picsum.photos/450/250",
		},
		{
			title: "Project 3",
			description: "This is a description of project 3.",
			link: "https://www.google.com",
			image: "https://picsum.photos/500/300",
		},
		{
			title: "Project 4",
			description: "This is a description of project 4.",
			link: "https://www.google.com",
			image: "https://picsum.photos/200/300",
		},
		{
			title: "Project 5",
			description: "This is a description of project 5.",
			link: "https://www.google.com",
			image: "https://picsum.photos/300/300",
		},
		{
			title: "Project 6",
			description: "This is a description of project 6.",
			link: "https://www.google.com",
			image: "https://picsum.photos/400/300",
		},
	],
};

function App() {
	// Smooth scrolling
	const scroller = useRef(null);

	useEffect(() => {
		let smoother = new ScrollSmoother({
			smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
			effects: true, // looks for data-speed and data-lag attributes on elements
			smoothTouch: 0, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
			content: ".scroller-content",
		});

		// Anchor links
		const anchorLinks = document.querySelectorAll("a[href^='#']");
		anchorLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				gsap.to(smoother, {
					scrollTop: Math.min(ScrollTrigger.maxScroll(window), smoother.offset(link.getAttribute("href"), "top top")),
					duration: 1,
				});
			});
		});
	}, []);

	const [data, setData] = useState(default_data);

	// Fetch data from https://raw.githubusercontent.com/0Shark/0shark.github.io/data/data.json
	useEffect(() => {
		fetch("https://raw.githubusercontent.com/0Shark/0shark.github.io/data/data.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setData(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	return (
		<div className="App">
			<Loader />
			<Header />
			<div className="scroller-content" ref={scroller}>
				<Hero title={data.hero.title} subtitle={data.hero.subtitle} />
				<About text={data.about.text} />
				<Projects projects={data.projects} />
			</div>
		</div>
	);
}

export default App;
