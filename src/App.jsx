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
			title: "Pulse AI (2023)",
			description: "Pulse is your personal health assistant. Keep track of your health with Pulse AI. Blazing-fast diagnose system and chatting capabilities.",
			link: "https://pulseailive.azurewebsites.net/",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/pulse.png",
		},
		{
			title: "Text2Video (2023)",
			description: "Automated video creation from a single prompt, through the use of GPT-3.5, Google Cloud TTS, Pexels API and MoviePy.",
			link: "https://github.com/0Shark/text2video",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/text2video.png",
		},
		{
			title: "shkence.bot (2022)",
			description: "Fully autonomous social media postings bot for Instagram. Get your WordPress posts on Instagram in no time.",
			link: "https://github.com/0Shark/shkence.bot",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/shkence.jpg",
		},
		{
			title: "Sindi AI (2021)",
			description: "AI chatbot that can chat with you, tell you the weather, jokes, play music and more. Awarded 1st place in ASEF programming category.",
			link: "https://github.com/0Shark/SindiAIDev",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/sindiai.png",
		},
		{
			title: "Colorizer (2021)",
			description: "Old image and video colorization and restoration using DeOldify model.",
			link: "https://github.com/0Shark/colorizer",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/colorizer.png",
		},
		{
			title: "iPlant (2019-2022)",
			description:
				"A project about helping the environment by planting trees. Earn points, personalize your trees and more. Awarded 1st place in NASA SpaceApps in Albania, 1st place and 1000 € grant in Upshift startup competition.",
			link: "https://github.com/0Shark/iplant",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/iplant.jpg",
		},
		{
			title: "Group2A (2021)",
			description: "Chemistry project about the periodic table. You can learn about the elements of group 2A and their properties.",
			link: "https://github.com/0Shark/0shark.github.io/tree/master/projects/group2a",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/group2a.png",
		},
		{
			title: "Gazeta HRP (2021)",
			description: "High school newspaper website. You can read our project group articles in an interactive way.",
			link: "https://github.com/0Shark/0shark.github.io/tree/master/projects/gazeta-hrp",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/gazeta.jpg",
		},
		{
			title: "Symptoms.al (2020)",
			description: "Online symptom checker for COVID-19. You can check your symptoms and get a result based on your answers.",
			link: "#tobeupdated",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/symptoms.al.png",
		},
		{
			title: "Wintersports Albania (2018)",
			description: "Small project for ASEF web design competition. You can learn about the most popular winter sports in Albania.",
			link: "#tobeupdated",
			image: "https://raw.githubusercontent.com/0Shark/0shark.github.io/data/images/wintersports.jpg",
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
