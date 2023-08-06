import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Loader from "./components/loader/Loader";
import About from "./components/about/About";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

gsap.to("#root", {
	autoAlpha: 1,
	duration: 0.1,
	delay: 0.1,
});

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

	return (
		<div className="App">
			<Loader />
			<Header />
			<div className="scroller-content" ref={scroller}>
				<Hero />
				<About />
			</div>
		</div>
	);
}

export default App;
